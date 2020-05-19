import Vue from "vue";
import Vuex from "vuex";
import spender from "./modules/spender";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    spender,
  },
});
