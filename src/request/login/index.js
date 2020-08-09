import {request} from '../request.js';

export function login(params){
  return request({
    url:'/home/multidata',
    method:'get',
    params
  })
}