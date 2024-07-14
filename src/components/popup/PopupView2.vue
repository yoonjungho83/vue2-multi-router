<template>
    <div>
      <h2>Realgrid tree sample</h2>
      <button @click="$router.push({ name: 'PopupDetail' })">Go to Detail</button>
      <div style="height:200px;">
        <CustomRealTreeVue :domName="treeNm" />
      </div>
      <div style="height:200px;">
        <CustomRealTreeVue2></CustomRealTreeVue2>
      </div>
    </div>
  </template>
  
  <script>
import CustomRealTreeVue from './CustomRealTree.vue';
import CustomRealTreeVue2 from './CustomRealTree2.vue';


  export default {

    components: { 
      CustomRealTreeVue , 
      CustomRealTreeVue2,
    },
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