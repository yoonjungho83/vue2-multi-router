<template>
    <div>
      <h2>Popup Home</h2>
      <button @click="$router.push({ name: 'PopupDetail' })">Go to Detail</button>

      <CustomRealTreeVue :domName="treeNm" />

    </div>
  </template>
  
  <script>
import CustomRealTreeVue from './CustomRealTree.vue';



  export default {

    components: { CustomRealTreeVue },
    data(){
      return {
        treeNm : "realTree"
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