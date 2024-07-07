

<script>
import { ref, reactive, watch , computed } from '@vue/composition-api'
import {mapGetters} from 'vuex'

export default {
  name: "popupMenu",

  computed:{
    ...mapGetters({viewMode : "invCommon/getViewMode"})
  },

  setup() {

      console.log("1234");
      const menuList = reactive(
        [
          {
            "path": "/PopupHome",
            "name": "PopupHome",
            "component": "PopupHomeComponent",
          },
          {
            "path": "/detail",
            "name": "PopupDetail",
            "component": "PopupDetailComponent",
          }
        ]
      );

      const state = reactive({
        selectedIdx: 1,
        container: 2,
      });

      const fn_setMenu = function(){
        console.log("fn_setMenu view mode " , this.viewMode);
        let cnt = menuList.length;
        menuList.push(
          {
              "path": "/addMenu"+cnt,
              "name": "addMenu"+cnt,
              "component": "PopupDetailComponent",
            }
        );
        state.selectedIdx++;
      };

      watch(menuList , ()=>{
        console.log("watch");
      })

      const selectedIdx = computed(() => state.selectedIdx*2);

      return{
        state , menuList , fn_setMenu , selectedIdx
      }
  }
}

</script>


<template>
  <div>
    <h1>popup 메뉴 화면</h1>
    <ul>
        <li v-for=" (menu , index) in this.menuList" :key="index">
        <router-link :to="menu.path">{{menu.name}}</router-link>   
        </li>
    </ul>
    <h1>state.selectedIdx : {{state.selectedIdx}}</h1>
    <button @click="fn_setMenu" > setmenu</button>
    <h1>getViewMode : {{this.viewMode}}</h1>
    <h1>container : {{state.container}}</h1>
    <h1>selectedIdx*2 : {{selectedIdx}}</h1>
  </div>
</template>

<style>

</style>