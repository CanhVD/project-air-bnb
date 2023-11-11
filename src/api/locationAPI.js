import axiosAPI from '.'
export const getLocationByNameAPI = (locationName) => {
  return axiosAPI.get(`/api/v1/Locations/getName?name=${locationName}`)
}
