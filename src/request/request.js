import axios from 'axios';

export function request(config){
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/x6",
    // baseURL: "http://106.54.54.237:8000/api/wh",
    timeout: 8000
  });

  // 2.拦截器
    // 2.1 请求拦截
    instance.interceptors.request.use(config => {
      return config
    },err =>{
      console.log(err)
    });
    // 2.2 响应拦截
    instance.interceptors.response.use(res =>{
      return res.data
    },err => {
      console.log(err)
    })

    // 3.发送真正的网络请求
    return instance(config);

}