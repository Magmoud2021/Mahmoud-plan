import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    colorcode: "Blue",

    products: [
      { name: "mahmoud", price: 20 },
      { name: "ali", price: 10 },
    ],
  },

  mutations: {
    decrasecounter(state) {
      state.counter--;
    },
    incrasecounter(state) {
      state.counter++;
    },
  },

  actions: {},
  getters: {},

  modules: {},
});
