import { postUserRegister } from '../../api/userAPI'
import { postUserLogin } from '../../api/userAPI'
import { postChangePassword } from '../../api/userAPI'
import configs from '../../configs'


const state = () => ({
  userDetail: {}
})

const mutations = {
  setUserDetailMutation(state, data) {
    state.userDetail = data.user
    localStorage.setItem("userLogin", JSON.stringify(data));
    configs.tokenByClass = data.token
  },

  setUserLoginFromLocalStorage(state, data) {
    state.userDetail = data.user
    configs.tokenByClass = data.token
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
      context.commit("setUserDetailMutation", res)
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
      context.commit("setUserLoginFromLocalStorage", userLogin);
    }
  },

  async changePasswordAction(context, changePassword) {
    try {
      console.log(changePassword)
      await postChangePassword(changePassword)
      alert("Thay đổi mật khẩu thành công")

    } catch (error) {
      alert("Thay đổi mật khẩu thất bại")
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
