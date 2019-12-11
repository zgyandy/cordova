<template>
  <div>
    <ul class="videoList">
      <li v-for="(item, key) in videoArr" :key="key" @click.stop="toPlay(item.id)">
        <a href="javascript:;">
          <div class="msg">
            <p class="explain">{{item.title}}</p>
            <div class="dis-flex-bt">
              <p><span>{{item.teacherName}}&nbsp;</span>
              <span><img class="playIcon" src="../../assets/img/play.png" alt=""><span>{{item.viewCount}}</span></span></p>
              <div class="dis-flex-bt">
                <span>{{item.readNum}}</span>
              </div>
            </div>
          </div>
          <div class="imgBox">
            <img v-lazy="$store.state.imgBaseUrl + item.picture" :alt="item.title">
            <p class="videoTime">{{item.formatDuration}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>

</template>
<script type='text/ecmascript-6'>
export default {
  props: ['videoArr'],
  methods: {
    toPlay (id) {
      // this.$router.push({name: 'videoPlay', params: {id: id}})
      location.assign('/video/play-' + id + '.htm')
    }
  }
}
</script>

<style scoped lang='less'>
    .videoList {
      padding: 0 .2rem;
      li {
        height: 1.72rem;
        padding: .3rem 0;
        border-bottom: 1px dashed #a0a0a0;
        font-size: .28rem;
        overflow: hidden;
        .playIcon {
          margin-left: 0.5rem;
        }
        a {
          width: 100%;
        }
        .imgBox {
          width: 2.3rem;
          height: 1.72rem;
          float: right;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .videoTime {
            height: 0.4rem;
            line-height: 0.4rem;
            padding: 0 0.2rem;
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: #000000;
            border-radius: 0.1rem;
            opacity: 0.7;
            color: #fff;
          }
        }    
        .msg {
          width: 4.51rem;
          float: left;
          .explain {
            height: 1.15 - .2rem;
            margin-bottom: .2rem;
            overflow: hidden;
            line-height: .45rem;
            font-size: .3rem;
            padding-top: .1rem;
            color: #000;
          }
          img {
            width: 0.34rem;
            height: 0.25rem;
            margin-right: .1rem;
          }
        }
      }
    }
</style>
