/**
 * vuex 配置
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    app
  }
// eslint-disable-next-line
} as object)
