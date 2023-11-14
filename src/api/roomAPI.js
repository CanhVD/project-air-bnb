import axiosAPI from '.'
export const getRoomByLocationId = (locationId) => {
  return axiosAPI.get(`/api/v1/Rooms/search?locationId=${locationId}`)
}

export const getRoomById = (roomId) => {
  return axiosAPI.get(`api/v1/Rooms/${roomId}`)
}
