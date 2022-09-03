<template>
  <!-- 歌曲组件 -->
  <van-cell :title="name" :label="author" size="large" @click="$router.push({path:'/comment',query:{id:id}})">
    <template #right-icon>
      <van-icon name="play-circle-o" class="search-icon" @touchstart="playfn" />
    </template>
  </van-cell>
</template>

<script>
  export default {
    props: {
      name: String, //歌名
      author: String,//作者
      id: Number//歌曲id
    },
    methods: {
      playfn() {
        this.$router.push({
          path: "/play",
          query: {
            id: this.id
          }
        })
      }
    }
  }
</script>


<style scoped>
  .search-icon {
    font-size: 19px;
    line-height: inherit;
  }
</style>