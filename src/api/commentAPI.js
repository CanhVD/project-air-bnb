import axiosAPI from '.'

export const addComment = (comment) => {
  return axiosAPI.post("api/v1/Comments", comment)
}

export const getCommentPaging = (roomId, pageSize = 3, pageIndex = 1) => {
  return axiosAPI.get(`/api/v1/Comments/get-paging?roomId=${roomId}&pageSize=${pageSize}&pageIndex=${pageIndex}`)
}

export const increaseLike = (commentId) => {
  return axiosAPI.put('/api/v1/Comments/increaseLike', commentId, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}


