<template>
    <div class="popup">
        <button @click="closePopup">popup components의 Close</button>
        <PopupMemu/>
        <p>-------------------- 아래는 contents 영역 ----------------------</p>
        <router-view></router-view>
      
    </div>
  </template>
  
  <script>
import PopupMemu from '@/components/popup/PopupMemu.vue';
import routerPop from "@/router-pop";

  export default {
    router: routerPop,
    methods: {
      closePopup() {
        this.$router.push({ path: '/' });
      },
    },
    components :{
      PopupMemu
    }
    
    
  };
  </script>
  
  <style>
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  </style>
  