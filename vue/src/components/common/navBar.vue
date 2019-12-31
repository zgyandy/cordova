<template>
  <div class="navBar">
    <div class="fixedBox">
      <div class="dis-flex-bt">
        <div class="navLeft item">
          <!-- 返回按钮 -->
          <div @click="goBack" class="goBack"  v-if = "pathName === 'find' || pathName === 'videoPlay' ||  pathName === 'video' || pathName === 'myclass' || $store.state.footUser">
            <img src="../../assets/img/back.png" alt="">
          </div>
          <!-- logo -->
          <div class="logo" v-show="pathName === 'home'">
            <a href="javascript:;">
              <img src="../../assets/img/minilogo.png" alt="">
            </a>
          </div>
          <!-- 面包屑 -->
          <dl v-if="pathName === 'videoList'" class="dis-flex crumbsList">
            <dd> 
              <router-link :to="{name: 'home'}">首页</router-link>
            </dd>
            <dd>
              <router-link :to="{name: 'video'}">讲堂</router-link>
            </dd>
            <dd>视频</dd>
          </dl>
        </div>
        <div class="navMiddle item threePoint" v-show="$store.state.navTitle">
          <em>{{$store.state.navTitle}}</em>
        </div>
        <div class="navRight item">
          <span v-show="pathName == 'video' || pathName == 'videoList'">
            <span class="menuImg iconfont icon-caidan" :class="{redColor: menuBl}"  @click.stop="menuBl = !menuBl"></span>
          </span>
          <!--头像-->
          <router-link :to="{name: 'my'}" v-if="pathName == 'find'">
            <img v-if="isLogin" class="myicon"  src="../../assets/img/my1.jpg" alt="">
            <img v-else class="myicon" src="../../assets/img/my.png" alt="">
          </router-link>
          <router-link  v-show="pathName === 'home'" :to="{name: 'find'}">
            <img class="searchIcon" src="../../assets/img/search.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <!-- 导航 -->
    <div class="menuBox" v-show="menuBl" @click.stop="menuBl = !menuBl">
      <div class="menupops">
          <span>点击进入频道</span>
          <span class="meImgs">
            <img src="../../assets/img/arrowu.png" alt="">
          </span>
      </div>
      <ul class="menuList dis-flex-wrap" @click.stop="">
         <li @click="select('职坐标讲堂')" :class="pathName == 'video' ? 'active' : 'list' " class="list">
           <router-link :to="{name: 'video'}">职坐标讲堂</router-link>
         </li>
         <li @click="select('视频讲堂')" :class="pathName == 'videoList'?'active':'list'" class="list">
           <router-link :to="{name: 'videoList', params: {sort: 0, difficulty: 0, subject: 0}}">视频讲堂</router-link>
         </li>
          <!-- <li @click="select('精品课程')" :class="cards=='精品课程'?'active':'list'" class="list">
           <a href="/mall/course/">精品课程</a>
         </li> -->
          <li @click="select('IT知识库')" :class="pathName=='knowledge'?'active':'list'" class="list">
            <router-link :to="{name: 'knowledge'}">IT知识库</router-link>
         </li>
          <li @click="select('名师指导')" :class="pathName=='knowledgeBlog'?'active':'list'" class="list">
            <router-link :to="{name: 'knowledgeBlog'}">名师指导</router-link>
         </li>
          <!-- <li @click="select('人气拼团')" :class="cards=='人气拼团'?'active':'list'" class="list">
              <a href="/group/">人气拼团</a>
          </li>
          <li @click="select('钜惠抢购')" :class="cards=='钜惠抢购'?'active':'list'" class="list">
              <a href="/huodong/">限时抢购</a>
          </li>
          <li @click="select('超值砍价')" :class="cards=='超值砍价'?'active':'list'" class="list">
              <a href="/bargain/">超值砍价</a>
          </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '职坐标'
    },
    pathName: {
      default: ''
    },
  },
  data () {
    return {
      menuBl: false,
      downIcons:true,
      cards:"职坐标讲堂",
      isLogin: false
    }
  },
  methods: {
    goBack () {
      history.go(-1)
    },
    select(cartype){
        this.cards = cartype;
    },
  },
  watch: {
    pathName: function (newData) {
      this.menuBl = false
      // 判断是否是搜索页面
      if (newData == 'search') {
        this.$get('/api/queryLoginUser').then(res => {
          if (res.data.code === 911) {
            this.isLogin = false
            sessionStorage.setItem('userLogin', 0)
          }else if (res.data.code == 200) {
            this.isLogin = true
            sessionStorage.setItem('userId', res.data.data.id)
            sessionStorage.setItem('userLogin', 0)
          }
        }).catch(err => {
          throw err
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .navBar {
    width: 7.5rem;
    font-size: .36rem;
    overflow: hidden;
    .item {
      min-width: .45rem;
      min-height: .45rem;
    }
    .fixedBox {
      height: .99rem;
      width: 7.5rem;
      position: fixed;
      background: #fff;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      -o-transform: translate(-50%, 0);
      -ms-transform: translate(-50%, 0);
      -moz-transform: translate(-50%, 0);
      -webkit-transform: translate(-50%, 0);
      overflow: hidden;
      z-index: 104;
      .dis-flex-bt {
        height: .9rem;
        width: 7.1rem;
        padding: 0 0.2rem;
        margin: 0 auto;
        padding-top: .09rem;
        -moz-box-shadow:0px 0.09rem 0px #e10030 inset;
        -webkit-box-shadow:0px 0.09rem 0px #e10030 inset;
        box-shadow:0px 0.09rem 0px #e10030 inset;
      }
      .navLeft {
        .goBack {
          height: .45rem;
          width: .45rem;
          img {
            width: .45rem;
          }
        }
        .logo {
          height: .45rem;
          width: .68rem;
          img {
            width: .68rem;
          }
        }
        .crumbsList {
          font-size: .26rem;
          line-height: .9rem;
          dd {
            background:  url('../../assets/img/menuarrow.png') no-repeat right;
            padding-right: .3rem;
            padding-left: .1rem;
          }
          dd:first-child {
            padding-left: 0;
          }
        }
      }
      .navMiddle {
        flex: 1;
        padding: 0 .1rem;
        text-align: center;
      }
      .navRight {
        .searchIcon {
          width: 0.45rem;
          height: 0.45rem;
        }
        .myicon {
          width: 0.42rem;
          height: 0.46rem;
        }
        .menuImg {
          font-size: 0.5rem;
          display: inline-block;
        }
        .menuicon {
          width: 0.58rem;
          height: 0.5rem;
        }
      }
    }
    .line {
      height: .99rem;
    }
    .menuBox {
      position: fixed;
      height: 100%;
      width: 7.5rem;
      top: .99rem;
      left: 50%;
      transform: translate(-50%, 0);
      -o-transform: translate(-50%, 0);
      -ms-transform: translate(-50%, 0);
      -moz-transform: translate(-50%, 0);
      -webkit-transform: translate(-50%, 0);
      z-index: 92;
      background: rgba(0,0,0,.6);
      .menupops{
          background: #ffffff;
          left: 0;
          border-top: 1px solid #000;
          padding-left: 0.25rem;
          font-size: 0.28rem;
          line-height: 0.6rem;
          .meImgs{
              width: 0.23rem;
              height: 0.12rem;
              display: inline-block;
              margin-top: 0.1rem;
              margin-left: 5rem;
              img{
                width: 100%;
              }
          }
      }
      .menuList {
        padding: 0 .2rem;
        background: #fff;
        // height: 1.6rem;
        padding-bottom: .25rem;
        li.list {
          height: .6rem;
          min-width: 1.5rem;
          width: 1.64rem;
          font-size: .26rem;
          line-height: .6rem;
          background: #eee;
          border-radius: .1rem;
          text-align: center;
          margin-top: .1rem;
          border: solid 0.02rem #eeeeee;
          box-sizing: border-box;
          a{
            color: #333333;
          }  
        }
        li.active{
          border: solid 0.02rem #ea0036;
          background-color: #ffffff;
          a{
            color: #ea0036;
          }
        }
      }
    }
  }
</style>
