<script>
import { useFetch } from '../composition-api';

export default {
  setup() {

    const { isLoading, fetchData, errMsg } = useFetch('https://vue-lessons-api.herokuapp.com/photo/list');

    return { isLoading, fetchData, errMsg };
  },
};
</script>

<template>
  <div>
    <!-- 處理非同步 -->
    <img alt class="loading" src="../assets/load.gif" v-if="!isLoading" />
    <div class="imgBlock" v-else>
      <img :key="item.url" :src="item.url" alt v-for="item in fetchData.data" />
    </div>
    <h1 v-if="errMsg">ERROR:{{errMsg}}</h1>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
