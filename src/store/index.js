import { createStore } from 'vuex'
import moduleLocation from './modules/moduleLocation'
import moduleRoom from './modules/moduleRoom'
import moduleUser from './modules/moduleUser'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    moduleLocation,
    moduleRoom,
    moduleUser
  },
})
