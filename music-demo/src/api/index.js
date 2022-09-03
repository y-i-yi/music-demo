//统一出口
import { recommendMusic, hotMusic } from '@/api/Home'
import { hotSearch, searchResult } from '@/api/Search'
import { getSongById, getLyricById } from '@/api/Play'
import { commentsMusic } from '@/api/comments'


export const recommendMusicAPI = recommendMusic //获取c方法导出
export const hotMusicAPI = hotMusic    ////获取最新音乐方法导出

export const hotSearchAPI = hotSearch //获取热门搜索列表
export const searchResultAPI = searchResult

export const getSongByIdAPI = getSongById //获取歌曲详情
export const getLyricByIdAPI = getLyricById//获取歌词


export const commentsMusicAPI = commentsMusic //获取评论