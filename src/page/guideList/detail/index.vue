<!--
	攻略详情页面
-->  
<template>
	<div class="sub-main">
		<div class="imgbg">
			<x-img :src="getGuideDetail.article_image" :offset="0"></x-img>
		</div>
		<div class="guidedetail-main">
			<div class="guide-author">
				<flexbox justify="space-between" align="center" :gutter="0">
			      <flexbox-item :span="8">
			      	<div class="guide-name">
			      		<div class="defimg">
			      			<img :src="getGuideDetail.admin_head_img" alt="">
			      		</div>
			      		<span>{{getGuideDetail.username}}</span>
			      	</div>
			      </flexbox-item>
			      <flexbox-item>
			      	<div class="flex-date">{{getGuideDetail.article_publish_time}}</div>
			      </flexbox-item>
			    </flexbox>
			</div>
			<div class="guide-tit">{{getGuideDetail.article_title}}</div>
			<div class="guide-eye">
				<x-icon type="ios-eye" class="icon-gray" size="30"></x-icon>
				<span>{{getGuideDetail.article_click}}</span>
			</div>
			<div class="guide-con" v-html="getGuideDetail.article_content"></div>
		</div>
		<div class="concern">
			<img src="../../../../static/images/erweima.png">
		</div>
		<!--可能喜欢  start-->
		<div class="guide-like">
     	<div class="like-tit">您可能喜欢</div>
     	<div class="like-items">
     		<flexbox justify="space-between" align="flex-start" :gutter="9">
		      <flexbox-item v-for="item in getLikes" :key="item.article_id">
		      	<router-link :to="{name:'guidedetail', params: {guideid: item.article_id}}">
		      		<div class="imgbg01">
								<x-img :src="item.article_image" :offset="0"></x-img>
							</div>
		      		<div class="guide-name">{{item.article_title}}</div>
		      	</router-link>
		      </flexbox-item>
		    </flexbox>
     	</div>
    </div>                           
		<!--可能喜欢  end-->

		<!--分享 start-->
		<div class="share-view">
			<flexbox justify="space-between" :gutter="0">
				<flexbox-item span="178" class="share-item">
					<img :src="shareimg" alt="" width="100%">
				</flexbox-item>
				<flexbox-item class="share-item">
					<div v-on:click="showShade">
						<img src="../../../../static/images/icon/icon_fenxiang.png" width="15" />
						<span>分享</span>
					</div>
					<transition name="fade">
						<div class="share-shade" v-if="showadd" v-on:click="hideShade"></div>
					</transition>
				</flexbox-item>
				<flexbox-item class="share-item share-good">
					<div v-on:click="show">
						<img src="../../../../static/images/icon/dianzan_press.png" width="17" />
						<span>{{getGuideDetail.agree_num}}</span>
					</div>
					<transition name="fade">
						<div class="addnum" v-if="showadd">+1</div>
					</transition>
				</flexbox-item>
				<flexbox-item class="share-item">
					<div @click="goComment">
						<img src="../../../../static/images/icon/icon_pinglun.png" width="15" />
						<span>{{getGuideDetail.comment_num}}</span>
					</div>
				</flexbox-item>
			</flexbox>
		</div>
		<!--分享 end-->
	</div>
</template>

<script>
	import { XImg, Flexbox, FlexboxItem, Group, Cell, dateFormat } from 'vux'
	import { getguideDetail } from '@/api'
  export default ({
  	components:{
  		XImg,
  		Flexbox,
  		FlexboxItem,
  		Group,
  		Cell
  	},
  	data(){
  		return {
				shareimg: '/static/images/wenzitishi.png',
    		showadd: false,
    		getGuideDetail: [],
    		getLikes: []
			}
  	},
  	created(){
  		this.getguideDetail();
  	},
  	methods:{
  		getguideDetail(){
  			let params = {
  				article_id:this.$route.params.guideid,
  				member_id: '1'
  			}
  			getguideDetail(params).then(res => {
  					this.getGuideDetail = res.article
  					this.getLikes = res.guessLike
						this.getGuideDetail.article_publish_time = dateFormat(this.getGuideDetail.article_publish_time,'YYYY-MM-DD')
  			}).catch(e => {
			  	console.log(e);
			  });
  		},
  		show(){
  			this.showadd = !this.showadd;
  		},
  		showShade(){
  			this.showadd = !this.showadd;
  		},
  		hideShade(){
  			this.showadd = !this.showadd;
  		},
  		//进入点赞页面
  		goComment(){
  			this.$router.push('../guidecommont');
  		}
  	},
  	watch: {
        "$route": "getguideDetail"
    }
  })
</script>

<style lang="scss" scoped>
  .imgbg{
  	@include default-bg(4.506667rem);
  }
  .imgbg01{
  	@include default-bg(2.08rem);
  }
  .guidedetail-main{
  	background-color: $white-color;
  	padding: 0.4rem 0.266667rem;
	  .guide-author{
			.guide-name{
				font-size: 0.24rem;
				color: $tit-color;
				text-align: left;
				display: flex;
				align-items: center;
				.defimg{
					margin-right: 0.266667rem;
					width: 0.666667rem;
					height: 0.666667rem;
					@include borderRadius(50%);
					vertical-align: middle;
				}
				span{
					vertical-align: middle;
				}
			}
			.flex-date{
				text-align: right;
				font-size: 0.373333rem;
				color: $lightgray-color;
			}
		}
		.guide-tit{
			margin-top: 0.266667rem;
			@include font(0.453333rem,0.666667rem);
			color: $tit-color;
			@include line-clamp(2);
		}
		.guide-eye{
			display: flex;
			justify-content: flex-end;
			align-items:center;
			color: $lightgray-color;
			fill: $lightgray-color;
		}
	}
	.guide-con{
		margin-top: 0.293333rem;
		@include sc(0.4rem,$tit-color);
		line-height: 1.8
	}
	.concern{
		margin-top: 0.266667rem;
		padding: 0.4rem;
		background-color: $white-color;
		img{
			width: 100%
		}
	}

	.guide-like{
		margin-top: 0.266667rem;
		padding: 0.4rem 0.266667rem;
		background-color: $white-color;
		.like-tit{
			text-align: center;
			@include sc(0.373333rem,$f2);
			vertical-align: middle;
			height: 0.373333rem;
			line-height: 0.373333rem;
		}
		.like-tit:before,.like-tit:after{
			content: '';
			display: inline-block;
			width: 0.2rem;
			height: 0.373333rem;
			vertical-align: middle;
			background-size: cover;
		}
		.like-tit:before{
			background-image: url('../../../../static/images/icon/icon-like-left.png');
			margin-right: 0.213333rem;
		}
		.like-tit:after{
			background-image: url('../../../../static/images/icon/icon-like-right.png');
			margin-left: 0.213333rem;
		}
		.like-items{
			margin-top: 0.4rem;
			.guide-name{
				@include line-clamp(2);
				@include sc(0.346667rem, $d4);
				line-height: 1.6;
				margin-top: 0.32rem;
			}
		}
	}

	.share-view{
		margin-top: 0.373333rem;
		background-color: $white-color;
		padding: 0.4rem;
		text-align: right;
		@include sc(0.373333rem,$d4)
		img,span{
			vertical-align: middle;
		}
		.share-item{
			text-align: right;
			position: relative;
		}
		.share-good{
			color:$ff;
		}
		.addnum{
			position: absolute;
			top: -15px;
			left: 15px;
		}
	}
	.share-shade{
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-image: url('../../../../static/images/share-shade.png');
		background-repeat: no-repeat;
		background-position: right top;
		background-size: 80%;
		background-color: rgba(0,0,0,.8);
		z-index: 99;
	}
</style>