<template>
  <div>
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />

    <!-- 热门搜索 -->
    <div class="search_warp" v-if="resultList.length === 0">
      <p class="hot_title">热门搜索</p>

      <!-- 关键字 -->
      <ul class="hot_name_wrap">
        <li class="hot_item" v-for="(obj,index) in hotList" :key="index" @click="btn(obj.first)">{{ obj.first}} </li>
      </ul>
    </div>


    <!-- 搜索结果 -->
    <div class="search_warp" v-else>
      <p class="hot_title">最佳匹配</p>
      <!-- 展示搜索结果 -->
      <Songitem v-for="obj in resultList" :key="obj.id" :name="obj.name" :author="obj.ar[0].name" :id="obj.id">
      </Songitem>


      <!-- <van-cell :title="obj.name" :label="obj.ar[0].name" size="large" v-for="obj in resultList" :key="obj.id">
        <template #right-icon>
          <van-icon name="play-circle-o" class="search-icon" />
        </template>
      </van-cell> -->

    </div>


  </div>
</template>

<script>
  import { hotSearchAPI, searchResultAPI } from '@/api/index.js'
  import Songitem from '@/components/Songitem.vue'  //导入歌曲组件
  export default {
    data() {
      return {
        value: '',
        hotList: [],// 热搜关键词
        resultList: [],//搜索结果
        timer: null //保存定时器
      }
    },
    async created() {
      const res = await hotSearchAPI()
      this.hotList = res.data.result.hots   //拿到热门词


    },
    methods: {
      onSearch(val) {
        Toast(val)
      },
      onCancel() {
        Toast('取消')
      },
      async btn(str) {
        this.value = str  //点击热门词就给搜索框
        const res = await searchResultAPI({   //点击热门词立刻触发网络请求
          type: 1,   //1:单曲 
          keywords: this.value
        })
        this.resultList = res.data.result.songs
        setTimeout(() => {
          clearTimeout(this.timer)
        }) //防止下面的请求再次执行
      }
    },
    watch: {
      value(val) {  //搜索值改变时立即执行
        //防抖，输入框改变的最后一次才执行
        clearTimeout(this.timer)   //清空计时器, 防止输入框空值 还显示请求回来的数据
        if (val.length === 0) return (this.resultList = []) //判断搜索框里无值
        this.timer = setTimeout(async () => {
          const res = await searchResultAPI({
            type: 1,   //1:单曲
            keywords: val
          })

          this.resultList = res.data.result.songs
        }, 3000)

      }
    },
    components: {
      Songitem
    }

  }
</script>

<style lang="less" scoped>
  /* 找到类名直接覆盖vant组件样式 */
  /deep/ .van-field_boby {
    font-size: 17px;
  }

  /* 搜索容器的框 */
  .search_warp {
    padding: 0.266667rem;
  }

  /* 热门搜索文字样式 */
  .hot_title {
    font-size: 0.32rem;
    color: #666;
  }

  /* 热词容器 */
  .hot_name_wrap {
    margin: 0.266667rem 0;
  }

  /* 热搜词_样式 */
  .hot_item {
    display: inline-block;
    height: 0.853333rem;
    margin-right: 0.213333rem;
    margin-bottom: 0.213333rem;
    padding: 0 0.373333rem;
    font-size: 0.373333rem;
    line-height: 0.853333rem;
    color: #333;
    border-color: #d3d4da;
    border-radius: 0.853333rem;
    border: 1px solid #d3d4da;
  }
</style>