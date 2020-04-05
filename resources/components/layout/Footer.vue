<template>
  <v-container grid-list-md text-xs-center>
    <v-divider class="footer-divider"></v-divider>
    <v-row>
      <v-col 
        :cols="calcSize(list)" 
        class="stacking"
        v-for="item in list" 
        :key="item.name">
        <p class="text-center">
          <a 
          :href="item.href">{{item.name}}</a>
        </p>
      </v-col>
      <v-col cols="12">
        <p class="text-center">&copy; {{text}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name:'ic-footer',
  props: ['list','text'],
  methods:{
    calcSize(item)
    {
      if (item.length == 1)
      {
        return '12'
      }
      if (item.length == 2)
      {
        return '6'
      }
      if (item.length == 3)
      {
        return '4'
      }
      if (item.length == 4)
      {
        return '3'
      }
    }
  }
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
