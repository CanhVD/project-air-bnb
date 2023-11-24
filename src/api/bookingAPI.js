import axiosAPI from '.'
export const addBooking = (booking) => {
  return axiosAPI.post("api/v1/Bookings", booking)
}

