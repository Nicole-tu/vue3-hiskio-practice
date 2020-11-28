import { createStore } from "vuex";
import Auth from "./Auth";

// export default createStore({
//   state: {
//     isOpen: false
//   },
//   actions: {
//     // 透過 actions 觸發 mutations 事件
//     handleMenuOpen(context) {
//       const bool = !context.state.isOpen;
//       // commit(mutations名稱,參數)
//       context.commit('handleMenuOpen', bool)
//     }
//   },
//   mutations: {
//     // 用 mutations 修改 state 的值
//     handleMenuOpen(state, bool) {
//       state.isOpen = bool;
//     }
//   },
//   getters: {
//     // 資料流統一由 getters 丟出去
//     isOpen(state) {
//       return state.isOpen;
//     }
//   },
// });

// 拆分成個別的檔案
import state from './state.js';
import actions from './action.js';
import mutations from './mutations.js';
import getters from './getters.js';

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules: {
    Auth
  },
});