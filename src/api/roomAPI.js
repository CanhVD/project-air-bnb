import axiosAPI from '.'
export const getRoomByLocationId = (locationId, pageIndex = 1, pageSize = 5) => {
  return axiosAPI.get(`/api/v1/Rooms/search?locationId=${locationId}&pageIndex=${pageIndex}&pageSize=${pageSize}`)
}

export const getRoomById = (roomId) => {
  return axiosAPI.get(`api/v1/Rooms/${roomId}`)
}
