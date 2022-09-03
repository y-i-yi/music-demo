import request from '@/utils/request.js'//网络请求工具

export const commentsMusic = (params) => request({  //获取评论
  url: "/comment/music",
  params
})