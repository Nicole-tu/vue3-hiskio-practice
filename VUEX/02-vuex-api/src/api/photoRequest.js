import axios from 'axios';

const photoRequest = axios.create({
  baseURL: 'https://vue-lessons-api.herokuapp.com/',
});

// 送出api之前
photoRequest.interceptors.request.use(
  (config) => {
    // 可以在這裡做送出之前的資料驗證處理
    console.log("請求發起前");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 拿到response要丟出去之前
photoRequest.interceptors.response.use(
  (response) => {
    console.log("請求發起後");
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 回傳 promise
export const getPhotoRequest = () => photoRequest.get("/photo/list");