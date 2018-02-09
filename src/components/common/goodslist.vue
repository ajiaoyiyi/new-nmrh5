<template>
	<div class="goods-con">
		<ul>
			<li v-for="item in goodslist" :key="item.goods_id">
				<div class="goods-img imgbg">
					<img :src="item.goods_image" alt="">
				</div>
				<div class="goods-name">{{item.goods_name}}</div>
				<div class="goods-con">
					<div class="goods-price"><span>￥</span>{{item.goods_price}}</div>
					<div class="goods-sale">人气：{{item.goods_click}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
  export default ({
		props: ['goodslist'],
		data(){
			return {}
		}
	})
</script>

<style lang="scss" scoped>
  .imgbg{
  	@include default-bg(1.813333rem);
	}
	.goods-con{
		ul{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			li{
				width: 4.866667rem;
				background-color: $fc;
				margin-bottom: 0.266667rem;
				.goods-img{
					width: 100%;
					height: 4.4rem;
					overflow: hidden;
					img{
						width: 100%;
					}
				}
				.goods-name{
					@include sc(0.373333rem, $tit-color);
					@include line-clamp(2);
					height:1.466667rem;
					padding: 0.293333rem 0.266667rem;
					line-height: 1.6;
				}
				.goods-con{
					padding: 0.133333rem 0.266667rem 0.4rem 0.266667rem;
					display: flex;
					justify-content: space-between;
					align-items:center;
					.goods-price{
						@include sc(0.48rem,$pc);
						span{
							font-size: 0.32rem;
						}
					}
					.goods-sale{
						@include sc(0.32rem, $lightgray-color);
						text-align: right;
					}
				}
			}
		}
	}
</style>