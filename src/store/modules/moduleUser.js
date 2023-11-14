import { postUserRegister } from '../../api/userAPI'

const state = () => ({
  userDetail: {}
})

const mutations = {
  setUserDetailMutation(state, user) {
    state.userDetail = user
  }
}

const actions = {
  async postUserRegisterAction(context, userRegister) {
    const res = await postUserRegister(userRegister)
    console.log(res)
    context.commit("setUserDetailMutation", userRegister)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
