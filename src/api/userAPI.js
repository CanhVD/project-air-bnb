import axiosAPI from '.'
import axios from 'axios'
export const postUserRegister = (registerUser) => {
  return axiosAPI.post("api/v1/Authentications/register", registerUser)
}

export const postUserLogin = (loginUser) => {
  console.log(loginUser)
  return axiosAPI.post("/api/v1/Authentications/login", loginUser)
}

export const postChangePassword = (changePassword) => {
  console.log(changePassword)
  return axiosAPI.post("/api/v1/Authentications/change-password", changePassword)
}
