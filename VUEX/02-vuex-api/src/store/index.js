import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    handleInit({ commit }) {
      // 確保 dispatch 在非同步狀況下已完成的話要回傳 promise 
      // return 資料才能在後面接 then 取得
      return axios.get('https://vue-lessons-api.herokuapp.com/photo/list')
        .then(res => {
          commit('handleInit', res.data);
          return res.data;
        });
    },
    handleLoadingStatus({ commit }, bool) {
      commit('handleLoadingStatus', bool);
    },
    handleAddImg({ commit }) {
      commit('handleAddImg');
    },
    handleRemoveImg({ commit }) {
      commit('handleRemoveImg');
    },
  },
  mutations: {
    handleInit(state, payload) {
      state.photoArr = payload;
    },
    handleLoadingStatus(state, bool) {
      state.isLoad = bool;
    },
    handleAddImg(state) {
      state.idx++;
      if (state.idx > state.photoArr.length - 1) {
        state.idx = 0;
      }
    },
    handleRemoveImg(state) {
      state.idx--;
      if (state.idx < 0) {
        state.idx = state.photoArr.length - 1;
      }
    }
  },
  getters: {
    isLoad(state) {
      return state.isLoad;
    },
    photoArr(state) {
      return state.photoArr;
    },
    idx(state) {
      return state.idx;
    },
  },
});
