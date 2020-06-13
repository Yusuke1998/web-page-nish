<template>
  <v-navigation-drawer
    :value="editProfile"
    v-resize="getWindowWidth"
    :permanent="editProfile"
    :width="drawer.size"
    right
    fixed
    temporary
    style="transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);"
  >
    <EditProfile />
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
import EditProfile from './edit'

export default {
  components: { 
    EditProfile 
  },
  data: () => ({
    drawer: {
      size: 600,
      show: true
    }
  }),
  computed: mapState({ 
    editProfile: ({ auth: { editProfile } }) => editProfile 
  }),
  methods: {
    getWindowWidth() {
      if (process.client) {
        const Width = window.innerWidth
        this.drawer.size = Width * 0.44
      }
    }
  }
}
</script>

<style></style>
