import axios, { AxiosInstance, AxiosError } from 'axios'
// import { ElMessage } from 'element-plus'

const service: AxiosInstance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/b3ef5b9f6fbb0ba5de2519927021cdcc/demo',
    timeout: 5000,
    headers: {
        "Content-Type": 'applocation/json;charset=utf-8'
    }
})

service.interceptors.request.use((config) => {
    config.headers = config.headers || {}
    if (localStorage.getItem('token')) {
        config.headers['Authorization'] = localStorage.getItem('token') || ''
    }
    return config
}, (err: AxiosError) => {
    console.log(`request error ${err}`);
})

service.interceptors.response.use(res => {
    const code: number = res.data.code
    if (code != 200) {
        // ElMessage.error(`error ${res.data}`)
        return Promise.reject(res.data)
    }
    console.log(res.data);
    return res
}, (err: AxiosError) => {
    console.log(`response error ${err}`);
})

export default service




