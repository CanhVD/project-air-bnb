import axiosAPI from '.'
import axios from 'axios'
export const postUserRegister = (registerUser) => {
  console.log(registerUser)
  return axios.post("https://localhost:44356/api/v1/Authentications/register", registerUser)
}
