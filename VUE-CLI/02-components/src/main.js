import { createApp } from 'vue'
import App from './App.vue'
import { numPrice } from '@/lib/tools.js'

const app = createApp(App)

// 自定義模板語法
app.directive('focus', {
  mounted(el) { // onMounted
    el.focus();
    console.log(el)
  }
});

app.directive('price', {
  // (element, 傳入值)
  mounted(el, binding) {
    el.innerHTML = numPrice(binding.value);
  },
  // 資料有被更新(值被改變)的時候
  updated(el, binding) {
    el.innerHTML = numPrice(binding.value);
  }
});


app.mount('#app')