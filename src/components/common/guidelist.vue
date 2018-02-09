<!--攻略列表模版-->
<template>
	<div class="guide-view">
		<div class="guide" v-for = "item in guidelist">
			<router-link :to="{name:'guidedetail', params: {guideid: item.article_id}}">
				<div class="guide-author">
					<flexbox justify="space-between" align="center" :gutter="0">
				      <flexbox-item :span="8">
				      	<div class="guide-name">
				      		<div class="defimg">
				      			<img :src="item.admin_head_img" alt="">
				      		</div>
				      		<span>{{item.username}}</span>
				      	</div>
				      </flexbox-item>
				      <flexbox-item>
				      	<div class="flex-date">{{item.article_publish_time}}</div>
				      </flexbox-item>
				    </flexbox>
				</div>
				<div class="guide-imgs imgbg">
					<img :src="item.article_image">
				</div>
				<div class="guide-name">{{item.article_title}}</div>
				<div class="guide-sketch" v-html="item.article_content"></div>
			</router-link>
			<div class="guide-tips">
				<flexbox justify="space-between" align="center" :gutter="0">
			      <flexbox-item>
			      	<div class="tip-item-flag">{{item.article_keyword}}</div>
			      </flexbox-item>
			      <flexbox-item >
			      	<flexbox class="tip-item-view" justify="space-between" align="center">
			      		<flexbox-item><x-icon type="thumbsup" class="icon-gray" size="30"></x-icon>
							<span>{{item.agree_times}}</span>
	      		</flexbox-item>
						<flexbox-item><x-icon type="ios-eye" class="icon-gray" size="30"></x-icon>
							<span>{{item.article_click}}</span>
						</flexbox-item>
			      	</flexbox>
			      </flexbox-item>
			    </flexbox>
			</div>
		</div>
	</div>
</template>

<script>
	import { Flexbox, FlexboxItem, XImg } from 'vux'
	export default {
		props: ['guidelist'],
	  components: {
	    Flexbox,
	    FlexboxItem,
	    XImg
	  }
	}
</script>

<style lang="scss">
	.guide{
		padding: 0.32rem;
		background: #FFFFFF;
		margin-bottom: 0.266667rem
	}
	.guide-author{
		.guide-name{
			font-size: 0.24rem;
			color: $tit-color;
			text-align: left;
			display: flex;
			.defimg{
				margin-right: 0.266667rem;
				width: 0.666667rem;
				height: 0.666667rem;
			}
		},
		.flex-date{
			text-align: right;
			font-size: 0.373333rem;
			color: $lightgray-color;
		}
	}
	.guide-imgs{
		width: 100%;
		height: 4.266667rem;
		margin-top: 0.32rem;
		margin-bottom: 0.4rem;
		position:relative;
	}
	.imgbg{
		@include default-bg(4.266667rem);
	}
	.guide-name{
		@include font(0.453333rem,0.666667rem);
		color: $tit-color;
		@include line-clamp(2);
	}
	.guide-sketch{
		@include font(0.373333rem,0.666667rem); 
		color: $sub-color;
		margin-top: 0.32rem
	}
	.guide-tips{
		margin-top: 0.4rem;
		.tip-item-flag{
			padding: 0.213333rem;
			font-size: 0.32rem;
			color: $sub-color;
			background-color: $f5-color;
			display: inline-block;
		}
		.tip-item-view{
			@include font(0.4rem,0.4rem);
			text-align: right;
			.icon-gray{
				fill:$a0-color;
				vertical-align: middle;
			}
		}
	}
</style>