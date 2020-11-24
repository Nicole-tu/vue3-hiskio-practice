<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    // const textInput = ref(null); // 變數名稱需與element ref名稱相同

    // onMounted(() => {
    //   textInput.value.focus();
    // });

    const num = ref(0);

    return {
      // textInput 
      num
    };
  },
};
</script>

<template>
  <!-- <input ref="textInput" id="textBar" type="text" placeholder="input text" /> -->

  <!-- 使用自定義模板(directive)綁定 -->
  <!-- <input v-focus type="text" placeholder="input text" />
  <h1 v-price="123456"></h1>-->

  <!-- 同步顯示 -->
  <input v-focus v-model="num" type="text" placeholder="input text" />
  <h1 v-price="num"></h1>
</template>

<style scoped>
input {
  display: block;
  width: 100%;
  height: 30px;
  background-color: rgb(200, 219, 219);
  padding-left: 10px;
}
</style>
