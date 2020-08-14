import Vue from 'vue';
import Vuex from 'vuex';
import paintings from './modules/paintings';

Vue.use(Vuex);

export const store=new Vuex.Store({
  modules: {
    paintings
  }
})
