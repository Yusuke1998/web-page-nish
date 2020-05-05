<template>
  <v-parallax v-if="show && img" :src="`${img||'assets/img_parallax.jpg'}`">
    <v-layout
      column
      align-center
      justify-center
      class="white--text"
    >
      <div class="subheading mb-1 hero-text-sub text-xs-center">
        {{titleXs}}
      </div>
      <p class="white--text hero-text-header mb-2 display-2 text-xs-center">
        {{titleLg}}
      </p>
      <div class="subheading mb-3 hero-text-sub text-xs-center">
        {{titleMd}}
      </div>
      <v-btn
        class="mt-3 green darken-1 accented-text" 
        dark
        href="#ver-mas"
      >
        Ver mas
      </v-btn>
    </v-layout>
  </v-parallax>
</template>
<script>

import { mapState } from 'vuex'

export default {
  props:{
    img:{
      type:String,
      required:true
    },
    titleXs:{
      type:String,
      required:true
    },
    titleMd:{
      type:String,
      required:true
    },
    titleLg:{
      type:String,
      required:true
    }
  },
  name:'hero',
  computed:{
    ...mapState({
      show: ({showParallax}) => showParallax
    })
  }
}
</script>

<style>
.hero-text-header {
  font-family: 'Zilla Slab', serif;
}
.hero-text-sub {
  font-family: 'Raleway', sans-serif;
}
.brand-text {
  font-weight: bold;
}
</style>
