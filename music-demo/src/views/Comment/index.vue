<template>
  <div>
    <div>
      <van-nav-bar title="评论" :fixed="true" left-arrow @click-left="$router.back()" />
      <div class="main">
        <div>
          <div class="wrap">
            <div class="img_wrap">
              <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="">
            </div>
            <div class="content_wrap">
              <div class="header_wrap">
                <div class="info_wrap">
                  <p>昵称</p>
                  <p>2022</p>
                </div>
                <div>12点赞</div>
              </div>
              <div class="footer_wrap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { commentsMusicAPI } from '@/api/index.js'

  export default {
    async created() {
      const res = await commentsMusicAPI({
        id: this.$route.query.id,
        limit: 20
      })
      console.log(res)
    }
  }
</script>

<style>
  .main {
    padding-top: 46px;
  }

  /* 容器样式 */
  .wrap {
    display: flex;
  }

  .img_wrap {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.266667rem;
  }

  .img_wrap img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .content_wrap {
    flex: 1;
  }

  /* 右侧头部 */
  .header_wrap {
    display: flex;
  }

  .info_wrap {
    flex: 1;
  }

  .info_wrap p:first-child {
    font-size: 0.373333rem;
  }

  .info_wrap p:last-of-type {
    font-size: 0.24rem;
    color: #999
  }

  .header_wrap div:last-of-type {
    color: #999;
    font-size: 0.293333rem;
  }

  /* 评论内容 */
  .fonter_wrap {
    font-size: 0.4rem;
    color: #333;
  }
</style>