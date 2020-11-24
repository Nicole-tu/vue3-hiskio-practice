import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Rwd from "../views/Rwd.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
