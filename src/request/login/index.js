import {request} from '../request.js';

export function login(params){
  return request({
    url:'/home/multidata',
    method:'get',
    params
  })
}

export function test(params){
  return request({
    url:'/test',
    method:'get',
    params
  })
}