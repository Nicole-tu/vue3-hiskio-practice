<script>
// import PropsTest from '@/components/PropsTest.vue'
import ListItem from '@/components/ListItem.vue'
import TitleBar from '@/components/TitleBar.vue'
// import EmitTest from '@/components/EmitTest.vue'
import TimerBox from '@/components/TimerBox.vue'

import { ref, reactive } from 'vue'
export default {
  components: {
    // PropsTest
    ListItem,
    TitleBar,
    TimerBox
    // EmitTest
  },
  setup() {
    // const str = ref('Hello World');

    // const bool = ref(true)

    // const num = ref(0)

    // const arr = reactive([])

    // const obj = reactive([])

    // const handleClickFn = () => {

    // }

    // return {
    //   str,
    //   bool,
    //   num,
    //   arr,
    //   obj,
    //   handleClickFn
    // };
    const isOpen = ref(true);

    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    }

    const handleCallBackFn = (num) => {
      console.log('app=>', num)
    }

    const handleTimeOutFn = (num) => {
      console.log('time is over', num.value)
    }

    return {
      isOpen, toggleOpen, handleTimeOutFn /* handleCallBackFn, */
    }
  }
}
</script>

<template>
  <!-- 有用v-bind可以動態傳值 沒有v-bind就只能傳字串 -->
  <!-- <PropsTest
    :str="str"
    :bool="bool"
    :num="num"
    :arr="arr"
    :obj="obj"
    :handleClickFn="handleClickFn"
  />-->
  <TitleBar :toggleOpen="toggleOpen" />
  <ListItem :isOpen="isOpen" />
  <!-- <EmitTest @CallBack="handleCallBackFn" /> -->
  <TimerBox @TimeOut="handleTimeOutFn" />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: slategray;
}

#app {
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
}
</style>
