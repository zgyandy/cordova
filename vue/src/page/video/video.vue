<template>
  <div class="videoPage">
    <div class="banner">
      <Banner :banner="banner"></Banner>
    </div>
    <!-- 报名 -->
    <!-- <ul class="forumUl clearfix">
      <li class="forumList" v-for="(item,index) in dataList" :key="index" @click="showDialog(index,item.pop1,item.pop2)" @touchmove.prevent>
        <div class="forumImg"><img v-lazy="item.listImg" alt=""></div>
        <p class="forum">{{ item.text }}</p>
      </li>
    </ul> -->
    <Bulletin :bulletin="bulletin" v-if="bulletin.length > 0"></Bulletin>
  </div>
</template>

<script>
  import Banner from '../../components/banner/banner'
  import Bulletin from '../../components/common/bulletin'
  export default {
    data() {
      return {
        banner: [],
        bulletin: [],
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData() {
        this.$post('/api/video/lectureHallByAdvertising').then(res =>{
          if (res.code == 200) {
            this.bulletin = res.data.notice;
            this.banner = res.data.focus;
          }
        }).catch((err)=>{
            throw err;
        });
      }
    },
    components: {
      Banner, Bulletin
    }
  }
</script>

<style lang="less">
  .videoPage {
    .banner {
      height: 3.46rem;
      width: 7.5rem;
      overflow: hidden;
      .mint-swipe-item {
        height: 3.46rem;
      }
      img {
        height: 3.46rem;
        width: 7.5rem;
        display: block;
      }
    }
    .forumUl{
      width: 6.72rem;
      margin: 0 auto;
      height: 2rem;
      margin-top: 0.35rem;
      li:not(:first-child){
        margin-left: 0.7rem;
      }
      .forumList{
        width: 1.13rem;
        height: 1.58rem;
        float: left;
        div{
          display: block;
          width: 1.13rem;
          height: 1.13rem;
        }
        p{
          color: #000000;
          font-size: .26rem;
          height: 0;
          text-align: center;
          padding-top: 0.12rem;
        }
      }
    }
  }
</style>