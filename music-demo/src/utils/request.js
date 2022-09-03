//封装网络请求方法
import axios from 'axios'

const ajax = axios.create({
  baseURL: "http://localhost:3000"//服务器基地址
})

export default ajax;//相当于导出了axios函数