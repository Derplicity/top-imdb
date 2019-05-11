import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import movies from './modules/movies';

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    movies,
  },
});
