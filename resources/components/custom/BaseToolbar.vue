<template>
  <v-toolbar 
    :color="color"
    :dark="dark"
    class="rounded-0 px-0"
    elevation="5"
    style="z-index:6"
  >
    <!------------------------------------------>
    <!-- BTN CLOSE ----------------------------->
    <!------------------------------------------>
    <v-toolbar-items>
      <v-btn @click="$emit('close')" text>
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar-items>
    <v-divider vertical class="mr-4" />
    <v-toolbar-title class="d-flex align-center">
      <!------------------------------------------>
      <!-- TYPE-ICON ----------------------------->
      <!------------------------------------------>        
      <template v-if="typeTitle === 'icon'">
        <v-icon v-if="icon" left>
          {{ icon }}
        </v-icon>
        <span class="subtitle-1 font-weight-medium">
          {{ title }}
        </span>
      </template>
      <!------------------------------------------>
      <!-- TYPE-IMAGE ---------------------------->
      <!------------------------------------------>        
      <template v-else-if="typeTitle === 'image'">
        <v-img
          :src="image"
          contain
          width="30px"
          height="30px"
          aspect-ratio="1"
          class="mr-3"
        />
        <span class="subtitle-1 font-weight-medium">
          {{ title }}
        </span>
      </template>
      <!------------------------------------------>
      <!-- TYPE-INPUT ---------------------------->
      <!------------------------------------------>
      <template v-else-if="typeTitle === 'input'">
        <v-text-field
          ref="title_navbar"
          :value="value"
          @input="change"
          hide-details
          solo
          flat
          dense
          background-color="rgba(0,0,0,.2)"
          class="hidden-xs-only"
        >
          <template v-slot:prepend-inner v-if="image || icon">
            <v-img
              v-if="image"
              :src="''"
              contain
              aspect-ratio="1"
              width="20px"
              class="mr-2"
            />
            <v-icon v-else-if="icon" width="20px" class="mr-2">
              {{ icon }}
            </v-icon>
          </template>
        </v-text-field>
      </template>
      <!------------------------------------------>
      <!-- TYPE-STATUS --------------------------->
      <!------------------------------------------>
      <template v-else>
        <v-icon
          :color="status !== 1 ? status === 2 ? 'error' : 'grey' : 'success' "
          left
          small
        >
          fiber_manual_record
        </v-icon>
        <strong>{{ title }}</strong>
      </template>
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <slot />
    </v-toolbar-items>
    <v-toolbar-items>
      <!------------------------------------------>
      <!-- SAVE BUTTON --------------------------->
      <!------------------------------------------>
      <template v-if="buttonSave">
        <v-divider vertical />
        <v-tooltip color="black" left>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              :loading="loaderSave"
              :disabled="loaderSave"
              @click="$emit('save')"
              text
              class="hidden-xs-only"
            >
              <v-icon>save</v-icon>
            </v-btn>
          </template>
          <span class="caption">{{ !textSave ? 'Guardar' : textSave }}</span>
        </v-tooltip>
      </template>
      <!------------------------------------------>
      <!-- MENU OPTIONS -------------------------->
      <!------------------------------------------>
      <template>
        <v-divider vertical />
        <v-menu
          v-if="options"
          transition="slide-y-transition"
          offset-y
          nudge-bottom="10"
          min-width="180px"
        >
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-if="buttonSave" @click="$emit('save')" class="hidden-sm-and-up">
              <v-list-item-content>
                <v-list-item-title>
                  {{ !textSave ? 'Guardar' : textSave }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-for="option in filteredOptions"
              :key="option.name"
              @click="$emit(option.name)"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ option.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'BaseToolbar',
  props: {
    typeTitle: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    image: {
      type: String,
      required: false,
      default: null
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    buttonSave: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: String,
      required: false,
      default: null
    },
    options: {
      type: Array,
      required: false,
      default: null
    },
    status: {
      type: Number,
      required: false,
      default: null
    },
    textSave: {
      type: String,
      required: false,
      default: null
    },
    loaderSave: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: 'primary'
    },
    dark: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    filteredOptions() {
      return this.options.filter(e => e.show)
    }
  },
  mounted() {
    if (this.typeTitle === 'input') {
      this.setFocus()
    }
  },
  methods: {
    change(value) {
      this.$emit('input', value)
    },
    setFocus() {
      this.$refs.title_navbar.focus()
    }
  }
}
</script>

<style></style>
