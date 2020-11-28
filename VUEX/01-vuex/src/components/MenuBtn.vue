<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    const handClickMenu = () => {
      // dispatch 一個 actions 事件
      store.dispatch('handleMenuOpen');
    };

    return { handClickMenu };
  },
};
</script>
<template>
  <a @click="handClickMenu" class="menuBtn">
    <i class="fas fa-bars fa-3x"></i>
  </a>
</template>
<style lang="scss" scoped>
a.menuBtn {
  cursor: pointer;
  position: absolute;
  color: #fff;
  z-index: 10;
  top: 50px;
  right: 50px;
}
</style>
