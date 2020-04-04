<template>
  <v-container grid-list-md text-xs-center>
    <v-divider class="footer-divider"></v-divider>
    <v-layout row wrap class="footer-text">
      <v-flex 
        xs4 
        class="stacking"
        v-for="item in list" :key="item.name">
        <p>
          <a 
          :href="item.href">{{item.name}}</a>
        </p>
      </v-flex>
      <v-divider 
        class="footer-divider"></v-divider>
      <v-flex 
        xs12><p>&copy; {{text}}</p></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name:'ic-footer',
  props: ['list','text']
}
</script>

<style>
.footer-text {
  font-family: 'Raleway', sans-serif;
  color: #2c3e50;
}
.footer-divider {
  margin-bottom: 20px;
  margin-top: -20px;
}
.stacking {
  margin-bottom: -10px;
}
</style>
