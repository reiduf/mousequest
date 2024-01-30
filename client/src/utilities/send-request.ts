import { getToken } from './users-service'

interface SimpleRequestInit extends Omit<RequestInit, "headers"> {
  headers?: { [key: string]: string },
}

type HTTPMethod = "GET" | "POST" | "PUT" |  "DELETE";

export default async function gsendRequest(url: string, method: HTTPMethod = 'GET', payload: any | null = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  const options: SimpleRequestInit = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken()
  if(token) {
    options.headers = options.headers || {}
    options.headers.Authorization = `Bearer ${token}`
  }

  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) {
    return res.status !== 204 && res.json();
  }
  throw new Error('Bad Request');
}