import { getRoomByLocationId, getRoomById } from '../../api/roomAPI'

const state = () => ({
  dataRoom: {},
  roomDetail: {}
})

const mutations = {
  setDataRoomMutation(state, data) {
    state.dataRoom = data
  },

  setRoomMutation(state, data) {
    state.roomDetail = data
  },
}

const actions = {
  async getRoomByLocationIdAction(context, { locationId, pageIndex }) {
    try {
      const data = await getRoomByLocationId(locationId, pageIndex)
      context.commit('setDataRoomMutation', data)
    } catch (error) {
      alert(error)
    }

  },

  async getRoomByIdAction(context, roomId) {
    try {
      const data = await getRoomById(roomId)
      context.commit('setRoomMutation', data)
    } catch (error) {
      alert(error)
    }

  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
