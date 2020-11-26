import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rwd",
    name: "rwd",
    // 網站一開始的時候就載入全部的內容，會造成loading時間過久
    // component: Rwd,
    // lazy loading (dynamic loading)進入router時才會載入內容，加快載入時間
    // 動態載入的元件會被打包成獨立的js 增加request時間
    // 所以要依照頁面的複雜程度決定是不是要動態載入
    component: () => import("../views/Rwd.vue"),

  },
  {
    path: "/vuejs",
    name: "vuejs",
    component: () => import("../views/Vuejs.vue"),
  },
  {
    path: "/reactjs",
    name: "reactjs",
    component: () => import("../views/Reactjs.vue"),
  },
  {
    path: "/html5",
    name: "html5",
    component: () => import("../views/Html5.vue"),
  },
  {
    path: "/nodejs",
    name: "nodejs",
    component: () => import("../views/Nodejs.vue"),
  },
  // 例外處理(不符合上面網址)一定要貼在最下面
  {
    path: "/:pathMatch(.*)",
    component: NotFoundComponent
  },
];

const router = createRouter({
  // history:router切換模式
  // 要請後端設定router的指向位置到根目錄
  history: createWebHistory(process.env.BASE_URL),
  // 可以用#切換頁面，如果網頁也有錨點的機制會讓網站錯誤，SEO也會下降，爬蟲不會抓到#後面的部
  // 後台網站不care SEO及網址長相建議使用createWebHashHistory
  // history: createWebHashHistory(), 
  routes,
});

export default router;
