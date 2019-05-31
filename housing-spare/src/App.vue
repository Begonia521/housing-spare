<template>
  <div id="app">
    <router-view/>
   
  </div>
</template>

<script>
import { getFly } from './api/index'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    a1(){
      getFly().then((res=>{console.log(res.data)}))
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
