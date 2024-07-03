<template>
  <div id="app">
    <router-view/>
  </div>
  
</template>


<script>
  // import PopupComponent from '@/components/PopupComponent.vue';
  export default {
    components: {
      // PopupComponent
    },
    data: ()=> {
      return {
        popupView : false,
      }
    },
    methods: {
      // openPopup(){
      //   this.popupView = (this.popupView) ? false : true
      // }
    },
    created() {
      this.$router.push({path:"/popup"});
    },
    
  };
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
