import Vue from 'vue';
import VueRouter from 'vue-router'
// import { VueRouter, createWebHistory } from 'vue-router'


Vue.use(VueRouter);


const routerPop = new VueRouter({
  mode: 'history',
    routes: [], // 초기에는 빈 배열로 설정
  });

const routesArray = [
    {
      path: "/PopupHome",
      name: "PopupHome",
      component: "PopupHomeComponent",
    },
    {
      path: "/detail",
      name: "PopupDetail",
      component: "PopupDetailComponent",
    }
];

function fatch(){
    console.log("fatch routesArray " , routesArray);
    routesArray.forEach(route => {
      routerPop.addRoute({
            path: route.path,
            name: route.name,
            component: () => import(`@/components/popup/${route.component}.vue`),
          });
    });
    
}
fatch();


export default routerPop
