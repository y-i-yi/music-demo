//封装Home发起的请求
import request from '@/utils/request.js'//网络请求工具

// 封装一个网络请求方法
//推荐歌单
export const recommendMusic = params => request({
  url: "/personalized",
  params
})

//最新音乐
export const hotMusic = params => request({
  url: "/personalized/newsong",
  params
})
