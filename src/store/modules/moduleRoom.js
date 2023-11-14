import { getRoomByLocationId, getRoomById } from '../../api/roomAPI'

const state = () => ({
  listRoom: [],
  roomDetail: {}
})

const mutations = {
  setListRoomMutation(state, data) {
    state.listRoom = data
  },

  setRoomMutation(state, data) {
    state.roomDetail = data
  },
}

const actions = {
  async getRoomByLocationIdAction(context, locationId) {
    const data = await getRoomByLocationId(locationId)
    context.commit('setListRoomMutation', data)
  },

  async getRoomByIdAction(context, roomId) {
    const data = await getRoomById(roomId)
    context.commit('setRoomMutation', data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
