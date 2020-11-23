<script>
import { ref, onMounted } from 'vue'
export default {
  // 聲明有emit的事件
  emits: {
    CallBack: (num) => {
      // 驗證函式內容 如果不符合會有warnning
      return num.value === 0
    }
  },
  setup(props, context) { // setup(props, {emit})

    const num = ref(0);

    onMounted(() => {
      // （父層接這個事件的名稱,要回傳的內容）
      context.emit('CallBack', num)
    })

    return {
      num
    }
  }
}
</script>

<template>
  <h1>{{num}}</h1>
</template>

<style>
h1 {
  color: red;
  font-size: 20px;
}
</style>
