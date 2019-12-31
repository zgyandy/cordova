<template>
  <dl class="myPage">
    <dt>
      <img @click.stop="getPict" class="photo" ref="img" :src="url" alt="">
    </dt>
    <dd>
      <div class="iconBox"><img class="orderIcon" src="../../assets/img/my/order.png" alt=""></div>
      <p>我的订单</p>
      <div class="iconfont icon-icon-test3"></div>
    </dd>
    <dd>
      <div class="iconBox"><img class="classIcon" src="../../assets/img/my/classicon.png" alt=""></div>
      <p>我的班级</p>
      <div class="iconfont icon-icon-test3"></div>
    </dd>
    <dd>
      <div class="iconBox"><img class="commentIcon" src="../../assets/img/my/comment.png" alt=""></div>
      <p>我的评论</p>
      <div class="iconfont icon-icon-test3"></div>
    </dd>
    <dd>
      <div class="iconBox"><img class="agreementIcon" src="../../assets/img/my/agreementIcon.png" alt=""></div>
      <p>我的合同</p>
      <div class="iconfont icon-icon-test3"></div>
    </dd>
    <dd>
      <div class="iconBox"><img class="settingIcon" src="../../assets/img/my/setting.png" alt=""></div>
      <p>个人设置</p>
      <div class="iconfont icon-icon-test3"></div>
    </dd>
    <dd>
      <div class="iconBox"><img class="passwordIcon" src="../../assets/img/my/password.png" alt=""></div>
      <p>密码设置</p>
      <div class="iconfont icon-icon-test3"></div>
    </dd>
    <dd @click.stop="routeChange('login', signOut)">
      <div class="iconBox"><img class="signIcon" src="../../assets/img/my/signout.png" alt=""></div>
      <p>立即退出</p>
      <div class="iconfont icon-icon-test3"></div>
    </dd>
  </dl>
</template>

<script>
  export default {
    data() {
      return {
        url: 'http://iotekimg.zhizuobiao.com/iotek2/person/sys/no.jpg'
      }
    },
    methods: {
      getPict() {
        this.getPicture ((imgUrl) => {
          this.url = imgUrl
        }, (message) => {
          throw message
        }, {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          allowEdit: true,
          targetWidth: 120,
          targetHeight: 120,
        })
      },
      routeChange (name, fn) {
        fn && fn ();
        this.$router.push({'name': name})
      },
      signOut () {
        // 退出
      }
    },
  }
</script>

<style scoped lang="less">
  .list {
    .flex(@justify: space-between);
  }
  dt {
    height: 2.52rem;
    background: url("../../assets/img/my/mybg.png") no-repeat;
    overflow: hidden;
    text-align: center;
  }
  .photo {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    display: block;
    margin: 0.66rem auto;
  }
  dd {
    height: 1rem;
    width: 7.1rem;
    margin: 0 auto;
    .flex(@justify: space-between; @align: center);
    border-bottom: 1px solid #dadada;
    font-size: 0.28rem;
    .iconBox {
      width: 0.6rem;
    }
    p {
      .flexW(1);
    }
  }
  .orderIcon {
    width: 0.38rem;
    height: 0.43rem;
  }
  .classIcon {
    width: 0.45rem;
    height: 0.4rem;
  }
  .commentIcon {
    width: 0.43rem;
    height: 0.42rem;
  }
  .agreementIcon {
    width: 0.41rem;
    height: 0.43rem;
  }
  .settingIcon {
    width: 0.42rem;
    height: 0.42;
  }
  .passwordIcon {
    width: 0.38rem;
    height: 0.43rem;
  }
  .signIcon {
    width: 0.42rem;
    height: 0.41rem;
  }
</style>