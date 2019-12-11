<template>
  <ul class="forumUl clearfix">
    <li class="forumList" v-for="(item,index) in signList" :key="index" @click="showDialog(index,item.pop1,item.pop2)" @touchmove.prevent>
      <div class="forumImg"><img v-lazy="item.listImg" alt=""></div>
      <p class="forum">{{ item.text }}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      signList: {
        default: () => new Array()
      }
    }
  }
</script>

<style lang="less" scoped>
  .forumUl{
    width: 6.72rem;
    margin: 0 auto;
    height: 2rem;
    margin-top: 0.35rem;
    li:not(:first-child){
      margin-left: 0.7rem;
    }
    img {
      width: 100%;
    }
    .forumList{
      width: 1.13rem;
      height: 1.58rem;
      float: left;
      div{
        display: block;
        width: 1.13rem;
        height: 1.13rem;
      }
      p{
        color: #000000;
        font-size: .26rem;
        height: 0;
        text-align: center;
        padding-top: 0.12rem;
      }
    }
  }
</style>