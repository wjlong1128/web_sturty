import request from '../utils/request';
import LoginUser from '../model/LoginUser';

export function login(data: LoginUser) {
    return request({
        url: '/login',
        method: 'get',
        data
    })
}

export function goodsList(){
    return request({
        url:'/goodsList',
        method:'get'
    })
}

export function getUsers(){
    return request({
        url:'/getUsers',
        method:'get'
    })
}


export function getRoles(){
    return request({
        url:'/getRoles',
        method:'get'
    })
}