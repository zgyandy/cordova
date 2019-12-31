<template>
  <div class="active layout">
    <table cellspacing="0" border="0" class="listEnter">
      <tr>
        <td class="borderRight bordeBottom">
          <a href="/snatch/" class="full downTimeBox">
            <img src="../../assets/img/snatchb.jpg" alt="限时抢购">
            <div class="downTime">
              <span class="box">00</span><span>&nbsp;:&nbsp;</span>
              <span class="box">{{(59 - parseInt(time / 1000 / 60) % 60) | adjust }}</span><span>&nbsp;:&nbsp;</span>
              <span class="box">{{(59 - parseInt(time / 1000) % 60) | adjust }}</span>
            </div>
          </a>
        </td>
        <td class="bordeBottom"><a href="/group/" class="full"><img src="../../assets/img/groupb.jpg" alt="每日开团"></a></td>
      </tr>
      <tr>
        <td class="borderRight bordeBottom"><a href="/bargain/" class="full"><img src="../../assets/img/bargainb.jpg" alt="砍价实惠"></a></td>
        <td class="bordeBottom"><a href="/mall/course/" class="full"><img src="../../assets/img/courseb.jpg" alt="精品课程"></a></td>
      </tr>
    </table>
    <ul class="courseList">
      <li v-for="(item, key) in arr" :key="key"><a :href="'/mall/' + item.entityId + '/'" class="full"><img :src="'http://iotekcdn.zhizuobiao.com/wap/img/home/course0'+ (key + 1) +'.jpg'" :alt="item"></a></li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      arr: [],
      time: Date.now()
    }
  },
  mounted () {
    this.$get('/api/video/homeMall').then(res => {
      if (res.code == 200) {
        this.arr = res.data.dataList;
      }
    }).catch(err => {
      throw err;
    })
    setInterval(() => {
      this.time = this.time + 1000;
    }, 1000)
  }
}
</script>

<style scoped lang='less'>
  .active {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    a.full {
      height: 100%;
      width: 100%;
    }
    .downTimeBox {
      position: relative;
      .downTime {
        height: 0.3rem;
        line-height: 0.3rem;
        position: absolute;
        top: 0.28rem;
        right: 0.2rem;
        text-align: center;
        color: #000;
        .box {
          display: inline-block;
          width: 0.34rem;
          height: 0.3rem;
          background: #000;
          color: #fff;
        }

      }
    }
    .listEnter {
      height: 3.82rem;
      img {
        height: 1.91rem;
      }
      tr {
        overflow: hidden;
      }
      td {
        height: 1.91rem;
        overflow: hidden;
      }
    }
    .bordeBottom {
      border-bottom: 1px solid #dadada;
    }
    .borderRight {
      border-right: 1px solid #dadada;
    }
    .borderLeft {
      border-left: 1px solid #dadada;    
    }
    .courseList {
      height: 1.9rem;
      .flex();
      li {
        height: 1.9rem;
        flex: 1;
        border: none;
      }
      li+ li {
        border-left: 1px solid #dadada;
      }
    }
  }
</style>
