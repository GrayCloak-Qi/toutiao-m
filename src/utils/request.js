
// 封装请求模块

import axios from 'axios'
import store from '@/store/index.js'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/' // 基础路径
})

// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log(config)
  config.headers.Authorization = `Bearer ${store.state.user.token}`
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 相应拦截器

export default request
