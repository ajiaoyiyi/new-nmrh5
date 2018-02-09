<template>
	<div>
		<div class="page-main">
			<blur :blur-amount="0" :url="bgimg" style="height:4.266667rem">
				<div class="center-logo">
					<x-img :default-src="defaultLogo" :src="defaultLogo" error-class="ximg-error"></x-img>
					<p class="username">用户名</p>
				</div>
			</blur>
			<grid :cols="2" class="flex-view">
			  <grid-item link="/account">
			   	 <flexbox class="grid-flexbox">
			      <flexbox-item>
			      	<img src="../../../static/images/icon/icon_zhanghao.png">
			      	<span>账户56.00元</span>
			      </flexbox-item>
			    </flexbox>
			  </grid-item>
			  <grid-item link="/bean">
			    <flexbox class="grid-flexbox">
			      <flexbox-item><img src="../../../static/images/icon/icon_nongdou.png">
							<span>农豆286个</span>
			      </flexbox-item>
			    </flexbox>
			  </grid-item>
			</grid>
			<!--订单 start-->
			<div class="order-view">
				<card>
					<cell slot="header" title="我的订单" value="查看更多" :is-link="true" class="card-header">
						<img slot="icon" src="../../../static/images/icon/icon_wodedingdan.png" class="tit-icon"></img>
					</cell>
		      <div slot="content" class="card-flex card-content">
		        <div class="card-item">
		          <img src="../../../static/images/icon/daifukuan.png">
		          <p class="card-item-txt">待付款</p>
		        </div>
		        <div class="card-item">
		          <img src="../../../static/images/icon/daishouhuo.png">
		          <p class="card-item-txt">待收货</p>
		        </div>
		        <div class="card-item">
		          <img src="../../../static/images/icon/daipingjia.png">
		          <p class="card-item-txt">待评价</p>
		        </div>
		        <div class="card-item">
		          <img src="../../../static/images/icon/tuihuo.png">
		          <p class="card-item-txt">退/换货</p>
		        </div>
		      </div>
		    </card>
		  </div>
	    <!--订单 end-->
	    <div class="cell-view">
	    	<cell title="地址管理" is-link class="cell-item">
	    		<img slot="icon" src="../../../static/images/icon/icon_dizhiguanli.png" class="tit-icon"></img>
	    	</cell>
	    	<cell title="常见问题" is-link class="cell-item">
	    		<img slot="icon" src="../../../static/images/icon/icon_changjianwenti.png" class="tit-icon"></img>
	    	</cell>
	    	<cell title="关于我们" is-link class="cell-item">
	    		<img slot="icon" src="../../../static/images/icon/icon_guanyuwomen.png" class="tit-icon"></img>
	    	</cell>
	    </div>

	    <div class="my-ad">
	    	<img src="../../../static/images/my-ad.png">
	    	<div class="foot-tip">如有疑问，请联系客服400-16988-03</div>
	    </div>
    </div>
	</div>
</template>

<script>
	import { Grid, GridItem, Blur, XImg, Flexbox, FlexboxItem, Card, Cell } from 'vux'
	export default {
		components: {
			Grid,
			GridItem,
			Blur,
			XImg,
			Flexbox,
			FlexboxItem,
			Card,
			Cell
		},
		data () {
	    return {
	      bgimg: './static/images/my-bg.png',
	      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
	      defaultLogo: './static/images/default-img.png'
	    }
	  }
	} 
</script>

<style lang="scss" scoped>
  .center-logo {
	  text-align: center;
	  padding-top: 0.48rem;
	  @include sc(0.32rem,$white-color)
	  img {
		  @include wh(1.6rem,1.6rem);
		  @include borderRadius(50%);
		  @include border(2px,solid,rgba(225,225,225,.7))
		}
		.username{
			margin-top: 0.32rem;
			letter-spacing: 0.026667rem;
		}
	}
	.ximg-error{
  	@include default-bg(2.08rem);
  }
  .flex-view{
  	width: 9.2rem;
		padding: 0.333333rem;
		margin: -0.8rem auto 0.0rem;
		background-color: $white-color;
		text-align: center;
		@include borderRadius(0.133333rem)
		img{
			width: 0.48rem;
			height: 0.4rem;
		}	
		span{
			@include sc(0.4rem,$tit-color);
			margin-left: 0.32rem;
		}
		img,span{
			vertical-align: middle;
		}
		.grid-flexbox{
			text-align: center;
		}
  }
  .weui-grid:after{
  	border-bottom: none !important;
  }
  .weui-grid:last-child:before{
  	border-right: none !important;
  }

  .order-view{
  	width: 100%;
  	margin-top: 0.266667rem;
  	.card-header{
  		height: 1.2rem;
  		@include border-bt;
  		.vux-cell-bd{
  			@include sc(0.426667rem,$tit-color)
  		}
  		.weui-cell__ft{
  			@include sc(0.373333rem,$b3)
  		}
  	}
  	.card-flex {
		  display: flex;
			span {
			  color: #f74c31;
			}
			.card-item{
				flex: 1;
				text-align: center;
				img{
					width: 22px;
				}
				.card-item-txt{
					@include sc(0.32rem,$tit-color);
					margin-top: 0.213333rem;

				}
			}
		}
		.card-content {
		  padding: 0.4rem 0;
		}
  }

  .tit-icon{
		@include wh(15px,16px);
		margin-right: 0.266667rem;
	}

  .cell-view{
  	margin-top: 0.266667rem;
  	background-color: $white-color;
  	@include sc(0.4rem,$tit-color);
  	.cell-item{
  		height: 1.2rem;
  	}
  }
  .my-ad{
  	margin-top: 0.266667rem;
  	@include sc(0.32rem,$lightgray-color);
  	img{
  		width: 100%
  	}
  	.foot-tip{
  		margin-top: 0.666667rem;
  		text-align: center;
  	}
  }

  
</style>