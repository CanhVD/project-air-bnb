import { postUserRegister } from '../../api/userAPI'
import { postUserLogin } from '../../api/userAPI'

const state = () => ({
  userDetail: {}
})

const mutations = {
  setUserDetailMutation(state, user) {
    state.userDetail = user
    localStorage.setItem("userLogin", JSON.stringify(user));
  },

  setUserLoginFromLocalStorage(state, user) {
    state.userDetail = user
  },
  logOutUserMutation(state) {
    state.userDetail = {}
  }
}

const actions = {
  async postUserRegisterAction(context, userRegister) {
    try {
      const res = await postUserRegister(userRegister)
      context.commit("setUserDetailMutation", res.user)
    } catch (error) {
      alert(error)
    }

  },

  async postUserLoginAction(context, { userLogin, router }) {
    try {
      const res = await postUserLogin(userLogin)
      context.commit("setUserDetailMutation", res.user)
      router.push("/")
    } catch (error) {
      alert(error.message)
    }
  },

  logOutUserAction(context) {
    localStorage.removeItem("userLogin");
    context.commit("logOutUserMutation")
  },

  loadUserLoginFromLocalStorageAction(context) {
    let userLogin = {};
    if (localStorage.getItem("userLogin")) {
      userLogin = JSON.parse(localStorage.getItem("userLogin"));
    }
    context.commit("setUserLoginFromLocalStorage", userLogin);
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
