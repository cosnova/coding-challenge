import axios, { CanceledError } from 'axios'

export default axios.create({
  baseURL: 'https://makeup-api.herokuapp.com/api/v1',
})

export { CanceledError }
