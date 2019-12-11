<template>
  <div class="goods" >
    <listTitle :listTitle = "listTitle" v-if="!goodsBl"></listTitle>
    <!-- 畅销商品 -->
    <ul class="two" v-if="!goodsBl">
      <li v-for="(item, key) in goodsArr" :key="key">
        <a :href="$store.state.domain + '/mall/'+ item.no + '/'">
          <div class="imgBox">
            <img v-lazy="$store.state.imgBaseUrl + item.keyPicUrl" :alt="item.name">
          </div>
          <div class="msg">
            <p class="explain">{{item.name}}</p>
            <div class="dis-flex-bt">
              <p><ins class="redColor">￥{{item.currentPrice}}</ins></p>
              <div class="dis-flex-bt">
                <span>{{item.salesVolume}}人购买</span>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <!-- 查找商品 -->
    <ul class="one" v-else>
      <li v-for="(item, key) in goodsArr" :key="key">
        <a :href="$store.state.domain + '/mall/'+ item.no + '/'">
          <div class="imgBox">
            <img v-lazy="$store.state.imgBaseUrl + item.keyPicUrl" :alt="item.name">
          </div>
          <div class="msg">
            <p class="explain">{{item.name}}</p>
            <div class="dis-flex-bt">
              <p><ins class="redColor">￥{{item.currentPrice}}</ins>&nbsp;&nbsp;<del>￥{{item.originalPrice}}</del></p>
              <div>
                <span>{{item.salesVolume}}人购买</span>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
import listTitle from '../common/listTitle'

export default {
  props: {
    goodsArr: {
      default: () => new Array ()
    },
    goodsBl: {
      default: true
    }
  },
  data () {
    return {
      listTitle: {
        title: '畅销商品',
        arr: [
          {url: '/mall/course/', msg: '更多>'}
        ]
      },
    }
  },
  components: {
    listTitle
  }
}
</script>

<style scoped lang='less'>
  .goods {
    ul.one {
      width: 7.1rem;
      margin: 0 auto;
      li {
        height: 1.72rem;
        width: 7.1rem;
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
          float: left;
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
          float: right;
          ins {
            font-size: 0.36rem;
          }
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
    ul.two {
      width: 7.1rem;
      margin: 0 auto;
      overflow: hidden;
      padding:0.2rem 0.2rem 0;
      background: #eee;
      li {
        height: 4.3rem;
        width: 3.45rem;
        float: left;
        margin-right: 0.2rem;
        background: #fff;
        margin-bottom: 0.2rem;
        .imgBox {
          width: 3.45rem;
          height: 2.59rem;
          img {
            height: 100%;
            width: 100%;
          }
        }
        div.msg {
          padding: 0.2rem 0.2rem 0;
          .explain {
            height: 0.8rem;
            overflow: hidden;
            line-height: 0.4rem;
            margin-bottom: 0.2rem;
            color: #000;
          }
          ins {
            font-size: 0.32rem;
          }
        }
      }
      li:nth-child(2n + 2) {
        margin-right: 0;
      }
    }
  }
</style>
