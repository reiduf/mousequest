import * as usersAPI from "./users-api"

export interface User {
  name: string,

}


export async function signUp(userData: usersAPI.UserData): Promise<User | null> {
  const token = await usersAPI.signUp(userData)
  localStorage.setItem('token', token)
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem('token')
  if (!token) return null

  const payload = JSON.parse(atob(token.split('.')[1]))
  if(payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token')
    return null
  }

  return token
}

export function getUser(): User | null {
  const token = getToken()
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logout() {
  localStorage.removeItem('token');
}

export async function login(credentials: usersAPI.Credentials): Promise<User> {
  const token = await usersAPI.login(credentials)
  localStorage.setItem('token', token)
  return getUser()!;
}

export function checkToken() {
  return usersAPI.checkToken().then(dateStr => new Date(dateStr))
}