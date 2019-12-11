<template>

  <dl class="title dis-flex-bt">
    <dt>
      <h3>{{listTitle.title}}</h3>
      <p v-if="listTitle.tip">{{listTitle.tip}}</p>
    </dt>
    <dd>
      <router-link :to="{name: item.name, params: item.params ? item.params : {}}" v-for="(item, key) in listTitle.arr" :key="key" :class="key % 2 == 1 ? 'line' : ''">{{item.msg}}</router-link>
    </dd>
  </dl>

</template>

<script>
export default {
  props: {
    listTitle: {
      default: () => {
        return {
          title: '标题',
          arr: [],
          tip: ''
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .title {
    height: .96rem;
    background: #fff;
    padding: 0 0.2rem;
    font-size: .28rem;
    line-height: .96rem;
    dt {
      height: .96rem;
      border-bottom: 1px solid #dadada;
      overflow: hidden;
      h3 {
        height: 0.9rem;
        -moz-box-shadow:0px 0.1rem 0px #e10030;
        -webkit-box-shadow:0px 0.1rem 0px #e10030;
        box-shadow:0px 0.1rem 0px #e10030;
        font-size: .36rem;
        font-weight: normal;
        float: left;
        margin-right: 0.2rem;
      }
      p {
        color: #999;
        font-size: 0.28rem;
        float: left;
      }
    }
    dd {
      height: 0.96rem;
      background: #fff;
      text-align: right;
      flex: 1;
      border-bottom: 1px solid #dadada;
      a {
        color: #999;
      }
      a.line {
        &::before {
          content: "|";
          color: #999;
          margin:0 .08rem;
        }
      }
    }
  }
</style>
