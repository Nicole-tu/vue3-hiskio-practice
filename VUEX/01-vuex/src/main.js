import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

// 用 use 引入 store
createApp(App)
  .use(store)
  .mount("#app");
