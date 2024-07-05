<template>
  <div id="app1">
    <h2>RealGrid Vue Sample</h2>
    <CustomRealgrid :domName="dom1"/>
    <CustomRealgrid :domName="dom2"/>
  </div>
</template>
  
  <script>
import CustomRealgrid from './CustomRealgrid.vue';




  export default {
    name: 'App1',
  components: {
    CustomRealgrid
  },
  data() {
    return {
      dom1: "realgrid1",
      dom2: "realgrid2"
    }
  }
  };
  </script>



<style>

#app1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
  