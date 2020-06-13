<template>
  <v-card min-height="100vh" color="grey lighten-3">
    <BaseToolbar
      :title="'Perfil de Usuario'"
      :button-save="true"
      @close="closeEdit"
      @save="update"
      type-title="icon"
      icon="edit"
    />
    <v-card-text style="overflow-y: auto;height: calc(100vh - 64px)">
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <v-card>
              <v-card-title style="justify-content: space-between;">
                <div class="title">
                  Editar
                </div>
                <div class="text-right">
        					<v-avatar v-if="data.photo" @click="uploadFile" size="120">
        						<img :src="data.photo" />
        					</v-avatar>
        					<v-btn v-else fab dark small color="primary" @click="uploadFile">
        						<v-icon dark>photo</v-icon>
        					</v-btn>
                  <input
	                  type="file"
	                  style="display:none"
	                  ref="file"
	                  @change="handleFilesUpload"
	                  accept="image/*"
	            	  />
                </div>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <v-row dense>
                  <v-col cols="6">
                    <v-text-field
                      v-model="data.name"
                      :label="'nombre de usuario'"
                      required
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="data.email"
                      :label="'correo'"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row dense>
                  <v-col cols="6">
                    <v-text-field
                      v-model="data.person.firstname"
                      :label="'nombres'"
                      required
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="data.person.lastname"
                      :label="'apellidos'"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row dense>
                  <v-col cols="12">
                    <v-textarea
                      label="Dirección"
                      v-model="data.person.address"
                      rows="2"
                      required
                      no-resize
                      outlined
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="data.person.city"
                      :label="'ciudad'"
                      required
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="data.person.municipality"
                      :label="'municipio'"
                      required
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="data.person.state"
                      :label="'estado'"
                      required
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="data.person.country"
                      :label="'pais'"
                      required
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import InputFile from './filePicker'
import BaseToolbar from '../../custom/BaseToolbar'

export default {
  components: { InputFile, BaseToolbar },
  data: () => ({
    file: null,
    photo: null,
    data: {
      id: '',
      name: '',
      status: '',
      rol: '',
      email: '',
      photo: '',
      photo2: '',
      person:{
        firstname: '',
        lastname: '',
        identity: '',
        city: '',
        state: '',
        municipality: '',
        genere: '',
        country: '',
        phone: '',
        address: ''
      }
    },
    loading: false
  }),
  computed: mapState({
    user: ({ auth: { currentUser } }) => currentUser,
    profile: ({ auth: { profile } }) => profile
  }),
  watch: {
    photo() {
      this.data.photo2 = this.photo.photo
      this.data.photo = this.photo.imageFile
    }
  },
  async created() {
    await this.getProfile(this.user.id)
    const {
      id,
      name,
      status,
      rol,
      email,
      photo,
      person:{
        firstname,
        lastname,
        identity,
        city,
        state,
        municipality,
        genere,
        country,
        phone,
        address
      }
    } = this.profile

    this.data = {
      id,
      name,
      status,
      rol,
      email,
      photo,
      photo2: photo,
      person:{
        id,
        firstname,
        lastname,
        identity,
        city,
        state,
        municipality,
        genere,
        country,
        phone,
        address
      }
    }
  },
  methods: {
    ...mapActions({
      changeDrawerProfile: 'changeDrawerProfile',
      getProfile: 'getProfile'
    }),
    closeEdit() {
    	console.log('changeDrawerProfile: false')
      	this.changeDrawerProfile(false)
    },
    uploadFile() {
      this.$refs.file.click()
    },
    handleFilesUpload() {
      this.file = this.$refs.file.files[0]
      const imageURL = URL.createObjectURL(this.$refs.file.files[0])
      this.$refs.file.value = ''
    },
    async update() {
	    return
	    this.loading = true
	    const formData = new FormData()
	    formData.append('name', this.data.name)
	    formData.append('email', this.data.email)
	    if (this.file) formData.append('photo', this.file)
	    //await this.updateOrganizationData(formData)
	    this.closeEdit()
	    this.loading = false
    }
  }
}
</script>

<style>
.recuadro {
  width: 8em;
  border: 1px solid #e0e0e0;
  text-align: center;
  height: 7em;
  padding: 0.2em;
  background: #eeeeee;
}
</style>
