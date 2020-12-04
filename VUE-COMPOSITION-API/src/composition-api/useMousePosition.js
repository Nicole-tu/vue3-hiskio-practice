import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue';
export function MousePosition() {

  // const x = ref(0);
  // const y = ref(0);

  // 改用reactive
  const position = reactive({ x: 0, y: 0 });

  const posUpdate = (e) => {
    // x.value = e.pageX;
    // y.value = e.pageY;
    position.x = e.pageX;
    position.y = e.pageY;
  };

  onMounted(() => {
    window.addEventListener('mousemove', posUpdate)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', posUpdate)
  })

  // return { x, y }

  // 如果物件是用reactive宣告
  // 直接回傳position在外層解構 const {x,y} = MousePosition();
  // 會解除資料綁定的功能所以須透過toRefs包裝
  return toRefs(position);

  // 如果還有其他變數需要回傳則使用延展方式
  const name = ref('test');
  return { ...toRefs(position), name }
}