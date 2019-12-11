<template>
	<div class="activity layout">
		<listTitle :listTitle = "listTitle" v-if="hasResult && !activityBl" ></listTitle>
		<dl class="activityDetail">
			<dd class="white-bg" v-for="(item, key) in activityArr" :key="key">
				<a :href="(item.type == 50 ? '/group/' : item.type == 51 ? '/snatch/' : '/bargain/' ) + item.no + '/'">
					<div class="imgBox">
							<img :src="$store.state.imgBaseUrl + item.imageUrl" :alt="item.name">
							<div class="iconBox">{{item.goodsType == 1 ? '课程' : item.goodsType == 2 ? '书籍' : '资料'}}</div>
							<div class="countDown" v-if="item.activityLimited == 55 || item.activityLimited == 140 || item.activityLimited == 57">
								<ul class="list" v-if="item.activityLimited == 55 || item.activityLimited == 140">
									<li><span class="box days" v-if="parseInt(timeArr[key] / 86400000) > 0">{{parseInt(timeArr[key] / 1000 / 24 / 3600) | adjust}}</span><span>天</span></li>
									<li><span class="box hours">{{parseInt((timeArr[key]/ 1000 / 3600 % 24)) | adjust}}</span><span>时</span></li>
									<li><span class="box minutes">{{parseInt((timeArr[key] / 1000 / 60 % 60)) | adjust}}</span><span>分</span></li>
									<li><span class="box seconds">{{parseInt((timeArr[key] / 1000 % 60)) | adjust}}</span><span>秒</span></li>
								</ul>
								<ul class="list" v-if="item.activityLimited == 57">
									<li>剩<span class="box">{{(item.stock - item.sellNum) > 0 ? item.type == 51 ? item.stock - item.sellNum : 1 : item.stock - item.sellNum}}</span>份</li>
								</ul>
						</div>
					</div>
					<div class="introduce"><span class="group" v-if="item.type == 50">拼团</span><span class="snatch" v-else-if="item.type == 51">抢购</span><span class="bargain" v-else >砍价</span>{{item.name}}</div>
					<div class="bottomBox">
						<span class="grayColor" v-if="item.type == 50"><img class="pticon2" src="../../assets/img/pticon2.jpg" alt="拼团">&nbsp;{{item.groupType == 54 ? 3 : item.groupType == 53 ? 2 : ''}}人团</span>
						<span class="grayColor" v-if="item.type == 51"><img class="qgicon2" src="../../assets/img/snatch.png" alt="超值价">&nbsp;超值价</span>
						<span class="grayColor" v-if="item.type == 52"><img class="kjicon2" src="../../assets/img/bargain.jpg" alt="最低价">&nbsp;最低价</span>
						&nbsp;&nbsp;&nbsp;<span class="redColor">￥<span class="price">{{item.price}}</span></span>&nbsp;&nbsp;
						<del class="grayColor">￥{{item.currentPrice}}</del>
						<span class="btn redBg" v-if="item.type == 50">去拼团</span>
						<span class="btn redBg" v-else-if="item.type == 51">去抢购</span>
						<span class="btn redBg" v-else >去砍价</span>
					</div>
				</a>
			</dd>
		</dl>
	</div>
</template>
<script type='text/ecmascript-6'>
	import listTitle from '../common/listTitle'
	export default {
		props: {
			activityArr: {
					default: () => new Array ()
			},
			activityBl: {
				default: false
			},
			hasResult: {
				default: false
			}
		},
		data () {
			return {
				listTitle: {
					title: '热门活动',
					arr: [
						{url: '/huodong/', msg: '更多>'}
					]
				},
				timer: '',
				timeArr: []
			}
		},
		mounted () {
			this.activityArr.map((item) => {
				if (item.activityLimited == 55 || item.activityLimited == 140) {
					this.timeArr.push(item.countdown)
				} else {
					this.timeArr.push(0)
				}
			})
			this.timer = setInterval(() => {
				for (var i = 0; i < this.timeArr.length; i ++) {
					this.$set(this.timeArr,i ,this.timeArr[i] == 0 ? 0 : this.timeArr[i] - 1000)
				}
			}, 1000)
		},
		components: {
			listTitle
		}
	}
</script>
<style lang="less" scoped>
.activity {
	overflow: hidden;
	.group {
		background: #ff5f23;
	}
	.bargain {
		background: #f8ba0b;
	}
	.snatch {
		background: #fb2029;
	}
	.activityDetail {
		dd {
			width: 7.1rem;
			border-radius: 0.05rem;
			margin: 0 auto;			
			margin-top: 0.2rem;
			overflow: hidden;
			a {
				color: inherit;
			}
			.imgBox {
				width: 7.1rem;
				height: 3.6rem;
				overflow: hidden;
				position: relative;
				a {
					width: 100%;
				}
				img {
					width: 100%;
					height: 100%;
				}
				.iconBox {
					width: 0.64rem;
					height: 0.44rem;
					background-color: #039bfb;
					border-radius: 0.05rem;
					position: absolute;
					top: 0.2rem;
					left: 0.2rem;
					line-height: 0.44rem;
					font-size: 0.24rem;
					color: #fff;
					text-align: center;
				}
				.countDown {
					height: 0.3rem;
					background-color:rgba(0, 0, 0, 0.7);
					border-radius: 0.05rem;
					position: absolute;
					bottom: 0;
					right: 0;
					padding: 0.15rem 0.2rem;
					color: #fff;
					ul {
						height: 0.3rem;
						font-size: 0.24rem;
						li {
							float: left;
							height: 0.3rem;
							line-height: 0.3rem;
							span {
								display: inline-block;
							}
							span.box {
								display: inline-block;
								min-width: 0.2rem;
								padding: 0 0.07rem;
								background-color: #ffffff;
								border-radius: 0.05rem;
								line-height: 0.3rem;
								margin: 0 0.05rem;
								color: #333;
								text-align: center;
							}
						}
					}
				}
			}
			.introduce {
				height: 1.38 - 0.4rem;
				padding: .2rem;
				line-height: 0.45rem;
				font-size: 0.3rem;
				overflow: hidden;
				span {
					display: inline-block;
					width: 0.64rem;
					height: 0.34rem;
					border-radius: 0.05rem;
					font-size: 0.24rem;
					color: #fff;
					text-align: center;
					line-height: 0.34rem;
					margin-right: 0.1rem;
					background: red;
				}
			}
			.bottomBox {
				height: 0.64rem;
				line-height: 0.64rem;
				font-size: 0.26rem;
				padding: 0 0.2rem;
				overflow: hidden;
				border-bottom: 1px dashed #a0a0a0;
				padding-bottom: 0.3rem;
				img {
					vertical-align: text-bottom;
				}
				.pticon2 {
					width: 0.44rem;
					height: 0.3rem;
				}
				.kjicon2 {
					width: 0.4rem;
					height: 0.31rem;
				}
				.qgicon2 {
					width: 0.31rem;
					height: 0.32rem;
				}
				.redColor {
					font-size: 0.3rem;
					.price {
						font-size: 0.44rem;
					}
				}
				span.btn {
					width: 1.5rem;
					height: 0.64rem;
					border-radius: 0.1rem;
					color: #fff;
					text-align: center;
					font-size: 0.3rem;
					float: right;
				}
				.redBg {
					background: @red;
				}
			}
		}
		dd:last-child {
			margin-bottom: 0;
		}
	}
}
</style>
