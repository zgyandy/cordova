<template>
  <div class="listPage">
    <!-- 类型 -->
    <div class="drop-nav-box layout">
      <dl class="drop-nav dropNav dis-flex-around layout">
        <dd class="dis-flex-center" @click.stop="num == 1 ? num = 0 : num = 1" :class="{'redColor': num == 1}">
          <p>全部分类</p>
          <div class="iconfont" :class="num == 1 ? 'icon-icon-test' : 'icon-icon-test2'" ></div>
        </dd>
        <dd class="dis-flex-center"  @click.stop="num == 2 ? num = 0 : num = 2" :class="{'redColor': num == 2}">
          <p>全部类别</p>
          <div class="iconfont" :class="num == 2 ? 'icon-icon-test' : 'icon-icon-test2'"></div>
        </dd>
        <dd class="dis-flex-center" @click.stop="num == 3 ? num = 0 : num = 3" :class="{'redColor': num == 3}">
          <p>综合排序</p>
          <div class="iconfont" :class="num == 3 ? 'icon-icon-test' : 'icon-icon-test2'"></div>
        </dd>
      </dl>
    </div>
    <!-- 蒙层 -->
    <div class="grayCover drop-gray-cover videoStateBox layout" v-show="num != 0" @click.stop=" num = 0">
      <ul class="drop-nav-list dropNavOne" v-show="num == 1">
        <li data="a" :class="{'active': $route.params.subject == 0}" value="0" @click.stop="toList('subject', 0)"><a class="dis-flex-center" href="javascript:;">全部</a></li>
        <li data="a" :class="{'active': $route.params.subject == item.dataCode}" @click.stop="toList('subject', item.dataCode)" v-for="(item, key) in subject" :key="key" :value="item.id"><a class="dis-flex-center" href="javascript:;">{{item.name}}</a></li>
      </ul>
      <ul class="drop-nav-list dropNavTwo" v-show="num == 2">
        <li data="b" value="0" :class="{'active': $route.params.difficulty == 0}"  @click.stop="toList('difficulty', 0)"><a class="dis-flex-center" href="javascript:;">全部</a></li>
        <li data="a" :class="{'active': $route.params.difficulty == item.dataCode}"  @click.stop="toList('difficulty', item.dataCode)" v-for="(item, key) in difficulty" :key="key" :value="item.id"><a class="dis-flex-center" href="javascript:;">{{item.name}}</a></li>
      </ul>
      <ul class="drop-nav-list dropNavThree" v-show="num == 3">
        <li  data="c" value="0" :class="{'active': $route.params.sort == 0}" @click.stop="toList('sort', 0)">
          <a class="dis-flex-center" href="javascript:;">综合</a>
        </li>
        <li data="c" value="1" :class="{'active': $route.params.sort == 1}" @click.stop="toList('sort', 1)">
          <a class="dis-flex-center" href="javascript:;">人气</a>
        </li>
        <li data="c" value="2" :class="{'active': $route.params.sort == 2}" @click.stop="toList('sort', 2)">
          <a class="dis-flex-center" href="javascript:;">最新</a>
        </li>
      </ul>
    </div>
      <!-- 文章列表 -->
    <mt-loadmore :bottomMethod="loadBottom" :bottomAllLoaded="allLoaded" ref="loadmore" bottomPullText="上拉加载" :maxDistance="maxDistance">
      <Bulletin :bulletin="advert"></Bulletin>
      <VideoList :videoArr="videoArr" />
      <LoadMore :title="loadTitle"></LoadMore>
    </mt-loadmore>
  </div>
</template>

<script>
  // 视频列表
  import VideoList from '../../components/videoList/videoList'
  // 快报
  import Bulletin from '../../components/common/bulletin'
  import LoadMore from '../../components/common/loadMore'

  export default {
    data() {
      return {
        att: [],
        num: 0,
        videoArr: [],
        difficulty: [],
        subject: [],
        advert: [],
        bulletin: [],
        loadTitle: '上拉加载更多',
        swBl: true,
        allLoaded: false, // 是否加载完成
        maxDistance: 100,
        nowPage: 1, // 当前页
        pages: 0, // 总共页 
      }
    },
    created () {
      this.getData(this.nowPage)
    },
    // beforeRouteEnter (to, from, next) {
    //   next()
    // },
    beforeRouteUpdate (to, from, next) {
      this.getData(1)
      next()
    },
    methods: {
      getData(page) {
        this.$get('/api/video/total/?' + 'limit=10&start='+ page +'&subject='+ this.$route.params.subject + '&difficulty='+this.$route.params.difficulty + '&sort=' + this.$route.params.sort).then((res) => {
          this.allLoaded = true;
          if (res.code == 200) {
            this.swBl = true
            this.pages = res.data.queryVideoList.pages
            if (page == 1) {
              this.difficulty = res.data.difficulty
              this.subject = res.data.subject
              this.advert = res.data.advert
              this.videoArr = res.data.queryVideoList.dataList
            } else {
              this.videoArr = this.videoArr.concat(res.data.queryVideoList.dataList)
            }
            if (this.pages) {
              if(page === res.data.queryVideoList.pages) {
                this.allLoaded = true
                this.loadTitle = '加载完成'
              } else {
                this.windowScroll ()
              }
              this.$refs.loadmore.onBottomLoaded()
            }
          }
        }).catch((err) => {
          this.allLoaded = true
          throw err
        })
      },
      loadBottom () {
        if (this.swBl) {
          this.nowPage += 1;
          this.getData(this.nowPage)
          this.swBl = false
        }
      },
      windowScroll () {
        var _this = this
        window.addEventListener('scroll', function () {
          //变量scrollTop是滚动条滚动时，距离顶部的距离
          var scrollTop = document.documentElement.scrollTop||document.body.scrollTop
          //变量windowHeight是可视区的高度
          var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
          //变量scrollHeight是滚动条的总高度
          var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight
          //滚动条到底部的条件
          if(scrollTop + windowHeight >= (scrollHeight - 10) && _this.pages !== _this.newsPage){
            _this.allLoaded = false
          }else {
            _this.allLoaded = true
          }
        })
      },
      toList (type, n) {
        this.num = 0;
        switch (type) {
          case 'subject' :
            this.$router.push({name: 'videoList', params: {subject: n, difficulty: this.$route.params.difficulty, sort: this.$route.params.sort}});
            break;
          case 'difficulty' : 
            this.$router.push({name: 'videoList', params: {difficulty: n, subject: this.$route.params.subject, sort: this.$route.params.sort}});
            break;
          default: 
            this.$router.push({name: 'videoList', params: {sort: n, subject: this.$route.params.subject, difficulty: this.$route.params.difficulty}});
        }
      }
    },
    components: {
      VideoList, Bulletin, LoadMore
    },
  }
</script>

<style lang="less" scoped>
.listPage {
  overflow-y: scroll;
  padding-top: 0.96rem;
}
.mint-loadmore {
    width: 7.5rem;
    background: #fff;
  }
.dis-flex-center {
  .flex(@justify: center);
}
.dis-flex-around {
  .flex(@justify: space-between);
}
.drop-nav-box {
  height: .96rem;
  position: fixed;
  top: 0.99rem;
  left: 50%;
  margin-left: -3.75rem;
  z-index: 99;
}
.drop-nav-box .drop-nav {
  height: .96rem;
  box-shadow: 0 -1px 0 0  #dadada inset, 0 1px 0 0  #dadada inset,  0 0 0 0  #dadada inset,  0 0 0 0  #dadada inset;
  -moz-box-shadow: 0 -1px 0 0  #dadada inset, 0 1px 0 0  #dadada inset,  0 0 0 0  #dadada inset,  0 0 0 0  #dadada inset;
  -webkit-box-shadow: 0 -1px 0 0  #dadada inset, 0 1px 0 0  #dadada inset,  0 0 0 0  #dadada inset,  0 0 0 0  #dadada inset;
  line-height: .96rem;
  background: #fff;
  font-size: .3rem;
}
.drop-gray-cover  {
  width: 7.5rem;
  min-height: calc(~"100% - 0.99rem - 0.96rem");
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 999;
  left: 50%;
  margin-left: -3.75rem;
  top: 0.99 + 0.96rem;
}
.drop-gray-cover .drop-nav-list {
  padding: .3rem .2rem;
  overflow: hidden;
  background: #fff;
}
.drop-gray-cover .drop-nav-list li {
  width: 1.44rem;
	height: 0.75rem;
	background-color: #eeeeee;
  border-radius: 0.1rem;
  padding: 0 .1rem;
  color: #333;
  float: left;
  margin-right: .18rem;
  overflow: hidden;
  line-height: 0.75rem;
  text-align: center;
  a {
    display: inline-block;
    height: 100%;
    width: 100%;
    color: inherit;
  }
}
.drop-gray-cover .drop-nav-list li:nth-child(n + 5) {
  margin-top: .2rem;
}
.drop-gray-cover .drop-nav-list li:nth-child(4n + 4) {
  margin-right: 0;
}
.drop-gray-cover .drop-nav-list li.active {
  background: none;
  color: #ff0000;
  -moz-box-shadow: 0 .02rem 0 0 #ff0000 inset,  0 -.02rem 0 0 #ff0000 inset, .02rem 0 0 0 #ff0000 inset, -.02rem 0 0 0 #e10030 inset;
	-webkit-box-shadow:0 .02rem 0 0 #ff0000 inset,  0 -.02rem 0 0 #ff0000 inset, .02rem 0 0 0 #ff0000 inset, -.02rem 0 0 0 #e10030 inset;
  box-shadow:0 .02rem 0 0 #ff0000 inset,  0 -.02rem 0 0 #ff0000 inset, .02rem 0 0 0 #ff0000 inset, -.02rem 0 0 0 #e10030 inset;
}
</style>