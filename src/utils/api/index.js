import { create } from 'apisauce'

export const api = create({
  baseURL: 'https://api.coincap.io/v2/',
  headers: {
      'Accept-Language': 'en',
      'Content-Type': 'application/json; charset=utf-8; v=1.0',
  },
})
export default api;
