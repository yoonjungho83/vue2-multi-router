<template>
  <div>
    <h1>popup 메뉴 화면</h1>
    <ul>
        <li v-for=" (menu , index) in this.menuList" :key="index">
        <router-link :to="menu.path">{{menu.name}}</router-link>   
        </li>
        
    </ul>
  </div>
</template>

<script>

export default {

    data(){
       return {
        menuList : [    
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
       }
    },

    beforeCreate() {
     
    },
    
    created() {

        //  console.log("routesArray " , this.menuList);
        // this.menuList.forEach(route => {
        //     this.$router.addRoutes([{
        //         path: route.path,
        //         name: route.name,
        //         component: () => import(`@/components/popup/${route.component}.vue`),
        //     }]);
        // });

        // this.$router.push({name : "PopupDetail"});
    },
}
</script>

<style>

</style>