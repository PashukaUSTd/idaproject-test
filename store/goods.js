import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


export const state = () => ({
  goods: [
    {
      title: 'Картинка',
      description: 'Самая красвая страна это Россия',
      image: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_600,h_337/https://shkolnaiapora.ru/wp-content/uploads/2018/09/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F-%D1%83%D1%81%D1%82%D1%80%D0%B5%D0%BC%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2-%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B5-1.jpg',
      price: 1200
    }
  ],
  formAgreeClasses: '',
  goodId: '',
})

export const mutations = {
  addGood(state, good) {
    state.goods.push(good);
  },

  deleteGood(state) {
    state.goods = state.goods.filter(good => good.id !== state.goodId);
  },

  sortByProp(state, value) {
    if (value.min) {
      state.goods.sort((a, b) => (a[value.value] > b[value.value] ? 1 : -1));
    } else {
      state.goods.sort((a, b) => (a[value.value] > b[value.value] ? -1 : 1));
    }
  },

  addClass(state, value) {
    state.formAgreeClasses = value
  },

  setGoodId(state, value) {
    state.goodId = value
  }

}
