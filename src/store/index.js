import { createStore } from 'vuex'
import moduleLocation from './modules/moduleLocation'
import moduleRoom from './modules/moduleRoom'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    moduleLocation,
    moduleRoom,
  },
})
