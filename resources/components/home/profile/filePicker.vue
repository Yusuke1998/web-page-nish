<template>
  <div>
    <!-- slot for parent component to activate the file changer -->
    <div @click="launchFilePicker()">
      <slot name="activator"></slot>
    </div>
    <!-- image input: style is set to hidden and assigned a ref so that it can be triggered -->
    <input
      ref="file"
      type="file"
      :name="uploadFieldName"
      style="display:none"
      @change="onFileChange($event.target.name, $event.target.files)"
    />
    <!-- error dialog displays any potential error messages -->
    <v-dialog v-model="errorDialog" max-width="300">
      <v-card>
        <v-card-text class="subheading">{{ errorText }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="errorDialog = false">Got it!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ImageInput',
  props: {
    // Use "value" to enable using v-model
    value: Object
  },
  data: () => ({
    errorDialog: null,
    errorText: '',
    uploadFieldName: 'file',
    maxSize: 2048
  }),
  methods: {
    launchFilePicker() {
      this.$refs.file.click()
    },
    onFileChange(fieldName, file) {
      const { maxSize } = this
      console.log(file)
      const imageFile = file[0]
      if (file.length > 0) {
        console.log('Dentro')
        const size = imageFile.size / maxSize / maxSize
        if (!imageFile.type.match('image.*')) {
          console.log('No valido')
          // check whether the upload is an image
          this.errorDialog = true
          this.errorText = 'Please choose an image file'
        } else if (size > 1) {
          console.log('Muy Grande')
          // check whether the size is greater than the size limit
          this.errorDialog = true
          this.errorText = 'Your file is too big! Please select an image under 1MB'
        } else {
          console.log('valido')
          // Append file into FormData and turn file into image URL
          const formData = new FormData()
          const imageURL = URL.createObjectURL(imageFile)
          console.log(imageFile)
          formData.append(fieldName, imageFile)
          // Emit the FormData and image URL to the parent component
          this.$emit('input', { imageFile, logo: imageURL })
        }
      }
    }
  }
}
</script>