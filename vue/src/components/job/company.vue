<template>
  <div class="company">
    <listTitle :listTitle="listTitle"></listTitle>
    <div class="companys" v-if="company">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, key) in company" :key="key">
          <a :href="'/job/' + item.no + '.html'"><img :src="$store.state.imgBaseUrl + item.firmLogo" :alt="item.firmName"></a>
        </swiper-slide>
      </swiper>
    </div>
    <ul class="list">
      <li><a href="/job/job/b1/" class="full redColor"><em>Java开发</em></a></li>
      <li><a href="/job/job/b2/" class="full"><em>WEB前端</em></a></li>
      <li><a href="/job/job/b3/" class="full"><em>AI人工智能</em></a></li>
      <li><a href="/job/job/b4/" class="full"><em>物联网</em></a></li>
      <li><a href="/job/job/b5/" class="full"><em>大数据开发</em></a></li>
      <li><a href="/job/job/b6/" class="full"><em>数据分析</em></a></li>
      <li><a href="/job/job/b7/" class="full"><em>系统运维</em></a></li>
      <li><a href="/job/job/b8/" class="full"><em>软件测试</em></a></li>
    </ul>
    <div class="grayBg"></div>
  </div>
</template>

<script type='text/ecmascript-6'>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import listTitle from '../common/listTitle'
  export default {
    props: ['company'],
    data() {
      return {
				listTitle: {
					title: '就业岗位',
					arr: [
						{name: 'jobList', msg: '更多职位'}
					]
				},
				timer: '',
        timeArr: [],
        swiperOption: {
          autoplay: true,
          spaceBetween: 0.1 * sessionStorage.getItem('rem'),
          loop: true,
          loopAdditionalSlides: 2,
          slidesPerView: 3, 
          slidesPerGroup: 1
        },
			}
    },
    components: {
      listTitle, swiper, swiperSlide
    }
  }
</script>

<style lang="less" scoped>
  .company {
    .grayBg {
      height: 0.1rem;
      width: 7.5rem;
      background: #eee;
    }
    background: #fff;
    overflow: hidden;
    .companys {
      height: 1.74rem;
      width: 7.1rem;
      margin: 0.3rem auto 0;
      overflow: hidden;
      .layouts.flexBox;
      justify-content: space-between;
      .swiper-slide {
        width: 2.3rem;
        height: 1.74rem;
        background-color: #ffffff;
        border: solid 1px #dadada;
        overflow: hidden;
        .boxModel.borderBox;
        a {
          width: 100%;
          height: 100%;
        }
      }
      img {
        width: 100%;
      }
    }
    .list {
      height: 1.6rem;
      width: 7.1rem;
      margin: 0.2rem auto 0.3rem;
      border: 1px solid #dadada;
      li {
        height: 0.8rem;
        width: 7.1 / 4rem;
        float: left;
        .boxModel.borderBox;
        text-align: center;
        line-height: 0.79rem;
        .full {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
        em {
          display:inline-block;
          width:  100%;
          height: 0.3rem;
          line-height: 0.3rem;
          border-right: 1px solid #dadada;
        }
      }
      li:nth-child(n + 5) {
        border-top: 1px solid #dadada;
      }
      li:nth-child(4n +4) {
        em {
          border-right: none;
        }
      }
    }
  }
</style>