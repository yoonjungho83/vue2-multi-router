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
      path: "/popupView1",
      name: "PopupView1",
      component: "PopupView1",
    },
    {
      path: "/popupView2",
      name: "PopupView2",
      component: "PopupView2",
    },
    {
      path: "/popupView3",
      name: "PopupView3",
      component: "PopupView3",
    },
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
