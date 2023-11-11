import { getLocationByNameAPI } from '../../api/locationAPI'

const state = () => ({
  listLocation: [],
})

const mutations = {
  setLocationMutation(state, data) {
    state.listLocation = data
    console.log(data)
  },
}

const actions = {
  async getLocationByNameAction(context, locationName) {
    const data = await getLocationByNameAPI(locationName)
    context.commit('setLocationMutation', data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
