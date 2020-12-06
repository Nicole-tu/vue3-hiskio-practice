<!--script 
// import { ref } from "vue";
// export default {
//   setup() {
//     const name = ref("mike");
//     return {
//       name,
//     };
//   },
// };
/script -->
<!-- 
1. script setup
在template裡面沒有使用到的變數就不會被return ex:timer
注意！：其他編譯工具可能沒有支援這個寫法
-->
<!-- 
2. style CSS variable injection
宣告CSS變數可以直接在style裡面用v-bind變數
-->
<script setup>
import { ref } from 'vue';

let timer = ref(0);

const name = ref('mike');
const handleName = () => {
  name.value = 'andy';
}

const nameColor = ref('#FF0000');
const handleColor = () => {
  nameColor.value = '#0000FF';
}

</script>

<template>
  <h1 class="title">{{ name }}</h1>
  <button @click="handleName">change name</button>
  <button @click="handleColor">change color</button>
</template>

<style lang="scss">
.title {
  font-size: 30px;
  // color: red;
  color: v-bind(nameColor);
}
</style>
