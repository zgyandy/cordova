<template>
  <ul class="jobList">
    <li v-for="(item, index) in  jobArr" :key="index">
      <div class="imgBox"><img v-lazy="$store.state.imgBaseUrl + item.firmLogo" :alt="item.jobName"></div>
      <dl class="jobMsg">
        <dt class="dis-flex-bet"><div class="jobName"><a :href="'job/' + item.no + '.html'">{{item.jobName}}</a></div><div class="salary red-color">{{item.jobSalaryName}}</div></dt>
        <dd class="grayColor"><span>{{item.jobCity}}</span>&nbsp;<span>{{item.jobExperienceName}}</span>&nbsp;<span>{{item.jobEducationName}}</span></dd>
        <dd class="company dis-flex-bet">
          <div class="comName"><a :href="'/job/' + item.firmNo + '.html'">{{item.firmAbbreviation}}</a></div>
            <div class="time grayColor">{{item.jobDay < 1 ? '最新' : item.jobDay < 4 ? item.jobDay + '天前发布' : item.jobDay < 8 ? '一周前' : '最近发布'}}</div>
        </dd>
      </dl>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['jobArr'],
  }
</script>

<style scoped lang="less">
  .jobList {
    .dis-flex-bet {
      .layouts.flexBox;
      justify-content: space-between;
    }
    .red-color {
      color: #e10030;
      text-align: right;
    }
    overflow: hidden;
    li {
      height: 1.67 - 0.29 - 0.29rem;
      width: 7.1rem;
      border-bottom: solid 0.01rem #dadada;
      padding: 0.29rem 0;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      a {
        color: inherit;
      }
    }
    li:last-child {
      border-bottom: none;
    }
    .jobMsg {
      width: 7.1 - 1.68rem;
      height: 1.67 - 0.29 - 0.29rem;
      line-height: 0.28rem;
      font-size: 0.22rem;
      dt {
        font-size: 0.3rem;
        line-height: 1;
        color: #333;
      }
      dd.grayColor  {
        line-height: 0.56rem;
      }
      .company {
        color: #666;
      }
    }
    .imgBox {
      width: 1.4rem;
      height: 1.06rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .jobName {
      width: 4.22rem;
      height: 0.32rem;
      a {
        width: 4.22rem;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        white-space: nowrap;

      }
    }
  }
</style>