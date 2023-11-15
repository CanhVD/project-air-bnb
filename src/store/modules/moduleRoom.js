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
    try {
      const data = await getRoomByLocationId(locationId)
      context.commit('setListRoomMutation', data)
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
