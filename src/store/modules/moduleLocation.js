import { getLocationByNameAPI } from '../../api/locationAPI'

const state = () => ({
  listLocation: [],
})

// const getters = {
//   userListBySearchName(state) {
//     const {listLocation } = state;
//     return listLocation.filter((location) =>
//       user.name.toLowerCase().includes(searchName.toLowerCase())
//     );
//   },
// };

const mutations = {
  setLocationMutation(state, data) {
    state.listLocation = data
  },
}

const actions = {
  async getLocationByNameAction(context, locationName) {
    try {
      const data = await getLocationByNameAPI(locationName)
      context.commit('setLocationMutation', data)
    } catch (error) {
      alert(error)
    }

  },

  clearStateLocationAction(context) {
    context.commit('setLocationMutation', [])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
