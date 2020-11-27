<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const routerArr = ['', 'about', 'courses'];
    const route = useRoute();
    const index = ref(0);

    // 監控網址變化
    watch(
      () => route.path,
      () => {
        routerArr.forEach((path, idx) => {
          const routerPath = route.path.substr(1).split('/');
          if (routerPath === path) {
            index.value = idx;
          }
        })
      });
    return { index };
  }
};
</script>

<template>
  <div id="nav">
    <!-- 當網址符合的時候會自動增加一個class router-link-active -->
    <router-link :class="{'active':index === 0}" to="/">Home</router-link>|
    <router-link :class="{'active':index === 1 }" to="/about">About</router-link>|
    <router-link :class="{'active':index === 2}" to="/courses">Course</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.active {
      color: #42b983;
    }
  }
}
</style>
