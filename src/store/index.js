import { createStore } from 'vuex'
import moduleLocation from './modules/moduleLocation'
import moduleRoom from './modules/moduleRoom'
import moduleUser from './modules/moduleUser'
import moduleComment from './modules/moduleComment'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    moduleLocation,
    moduleRoom,
    moduleUser,
    moduleComment
  },
})
