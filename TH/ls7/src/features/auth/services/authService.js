import { postJson } from '../../../services/httpClient'

const SIGN_UP_ENDPOINT = 'https://dummyjson.com/users/add'
const LOGIN_ENDPOINT = 'https://dummyjson.com/auth/login'

export function registerUser(formData) {
  return postJson(SIGN_UP_ENDPOINT, {
    firstName: formData.fullName,
    email: formData.email,
    phone: `${formData.countryCode}${formData.phoneNumber}`,
    password: formData.password,
    address: {
      city: formData.location || '',
    },
  })
}

export function loginUser(formData) {
  return postJson(LOGIN_ENDPOINT, {
    username: formData.username,
    password: formData.password,
    expiresInMins: 30,
  })
}
