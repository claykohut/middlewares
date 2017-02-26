import axios from 'axios';
import {
  FETCH_USERS
} from './types'

export function fetchUsers() {
  const request = axios.get('https://jsonplaceholder.typicode.com/users')

  return {
    type: FETCH_USERS,
    payload: request
  }
}
