<!--
	评论框：表情和文本
-->
<template>
	<div class="comment-form">
		<flexbox :gutter="5" justify="space-between" align="center">
			<flexbox-item span="25">
				<div class="comment-icon-btn">
					<img src="../../../static/images/icon/icon_biaoqing.png" class="defimg">
				</div>
			</flexbox-item>
			<flexbox-item>
				<div class="comment-input">
					<input type="text" placeholder="我要说两句">
				</div>
			</flexbox-item>
			<flexbox-item span="50">
				<div class="comment-sub">发送</div>
			</flexbox-item>
		</flexbox>
	</div>
</template>

<script>
	import { Flexbox, FlexboxItem } from 'vux'
	export default ({
		components:{
			Flexbox,
			FlexboxItem
		}
	})
</script>

<style lang="scss" scoped>
  	.comment-form{
  		background-color: $white-color;
  		padding: 0.2rem 0.266667rem;
  		position: fixed;
  		bottom: 0;
  		width: 100%;
  		@include border-tp;
			.comment-icon-btn{
				@include wh(0.666667rem,0.666667rem)
				img{
					width: 100%;
					height: 100%
				}
			}
			.comment-input{
				background-color:$f5-color;
				height: 0.8rem;
				line-height: 1;
				text-align: left; 
				@include borderRadius(0.133333rem);
				input{
					height: 100%;
					width: 90%;
					margin-left: 5%;
					background-color:$f5-color;
					@include sc(0.4rem,$tit-color);
				}
			}
			.comment-sub{
				@include wh(1.333333rem,0.8rem);
				@include borderRadius(0.133333rem);
				@include sc(0.4rem,$white-color);
				background-color: $green-color;
				text-align: center;
				line-height: 0.8rem
			}
  	}
</style>