import sendRequest from "./send-request"
const BASE_URL = '/api/users'

export interface UserData {
  name: string;
  email: string;
  password: string;
}


export function signUp(userData: UserData) {
  return sendRequest(BASE_URL, 'POST', userData)
}


export interface Credentials {
  email: string,
  password: string,
}

export function login(credentials: Credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`)
}
