<template>
  <v-toolbar class="white">
    <v-spacer class="hidden-sm-and-up brand-spacer"/>
    <v-toolbar-title class="text-xs-center brand-logo">
      <v-icon 
        link :to="{ path: '/' }"
        x-large class="primary--text hidden-sm-and-down brand-icon">filter_hdr
      </v-icon> 
      {{title}}
      <span 
        link :to="{ path: '/' }"
        class="blue--text text--darken-3 accented-text">
        {{subtitle}}
      </span>
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn 
        v-for="item in menu" 
        :key="item.name"
        link :to="{ path: item.href }"
        class="blue--text text--darken-2 accented-text">
        {{ item.name }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'top-nav',
  props: [
    'menu',
    'title',
    'subtitle'
  ]
}
</script>

<style>

</style>