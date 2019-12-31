<template>
  <div class="videoPage">
    <div class="banner">
      <Banner :banner="banner"></Banner>
    </div>
    <SignUp :signList="signList"></SignUp>
    <Bulletin :bulletin="bulletin" v-if="bulletin.length > 0"></Bulletin>
    <Lecture :lecture="betterVideo" :listTitle="bTitle"></Lecture>
    <Lecture :lecture="AIVideo" :listTitle="aTitle"></Lecture>
    <Lecture :lecture="bigVideo" :listTitle="gTitle"></Lecture>
    <Lecture :lecture="javaVideo" :listTitle="jTitle"></Lecture>
    <Lecture :lecture="webVideo" :listTitle="wTitle"></Lecture>
  </div>
</template>

<script>
  import Banner from '../../components/banner/banner'
  import Bulletin from '../../components/common/bulletin'
  import SignUp from '../../components/common/signUp.vue';
  import Lecture from '../../components/lecture/lecture'
  import img1 from '../../assets/img/mainer1.png'
  import img2 from '../../assets/img/mainer2.png'
  import img3 from '../../assets/img/mainer3.png'
  import img4 from '../../assets/img/mainer4.png'
  export default {
    data() {
      return {
        banner: [],
        bulletin: [],
        betterVideo: [],
        bTitle: {
          title: '精品视频',
          arr: [
            {
              name: 'videoList',
              params: {
                subject: 0,
                difficulty: 0,
                sort: 0
              },
              msg: '更多'
            }
          ],
          tip: '名师真人授课，实景精彩呈现'
        },
        AIVideo: [],
        aTitle: {
          title: '人工智能',
          arr: [
            {
              name: 'videoList',
              params: {
                subject: 0,
                difficulty: 1,
                sort: 0
              },
              msg: '更多'
            }
          ],
          tip: '登顶技术巅峰，拥抱黄金时代'
        },
        bigVideo: [],
        gTitle: {
          title: '大数据',
          arr: [
            {
              name: 'videoList',
              params: {
                subject: 0,
                difficulty: 3,
                sort: 0
              },
              msg: '更多'
            }
          ],
          tip: '大数据云计算，“钱”景待遇可期'
        },
        javaVideo: [],
        jTitle: {
          title: 'Java全栈',
          arr: [
            {
              name: 'videoList',
              params: {
                subject: 0,
                difficulty: 5,
                sort: 0
              },
              msg: '更多'
            }
          ],
          tip: '主流编程语言，薪资高前景好'
        },
        webVideo: [],
        wTitle: {
          title: 'Web前端',
          arr: [
            {
              name: 'videoList',
              params: {
                subject: 0,
                difficulty: 6,
                sort: 0
              },
              msg: '更多'
            }
          ],
          tip: '入门简单易就业，前景无限高薪资'
        },
        tempItem: {},
        signList:[
          {
            id:1,
            listImg: img1,
            text:'免费试学',
            title:'预约职坐标免费试学课程服务',
            meage:'验证手机，即可预约免费试学职坐标课程',
            boxShow: true,
            pop1:'预约免费试听课！',
            pop2:'参加试听课程！',
          },
          {
            id:2,
            listImg:img2,
            text:'资料索取',
            title:'索取IT前沿技术资料',
            meage:'验证手机，获得IT独家培训资料合集下载地址',
            boxShow: false,
            pop1:'递交资料索取申请！',
            pop2:'提供下载地址！',
          },
          {
            id:3,
            listImg:img3,
            text:'名师答疑',
            title:'预约名师解疑答惑',
            meage:'验证手机，获取资深老师免费答疑解惑',
            boxShow: false,
            pop1:'预约名师答疑解惑！',
            pop2:'安排名师答疑！',
          },
          {
            id:4,
            listImg:img4,
            text:'职业规划',
            title:'职业规划个性化分析',
            meage:'验证手机，获取资深职业规划师指点就业迷津',
            boxShow: false,
            pop1:'递交职业规划分析申请！',
            pop2:'做职业规划分析！',
          },
        ],
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
        this.$post('/api/video/lectureHallVideo').then(res =>{
          switch (res.code) {
            case 200: 
            for (var i = 0; i < res.data.length; i ++) {
              this.tempItem = res.data[i]
              if (this.tempItem.type == 1) {
                this.betterVideo.push (this.tempItem)
              } else if (this.tempItem.type == 2) {
                this.AIVideo.push (this.tempItem)
              }else if (this.tempItem.type == 3) {
                this.bigVideo.push (this.tempItem)
              } else if (this.tempItem.type == 4) {
                this.javaVideo.push (this.tempItem)
              } else if (this.tempItem.type == 5) {
                this.webVideo.push (this.tempItem)
              }
            };
            break;
            default: throw res.code;
          }
        }).catch((err)=>{
            throw err
        });
      }
    },
    components: {
      Banner, Bulletin, SignUp, Lecture
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
  }
</style>