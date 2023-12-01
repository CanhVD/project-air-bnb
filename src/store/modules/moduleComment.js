import { addComment } from '../../api/commentAPI'
import { getCommentPaging } from '../../api/commentAPI'

const state = () => ({
  comment: {},
  dataComment: {}
})

const mutations = {
  setCommentMutation(state) {
    state.comment.content = ''
  },

  setListCommentMutation(state, dataComment) {
    state.dataComment = dataComment
  }
}

const actions = {
  async createCommentAction(context, comment) {
    try {
      await addComment(comment)
      alert("Bình luận thành công")
      context.commit('setCommentMutation')
    } catch (error) {
      console.log(error)
      alert("Bình luận thất bại")
    }
  },

  async getCommentPagingAction(context, { roomId, pageSize, pageIndex }) {
    try {
      const dataComment = await getCommentPaging(roomId, pageSize, pageIndex)
      context.commit('setListCommentMutation', dataComment)
    } catch (error) {
      alert(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
