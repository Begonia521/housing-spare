import axios from 'axios'
//创建一个axios示例
const service = axios.create({
    baseURL:'http://127.0.0.1:7001/',
    timeout:'5000'
})

//请求拦截器
service.interceptors.request.use(
    config=>{
        return config
    },
    error=>{
        console.log(error),
        Promise.reject(error)
    }
)

//响应拦截器
service.interceptors.request.use(
    response=>{
        //响应成功
        return response
    },
    error=>{
        //响应失败
        return Promise.reject(error)
    }
)

export default service;