<template>
  <div class="home">
    <div class="banner">
      <Banner :banner="banner"></Banner>
    </div>
    <linkList></linkList>
    <Gray></Gray>
    <Bulletin :bulletin="bulletin"></Bulletin>
    <Gray></Gray>
    <!-- 加油站 -->
    <CheerStation :cheer="cheer"></CheerStation>
    <Gray></Gray>
    <Company :company="company" v-if="company.length > 0"></Company>
    <JobList :jobArr="jobArr"></JobList>
    <Gray></Gray>
    <!-- 文章列表 -->
    <mt-loadmore :bottomMethod="loadBottom" :bottomAllLoaded="allLoaded" ref="loadmore" bottomPullText="上拉加载" :maxDistance="maxDistance">
    <listTitle :listTitle="listTitle" ></listTitle>
    <Article ref="Article" :adPass="adPass" :articles="articles"></Article>
    <loadMore :title="loadTitle"></loadMore>
    </mt-loadmore>
  </div>
</template>

<script>
  import Banner  from '../../components/banner/banner';
  import linkList from '../../components/common/linkList'
  import Bulletin from '../../components/common/bulletin'
  import CheerStation from '../../components/cheerstation/cheer'
  import Company from '../../components/job/company'
  import JobList from '../../components/job/jobList'
  import Article from '../../components/article/article'
  import LoadMore from '../../components/common/loadMore'
  import listTitle from '../../components/common/listTitle'

  export default {
    data() {
      return {
        banner: [],
        cheer: [],
        adPass: [],
        bulletin: [],
        company: [],
        jobArr: [],
        lectureArr: [],
        swBl: true,
        allLoaded: true,
        newsPage: 1,
        swBl: true,
        loadTitle: '上拉加载更多',
        maxDistance: 100,
        pages: 0,
        windowHeight: 0,
        articles: [],
        listTitle: {
          title: 'IT知识',
          arr: [
            {
              msg: '名师',
              url: this.$store.state.domain + '/blog/'
            },
            {
              msg: '热点',
              url: this.$store.state.domain + '/news/'
            }
          ]
        }
      }
    },
    created () {
      this.getData();
    },
    mounted () {
      // 咨询列表
      this.getNews ()
      this.windowScroll ();
    },
    methods: {
      getData() {
        this.$post('/api/video/indexAdvertiement').then((res) => {
          if (res.code == 200) {
              this.banner = res.data.carousel
              this.cheer = res.data.focus ? res.data.focus : []
              this.adPass = res.data.pass
          }
        }).catch((err) => {
          throw err
        })
        this.$get(this.$store.state.domain + "/api/video/indexExpress").then(res => {
          this.bulletin = res.data
        }).catch(err => {
          throw err
        })
        this.$get("/api/video/ztcJob").then((res) => {
          if (res.code == 200) {
            this.company = res.data.company
            this.jobArr = res.data.job
          }
        }).catch(err => {
          throw err;
        })
        this.$post('/api/video/indexVideo').then((res) => {
          if (res.code == 200) {
            this.lectureArr = res.data
          }
        }).catch((err) => {
          throw err
        })
      },
      loadBottom () {
        if (this.swBl) {
          this.newsPage += 1
          this.getNews(this.newsPage)
          this.swBl = false
        }
      },
      getNews (page) {
        this.$forceUpdate()
        this.$get(this.$store.state.domain + '/api/video/news/', {page: page ?  page : this.newsPage} ).then((res) => {
          this.allLoaded = true
          if (res.data.code == 200) {
            this.swBl = true
            this.pages = res.data.data.pages
            if (page) {
              this.articles = this.articles.concat(res.data.data.dataList)
              this.windowScroll ()
              if(page === res.data.data.pages) {
                this.allLoaded = true
                this.loadTitle = '加载完成'
              }
              this.$refs.loadmore.onBottomLoaded()
            }else {
              this.articles = res.data.data.dataList
            }
          }
        }).catch((err) => {
          this.allLoaded = true
          throw err
        })
      },
      windowScroll () {
        var _this = this
        window.onscroll = function () {
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
        }
      }
    },
    components: {
      Banner, linkList, Bulletin, CheerStation, Company, JobList, Article, LoadMore, listTitle
    }
  }
</script>

<style lang="less">
  .home {
    overflow-y: scroll;
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
  }
</style>