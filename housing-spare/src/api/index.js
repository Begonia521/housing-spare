import request from '../plugin/axios/index'
//post 发送请求
export function getFlyHead(data){
    return request({
        //api地址
        url:'/',
        methods:'get',
        data:data
    })
}
//get发送请求
export function getFly(data){
    return request({
        //api地址
        url:'/pt',
        methods:'get',
        params:data
    })
}