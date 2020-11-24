<script>
import PropsTest from '@/components/PropsTest.vue'
import ListItem from '@/components/ListItem.vue'
import TitleBar from '@/components/TitleBar.vue'
import EmitTest from '@/components/EmitTest.vue'
import TimerBox from '@/components/TimerBox.vue'
import EventBack from '@/components/EventBack.vue'
import TemplateRefs from '@/components/TemplateRefs.vue'
import SlotsTitle from '@/components/SlotsTitle.vue'

import { ref, reactive } from 'vue'
export default {
  components: {
    // PropsTest,
    // EmitTest,
    ListItem,
    TitleBar,
    TimerBox,
    EventBack,
    TemplateRefs,
    SlotsTitle
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
    const isOpen = ref(false);//ref(true);


    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    }

    // const handleCallBackFn = (num) => {
    //   console.log('app=>', num)
    // }

    const handleTimeOutFn = (num) => {
      console.log('time is over', num.value)
    }

    // const isAnimate = ref(false);

    // const handleAnimateClick = () => {
    //   isAnimate.value = !isAnimate.value
    // }

    return {
      isOpen, toggleOpen, handleTimeOutFn,
      /* handleCallBackFn, */
      /* isAnimate,
      handleAnimateClick */
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
  <!-- <TitleBar :toggleOpen="toggleOpen" />
  <ListItem :isOpen="isOpen" />
  <TimerBox @TimeOut="handleTimeOutFn" />-->
  <!-- <EmitTest @CallBack="handleCallBackFn" /> -->

  <!-- 動畫執行完才移除DOM -->
  <!-- <button @click="handleAnimateClick">click</button>
  <transition name="fade">
    <div v-if="isAnimate" id="box"></div>
  </transition>-->

  <!-- <EventBack /> -->
  <!-- <TemplateRefs /> -->
  <slots-title>title1</slots-title>
  <p>paragraph 1</p>
  <slots-title>title2</slots-title>
  <p>paragraph 2</p>
  <slots-title>title3</slots-title>
  <p>paragraph 3</p>
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

/* 開頭與 transition name 相同 */
/* .fade-enter-active .fade-leave-active {
  transition: opacity 0.5s ease;
} */

/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
} */

/* 使用 CSS3 keyframes 轉場 */
/* @keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active {
  animation: bounce-in 0.5s;
}

.fade-enter-active {
  animation: bounce-in 0.5s reverse;
} */

/* #box {
  width: 100px;
  height: 100px;
  background-color: brown;
} */
</style>
