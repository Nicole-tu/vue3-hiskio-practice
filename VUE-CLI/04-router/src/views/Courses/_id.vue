<script>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, reactive, onUnmounted } from 'vue';
import axios from 'axios';
export default {
  setup() {

    // 取得 router 內所有參數
    const route = useRoute();

    // 操作網址用的函式
    const router = useRouter();

    const isError = ref(false);

    const course = reactive({ data: {} });

    let timer = null;

    onMounted(() => {
      axios
        .get(`https://vue-lessons-api.herokuapp.com/courses/${route.params.id}`)
        .then((res) => {
          course.data = res.data.data[0];
        })
        .catch(err => {
          isError.value = true;
          course.data['errorMsg'] = err.response.data.error_message;
          timer = setTimeout(() => {
            router.push('/courses'); // router.push({ path: '/courses' });
            // 回上一頁
            // router.go(-1);
          }, 3000)
        })
    });

    // 一定要做這個清除的動作
    onUnmounted(() => {
      clearTimeout(timer);
    })

    return { course, isError };
  },
};
</script>
<template>
  <div>
    <div v-if="!isError">
      <h1>{{course.data.name}}</h1>
      <h2>NTD:{{course.data.money}}</h2>
      <img :src="course.data.photo" alt />
      <!-- 等到有資料再顯示 -->
      <div v-if="Object.keys(course.data).length !==0">
        <img :src="course.data.teacher.img" alt />
        <p>{{course.data.teacher.name}}</p>
      </div>
    </div>
    <!-- error_message -->
    <h1 v-if="isError">{{course.data.errorMsg}}</h1>
  </div>
</template>

<style></style>
