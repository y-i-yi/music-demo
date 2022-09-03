<template>
  <div>
    <van-nav-bar :title="activeTitle" :fixed="true" />
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>


    <van-tabbar v-model="active" route @change="changeFn">
      <van-tabbar-item icon="home-o" name="首页" replace to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" name="搜索" replace to="/layout/search">搜索</van-tabbar-item>

    </van-tabbar>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        active: 0,
        activeTitle: this.$route.meta.title   //拿出当前路由所在信息对象里meta里的title使用
      }
    },
    methods: {
      changeFn(str) {

        this.activeTitle = str
      }
    }
  }
</script>

<style scoped>
  .main {
    padding-top: 46px;
    padding-bottom: 50px;
  }
</style>