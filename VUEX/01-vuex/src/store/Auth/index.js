export default {
  // namespaced=true 可以在不同 module 裡面有相同的名稱
  namespaced: true,
  state: {
    token: ''
  },
  actions: {
    setToken(context, token) {
      context.commit('setToken', token);
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  },
  getters: {
    getToken(state) {
      return state.token;
    }
  }
};