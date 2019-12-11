<template>

  <div class="hotChannel">
    <listTitle :listTitle="listTitle"></listTitle>
    <ul class="list dis-flex-wrap">
      <li v-for="(item, key) in listArr" :key="key" @click="chooseChannel(key)">
        <a :href="item.url">
        {{item.msg}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import listTitle from '../../components/common/listTitle'
export default {
  data () {
    return {
      listTitle: {
        title: '热门频道'
      },
      listArr: [
        {
          msg: '优才商城',
          id: 1,
          url: '/mall/'
        }, {
          msg: '职坐标讲堂',
          id: 2,
          url: '/video/'
        }, {
          msg: 'IT知识库',
          id: 3,
          url: '/knowledge/'
        }, {
          msg: '名师指导',
          id: 4,
          url: '/blog/'
        }, {
          msg: '精品课程',
          id: 5,
          url: '/mall/course/'
        }, {
          msg: '畅销书籍',
          id: 6,
          url: '/mall/book/'
        }, {
          msg: '必备资料',
          id: 7,
          url: '/mall/info/'
        },{
          msg: '活动狂欢',
          id: 7,
          url: '/huodong/'
        }
      ],
      first: 1
    }
  },
  methods: {
    chooseChannel (key) {
      this.first = key + 1
    }
  },
  components: {
    listTitle
  }
}
</script>

<style lang="less" scoped>
  .hotChannel {
    background: #fff;
    .list {
      height: 2.3 - .4rem;
      width: 7.1rem;
      padding: .3rem 0.2rem .1rem;
      li {
        width: 1.64rem;
        height: 0.75rem;
        background-color: #eeeeee;
        border-radius: 0.1rem;
        color: #333333;
        line-height: .75rem;
        text-align: center;
        font-size: 0.28rem;
        a {
          color: inherit;
          display: inline-block;
          height: 100%;
          width: 100%;
        }
      }
      li.active {
        background: #fff;
        box-shadow: 0 0 1px #e10030;

      }
    }
  }
</style>
