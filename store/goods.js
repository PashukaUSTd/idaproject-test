import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


export const state = () => ({
  goods: [],
})

export const mutations = {
  addGood(state, good) {
    state.goods.push(good);
  },
  deleteGood(state, id) {
    state.goods = state.goods.filter(good => good.id !== id);
  },
  sortByProp(state, value, min = true) {
    if (min) {
      state.goods.sort((a, b) => (a[value] > b[value] ? 1 : -1));
    } else {
      state.goods.sort((a, b) => (a[value] > b[value] ? 1 : -1)).reverse();
    }
  }
}
