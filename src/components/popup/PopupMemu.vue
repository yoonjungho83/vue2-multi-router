

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
          path: "/popupView1",
          name: "RealGrid",
          component: "PopupView1",
        },
        {
          path: "/popupView2",
          name: "RealGrid TreeView",
          component: "PopupView2",
        },
        {
          path: "/popupView3",
          name: "GoJS TreeView",
          component: "PopupView3",
        },
        {
      path: "/popupView4",
      name: "PopupView4",
      component: "PopupView4",
    },
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
      const fn_revMenu = function(){
        let cnt = menuList.length;
        menuList.splice(cnt-1 ,1);
        state.selectedIdx--;
      };

      watch(menuList , ()=>{
        console.log("watch");
      })

      const selectedIdx = computed(() => state.selectedIdx*2);

      return{
        state , menuList , fn_setMenu , selectedIdx , fn_revMenu
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
    <h1></h1>
    <button @click="fn_setMenu" > Insert Menu</button>
    <button @click="fn_revMenu" > Remove Menu</button>
    <div>
      getViewMode : [{{this.viewMode}}] ||
      container : [{{state.container}}] 
      
    </div>
    <div>
      state.selectedIdx : [{{state.selectedIdx}}] ||
      selectedIdx*2 : [{{selectedIdx}}]
    </div>
    
  </div>
</template>

<style>

</style>