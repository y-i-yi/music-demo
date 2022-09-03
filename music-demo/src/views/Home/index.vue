<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="5">
      <van-col span="8" v-for="obj in recommendMusicList" :key="obj.id">
        <van-image width="90%" height="100%" fit="cover" :src="obj.picUrl" />
        <p class="song_name">{{ obj.name }}</p>
      </van-col>
    </van-row>
    <p class="title">最新音乐</p>

    <Songitem v-for="obj in hotMusicList" :key="obj.id" :name="obj.name" :author="obj.song.artists[0].name"
      :id="obj.id"></Songitem>

  </div>
</template>


<script>
  import { recommendMusicAPI, hotMusicAPI } from '@/api/index.js'  //导入网络请求方法
  import Songitem from '@/components/Songitem.vue'  //导入歌曲组件
  export default {
    data() {
      return {
        recommendMusicList: [],  //推荐歌单
        hotMusicList: []    //最新音乐
      }
    },
    async created() {
      const res = await recommendMusicAPI({ limit: 6 })
      this.recommendMusicList = res.data.result
      const songres = await hotMusicAPI({ limit: 12 })
      this.hotMusicList = songres.data.result

    },
    components: {
      Songitem
    }

  }
</script>


<style scoped>
  .title {
    padding: 0.266667rem 0.24rem;
    margin: 0 0 0.24rem 0;
    background-color: #eee;
    color: #333;
    font-size: 15px;
  }

  .song_name {
    font-size: 0.2rem;
    padding: 0 0.08rem;
    margin-bottom: 0.266667rem;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical;
    /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2;
    /** 显示的行数 **/
    overflow: hidden;
    /** 隐藏超出的内容 **/
  }

  .search-icon {
    font-size: 19px;
    line-height: inherit;
  }
</style>