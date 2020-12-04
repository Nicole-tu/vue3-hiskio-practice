<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import ImageBox from "./components/ImageBox/index.vue";
import LoadingBar from "./components/LoadingBar.vue";
export default {
  components: {
    LoadingBar,
    ImageBox,
  },
  setup() {
    const store = useStore();

    // loading 不屬於資料流就可以放在畫面中不用在 vuex 處理 
    const handleImgLoad = (images) => {
      let i = 0;
      images.forEach(image => {
        const newImage = new Image();
        newImage.src = image.url
        newImage.onload = () => {
          i++;
          store.dispatch('handleLoadingStatus', images.length === i);
        }
      });
    }

    const init = () => {
      store.dispatch('handleInit').then((res) => {
        console.log(res)
        handleImgLoad(res);
      });
    };

    onMounted(() => {
      init();
    });

    return {};
  },
};
</script>

<template>
  <div id="app">
    <LoadingBar />
    <ImageBox />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slategray;
}
</style>
