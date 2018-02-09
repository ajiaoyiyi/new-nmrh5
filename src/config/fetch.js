import axios from 'axios'
import { baseUrl } from './host'

// 创建axios实例
const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 10 * 1000, // 请求超时时间
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'} //即将被发送的自定义请求头
})

//request请求拦截器
service.interceptors.request.use(config => {
	// 在发送请求之前做些什么
  // if (store.getters.token) {
  //   config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  if (config.method === 'get') {
    if (!config.params) {
      config.params = {}
    }
    config.params.t = new Date().getTime()
  } 
  if (config.method === 'post') {
    // config.data = JSON.stringify(config.data);
  }
  return config
	}, error => {
    // 对请求错误做些什么
    console.log(error) // for debug
    Promise.reject(error)  //error将会被传递给实例的回调函数
  })

//response响应拦截器
service.interceptors.response.use(function (result) {
  // 对响应数据做点什么
  // 假设当flag为true时代表响应成功  type=9001代表要重新登录
  if (!result.data.flag) {
      return Promise.reject(result)
  }
  return result.data.data
	}, function (error) {
  // 对响应错误做点什么
  console.log(error) // for debug
  return Promise.reject(error); //error将会被传递给实例的回调函数
});

export default service