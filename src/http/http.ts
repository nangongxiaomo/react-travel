import axios from 'axios'

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 10000,
  headers: {
    'x-icode': '5537A1A8813FEF52'
  }
})

//封装get方法
export function get(url: string, params?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    customAxios
      .get(url, {
        params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

//封装post方法
export function post(url: string, params?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    customAxios
      .post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
