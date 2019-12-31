<template>

  <div class="search">
    <div class="searchInp">
      <div class="inpBox dis-flex-bt">
        <input type="text" maxlength="20" v-model="key" placeholder="输入您想查找的内容">
        <div class="btn" @click="search">查找</div>
      </div>
    </div>
    <p v-if="videoPage > 0 || articlePage > 0 || goodsPage > 0 || activityPage > 0" class="resultNum">您查找的<span class="redColor">{{searchMsg}}</span>，共找到了<span class="redColor">{{ videoPage + articlePage + goodsPage + activityPage }}</span>个结果</p>
    <div v-if="videoPage == 0 && articlePage == 0 && goodsPage == 0 && searchBl && activityPage == 0" class="noResult layout">
      <dl class="tip">
        <dt><img src="../../assets/img/sorry.jpg" class="sorry" alt=""></dt>
        <dd>没有找到您想要的内容，<a href="/">去首页看看吧！</a></dd>
      </dl>
      <Gray></Gray>
    </div>
    <!-- 有结果 -->
    <div v-if="hasResult">
      <!-- 有活动 -->
      <!-- <Activity :activityArr="activityArr" v-if="activityPage > 0"></Activity> -->
      <!-- 点击查看更多活动 -->
      <!-- <p class="loadBtn" v-if="activityPage > 1"><a href="/#/huodong/">查看更多活动</a></p> -->
      <!-- 有商品 -->
      <!-- <goods :goodsArr="goodsArr" v-if="goodsPage > 0"></goods> -->
      <!-- 点击查看跟多商品 -->
      <!-- <p class="loadBtn" v-if="goodsPage > 3"><a href="/#/mall/course/">查看更多商品</a></p> -->
      <!-- 搜索视频 -->
      <ListVideo :videoArr="videoArr" v-if="videoPage > 0" ></ListVideo>
      <!-- 点击加载 -->
      <p class="loadBtn" v-if="videoPage > 3"><a href="/#/video/total/">查看更多视频</a></p>
      <!-- 有文章 -->
      <Article :articles='articleArr' v-if="articlePage > 0"></Article>
      <!-- 点击加载 -->
      <p v-if="articlePage > 3" class="loadBtn"><router-link :to="{name: 'knowledge'}">查看更多资讯</router-link></p>
      <!-- 没有活动 -->
      <!-- <Activity :activityArr="activityArr" v-if="activityPage == 0 && activityArr.length > 0" :activityBl="activityBl" :hasResult="hasResult"></Activity> -->
      <!-- 畅销商品 -->
      <!-- <goods :goodsArr="goodsArr" v-if="goodsPage == 0" :goodsBl ="goodsBl"></goods> -->
      <!-- 热门视频 -->
      <videoList v-if="videoPage == 0" :videoArr="videoArr" :videoBl = "videoBl"></videoList>
      <!-- 精品文章 -->
      <Article :articles='articleArr' v-if="articlePage == 0" :articleBl="articleBl"></Article>
    </div>
    <!-- 无结果 -->
    <div v-else>
      <!-- 你可能喜欢 -->
      <listTitle :listTitle="listTitle"></listTitle>
      <!-- <Activity :activityArr="activityArr" :activityBl="activityBl" :hasResult="hasResult"></Activity> -->
      <!-- <goods :goodsArr="goodsArr"></goods> -->
      <ListVideo :videoArr="videoArr"></ListVideo>
      <Article :articles='articleArr'></Article>
    </div>
    <!-- 热门频道 -->
    <hotChannel v-show="!searchBl"></hotChannel>
    <Gray v-show="!searchBl"></Gray>
    <!-- 热门资讯 -->
    <hotInfo v-show="!searchBl" :hotInfo="hotInfo"></hotInfo>
  </div>

</template>

<script>
import hotChannel from '../../components/hotChannel/hotChannel'
import hotInfo from '../../components/hotInfo/hotInfo'
import Article from '../../components/article/article'
import videoList from '../../components/videoList/videoList'
// import goods from '../../components/goods/goods'
// import Activity from "../../components/activity/activity"
import listTitle from '../../components/common/listTitle'
import ListVideo from '../../components/videoList/list'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      condition: 0,
      key: '',
      articleArr: [],
      videoArr: [],
      goodsArr: [],
      activityArr: [],
      start: 1,
      hotInfo: [],
      articleNum: 0,
      videoNum: 0,
      goodsNum: 0,
      activityNum: 0,
      articlePage: 0,
      activityPage: 0,
      videoPage: 0,
      goodsPage: 0,
      articleBl: true,
      videoBl: true,
      goodsBl: true,
      activityBl: true,
      total: 0,
      listTitle: {
        title: '您可能喜欢'
      },
      searchBl: false, // 是否搜索
      searchMsg: '',
      hasResult: true
    }
  },
  beforeCreate () {
    this.$get('/api/video/newsList').then(res => {
      if (res.code == 200) {
        this.hotInfo = res.data.dataList
      }
    }).catch(err => {
      throw err
    })
    this.$store.commit('footBl', false)
  },
  methods: {
    search () {
      if (!this.key) {
        Toast('请输入您想查找的内容')
        return;
      }
        // this.$store.state.domain
      this.$get( '/api/video/search?',{key: this.key}).then((res) => {
        var item;
        if (res.code == 200) {
          this.searchMsg = this.key
          this.searchBl = true
          for(var i = 0; i < res.data.length; i ++) {
            item = res.data[i]
            if (item.type == 'goods') {
              this.goodsPage = item.total
              this.goodsArr = item.data
              if (item.dataType == 2) {
                this.goodsBl = false
              } else if (item.dataType == 1) {
                this.goodsBl = true
              }
            } else if (item.type == 'video') {
              this.videoPage = item.total
              this.videoArr = item.data
              if (item.dataType == 2) {
                this.videoBl = false
              } else if (item.dataType == 1) {
                this.videoBl = true
              }
            } else if (item.type == 'news') {
              this.articlePage = item.total
              this.articleArr = item.data
              if (item.dataType == 2) {
                this.articleBl = false
              } else if (item.dataType == 1) {
                this.articleBl = true
              }
            }else if (item.type == 'activity') {
                this.activityPage = item.total
                this.activityArr = item.data
                if (item.dataType == 2) {
                    this.activityBl = false
                } else if (item.dataType == 1) {
                    this.activityBl = true
                }
            }
          }
          if (this.goodsPage == 0 && this.videoPage == 0 && this.articlePage == 0 && this.activityPage == 0) {
            this.videoBl = true
            this.goodsBl = true
            this.articleBl = true
            this.hasResult = false
          } else {
            this.videoBl = false
            this.goodsBl = false
            this.articleBl = false
            this.hasResult = true
          }
        }
      }).catch(res => {
        throw res
      })
    },
    loadMore () {
        this.search()
    }
  },
  beforeDestroy () {
    this.$store.commit('footBl', true);
  },
  components: {
    hotChannel, hotInfo, Article, videoList, listTitle, ListVideo
  },
}
</script>

<style lang="less" scoped>
  .search {
    .searchInp {
      padding: .3rem .2rem;
      background: #eee;
      .inpBox {
        line-height: .78rem;
        font-size: .28rem;
        input {
          width: 5.2rem;
          height: 0.78rem;
          text-indent: 1em;
          font-size: .28rem;
        }
        input:-webkit-input-placeholder {
          line-height: .78rem;
        }
        .btn {
          width: 1.7rem;
          height: 0.78rem;
          background-color: #e10030;
          border-radius: 0.1rem;
          color: #fff;
          text-align: center;
        }
      }
    }
    .loadBtn {
      height: .8rem;
      text-align: center;
      line-height: .8rem;
      font-size: .3rem;
      border-bottom: 1px solid #eee;
    }
    .resultNum {
      height: 0.71rem;
      width: 7.1rem;
      margin: 0 auto;
      line-height: 0.71rem;
      border-bottom: 1px solid #dadada;
      font-size: 0.28rem;
      overflow: hidden;
    }
    // 没有结果
    .noResult {
      height: 3.26 + 0.2rem;
      color: #999999;
      text-align: center;
      font-size: 0.28rem;
      a {
        color: #059bfb;
      }
      dt {
        height: 1.52rem;
        padding-top: 0.6rem;
        padding-bottom: 0.3rem;
        img {
          height: 1.52rem;
          width: 1.2rem;
          display: block;
          margin: 0 auto;
        }
      }
      dd {
        height: 3.26 - 1.52 - 0.9rem;
      }
    }
  }
</style>
