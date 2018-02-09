<!--评论列表模板-->
<template>
	<div class="sub-main">
	  <div class="comment-view" v-for="item in comments" :key="">
	  	<flexbox :gutter="10" justify="center" align="center">
	  		<flexbox-item span="30">
	  			<div class="dis-icon defimg">
	  				<img :src="item.member_face" />
	  			</div>
	  		</flexbox-item>
	  		<flexbox-item>
	  			<div class="dis-sub">
	  				<div class="dis-name">{{item.member_name}}</div>
	  				<div class="dis-date">{{item.comment_date}}</div>
	  			</div>
	  		</flexbox-item>
	  		<flexbox-item>
	  			<div class="dis-good">
						<!-- <img src="../../../static/images/icon/dianzan_normal.png" width="17" height="15" /> -->
						<img src="../../../static/images/icon/dianzan_press.png" width="17" height="15" />
						<span>赞</span><!--有点赞数显示数字-->
	  			</div>
	  		</flexbox-item>
	  	</flexbox>
	  	<div class="dis-txt">{{item.comment_content}}</div>
	  	<div class="dis-replay triangle-top">
	  		<span class="dis-replay-txt">作者回复：</span>
	  		<span>回复内容</span>
	  	</div>
		</div>
  </div>
</template>

<script>
	import { Flexbox, FlexboxItem } from 'vux'
	export default ({
    props:['comments'],
		components:{
			Flexbox,
			FlexboxItem
		}
	})
</script>

<style lang="scss" scoped>
  .comment-view{
  	background-color: $white-color;
  	padding: 0.4rem 0.266667rem;
  	@include border-bt; 
  	.dis-icon{
  		@include wh(0.8rem,0.8rem);
  		@include borderRadius(50%);
  		overflow: hidden;
  		img{
  			@include wh(0.8rem,0.8rem);
  		}
  	}
  	.dis-sub{
  		line-height: 1.2;	
  		.dis-name{
  			@include sc(0.373333rem,$tit-color)
  		}
  		.dis-date{
  			@include sc(0.32rem,$lightgray-color)
  		}
  	}
  	.dis-good{
  		text-align: right;
  		@include sc(0.4rem,$lightgray-color)
  		img,span{
  			vertical-align: middle;
  		}
  	}
  	.dis-txt{
  		margin-top: 0.4rem;
  		margin-left: 1.066667rem;
  		@include sc(0.4rem,$tit-color);
  	}
  	.dis-replay{
  		width: 8.4rem;
  		padding: 0.4rem;
  		background-color: $f5-color;
  		line-height: 1;
 			margin-left: 1.066667rem;
 			margin-top: 0.4rem;
 			@include borderRadius(0.066667rem);
  		@include sc(0.4rem,$tit-color);
  		.dis-replay-txt{
  			color: $green-color;
  		}
  	}
  	.triangle-top{
  		@include triangle-top(0.2rem,0.2rem,0,0.6rem,0,$f5-color)
  	}
  }
</style>