<template>
<div>
  <listTitle :listTitle = "listTitle" v-if="!videoBl"></listTitle>
  <ul class="leatureList dis-flex-wrap">
    <li v-for="(item, key) in videoArr" :key="key" @click.stop="toPlay(item.id)">
      <div class="imgBox">
        <img v-lazy="$store.state.imgBaseUrl + item.picture" :alt="item.title">
        <div class="dis-flex-bt">
          <p>{{item.rangeDataName}}</p>
          <p>{{item.formatDuration}}</p>
        </div>
      </div>
      <p class="explain">{{item.title}}</p>
      <dl class="videoMsg dis-flex-bt grayColor">
        <dt>{{item.teacherName}}</dt>
        <dd>
          <img class="playIcon" src="../../assets/img/play.png" alt="">
          <span>{{item.viewCount}}</span>
        </dd>
      </dl>
    </li>
  </ul>
</div>
    
</template>

<script>
import listTitle from '../common/listTitle'
export default {
  props: {
    videoArr: {
      default: () => new Array ()
    },
    videoBl: {
      default: true
    }
  },
  data () {
    return {
      listTitle: {
        title: '热门视频',
        arr: [
          {name: 'videoList', msg: '更多>'}
        ]
      }
    }
  },
  methods: {
    toPlay (id) {
      this.$router.push({name: 'videoPlay', params: {id: id}})
      // location.assign('/video/play-' + id + '.htm')
    }
  },
  components: {
    listTitle
  }

}
</script>

<style scoped lang="less">
.leatureList {
  padding: 0 .2rem;
  padding-top: .2rem;
  overflow: hidden;
  background: #eee;
  li {
    width: 3.45rem;
    height: 3.84rem;
    background-color: #ffffff;
    margin-bottom: .2rem;
    .imgBox {
      width: 3.45rem;
      height: 2.14rem;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
      }
      .dis-flex-bt {
        width: 3.05rem;
        height: 0.4rem;
        background-color: rgba(0, 0, 0, .5);
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 .2rem;
        color: #fff;
      }
    }
    .explain {
      height: .77rem;
      overflow: hidden;
      padding: .2rem .2rem 0;
      line-height: 0.38rem;
      font-size: .28rem;
      margin-bottom: .2rem;
    }
    .videoMsg {
      height: .25rem;
      padding: 0 .2rem;
      .playIcon{
        width: 0.32rem;
        height: 0.24rem;
        vertical-align: middle;
        margin-right: .1rem;
      }
    }
  }
}
</style>
