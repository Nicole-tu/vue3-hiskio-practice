<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    // useStore 包含所有 vuex 的操作
    // 不要操作 store.state 或是直接抓取 store.state 的值
    // 處理資料的邏輯放在 store 裡面，畫面上直接取用結果
    // 不要直接在畫面做 store.commit
    // 資料流統一從 dispatch 開始
    const store = useStore();

    const isOpen = computed(() => {
      return store.getters.isOpen;
    })
    const handClickMenu = () => {
      store.dispatch('handleMenuOpen');
    };
    return { handClickMenu, isOpen };
  },
};
</script>
<template>
  <div :class="['menu', { open: isOpen }]">
    <a @click="handClickMenu" class="closeBtn">
      <i class="fas fa-times fa-3x"></i>
    </a>
    <ul class="nav">
      <li>
        <a>abous</a>
      </li>
      <li>
        <a>content</a>
      </li>
      <li>
        <a>user</a>
      </li>
      <li>
        <a>address</a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  right: -350px;
  width: 350px;
  height: 100%;
  z-index: 20;
  background-color: #fff;
  transition: right 0.3s;
  &.open {
    right: 0px;
  }
  > a.closeBtn {
    cursor: pointer;
    position: absolute;
    right: 50px;
    top: 50px;
  }
  > ul.nav {
    position: absolute;
    width: 100%;
    height: 300px;
    top: 50%;
    margin-top: -150px;
    padding: 0;
    > li {
      display: block;
      width: 100%;
      height: 25%;
      > a {
        cursor: pointer;
        display: block;
        width: 100%;
        height: 100%;
        padding-left: 50px;
        line-height: 300%;
        font-size: 22px;
      }
    }
  }
}
</style>
