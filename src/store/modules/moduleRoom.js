import { getRoomByLocationId } from '../../api/roomAPI'

const state = () => ({
  listRoom: [],
})

const mutations = {
  setRoomMutation(state, data) {
    state.listRoom = data
    console.log(data)
  },
}

const actions = {
  async getRoomByLocationIdAction(context, locationId) {
    const data = await getRoomByLocationId(locationId)
    context.commit('setRoomMutation', data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
