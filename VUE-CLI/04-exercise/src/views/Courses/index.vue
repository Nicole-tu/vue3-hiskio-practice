<script>
import axios from 'axios';
import { reactive, onMounted } from 'vue';
export default {
  setup() {
    const coursesList = reactive({ data: {} })

    onMounted(() => {
      axios
        .get('https://vue-lessons-api.herokuapp.com/courses/list')
        .then((res) => {
          coursesList.data = res.data;
          console.log(coursesList.data)
        })
    })

    return { coursesList };
  },
};
</script>
<template>
  <div id="courses">
    <router-link
      :to="`/courses/${course.id}`"
      class="card"
      v-for="course in coursesList.data"
      :key="course.id"
    >
      <img :src="course.photo" alt />
      <div class="content">
        <h1>{{course.name}}</h1>
        <div class="teacher-box">
          <div class="teach-img">
            <img class="teacher" :src="course.teacher.img" alt />
            <p>{{course.teacher.name}}</p>
          </div>
          <h2>NTD:{{course.money}}</h2>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
#courses {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
a.card {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 318px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
  margin-bottom: 20px;
  opacity: 0.7;
  transition: opacity 0.2s;
  background-color: rgb(231, 231, 231);
  &:hover {
    opacity: 1;
  }
  > img {
    margin-right: 10px;
  }
  .content {
    > h1 {
      font-size: 14px;
      text-align: left;
    }
    .teacher-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
      > h2 {
        font-size: 13px;
      }
      .teach-img {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        > img {
          border-radius: 25px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
