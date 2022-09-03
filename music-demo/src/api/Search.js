import request from '@/utils/request.js'//网络请求工具

// 热门词
export const hotSearch = () => request({
  url: "/search/hot",

})

//搜索结果列表
export const searchResult = params => request({
  url: '/cloudsearch',
  params
})
