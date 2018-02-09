<template>
	<div>
		<div class="search-view">
			<div class="search-bar" @click="goSearch">
				<x-icon type="ios-search-strong" size="26" class="icon-green"></x-icon>
				<span>想找的东西，可以再这里试试</span>
			</div>
		</div>
		<div class="guide-view" v-if="guidePrograms">
			<div class="guide-tit">
				<div class="gt-icon">
					<img src="../../../static/images/icon/icon_lanmu.png"
					/>
				</div>
				<span>栏目</span>
			</div>
			<grid :cols="2">
			  <grid-item v-for="(item, index) in guidePrograms" :key="index" link="/guidelist">
			    <div class="ximg-error">
			    	<x-img :src="item.gm_logo"></x-img>
			    </div>
			  </grid-item>
			</grid>
		</div>
		<div class="guide-view"  v-if="guideObgs">
			<div class="guide-tit">
				<div class="gt-icon">
					<img src="../../../static/images/icon/icon_duixiang.png"
					/>
				</div>
				<span>对象</span>
			</div>
			<grid :cols="2">
			  <grid-item v-for="(item, index) in guideObgs" :key="index" link="">
			    <div class="ximg-error">
			    	<x-img :src="item.gm_background_img"></x-img>
			    </div>
			  </grid-item>
			</grid>
		</div>
	</div>
</template>

<script>
	import { Grid, GridItem, XImg } from 'vux'
	import { getguidePrograms } from '@/api'
	export default {
		data() {
			return{
				guidePrograms: [],   //栏目列表
				guideObgs: []   //对象列表
			}
		},
		created(){
			this.getGuidePrograms();
		},
		methods: {
			getGuidePrograms(){
				getguidePrograms().then(res => {
					this.guidePrograms = res.oAclass.length == 0 ? false : res.oAclass
					this.guideObgs = res.giftStreet.length == 0 ? false : res.giftStreet
				}).catch(e => {})
			},
			//跳转搜索页面
			goSearch(){
				this.$router.push('search');
			}
		},
		components:{
			Grid,
			GridItem,
			XImg,
		}
	}

</script>

<style lang="scss" scoped>
	.search-view{
		padding: 0.4rem 0;
		.search-bar{
			@include wh(9.466667rem,1.066667rem);
			@include font(0.4rem,1.066667rem);
			@include borderRadius(0.533333rem);
			color: $defaulttxt-color;
			background-color: $white-color;
			margin: 0 auto;
			padding-left: 0.533333rem;
			.icon-green{
				fill: $sicon;
				vertical-align: middle;
				margin-right: 0.08rem;
				margin-top: -0.08rem;
			}
		}
	}  
	
	.guide-view{
		color: $tit-color;
		background-color: $white-color;
		margin-bottom: 0.266667rem;
		.guide-tit{
			@include wh(9.466667rem,1.2rem);
			margin: 0 auto;
			display: flex;
			align-items: center; 
			.gt-icon{
				@include wh(0.426667rem,0.426667rem);
				margin-right:0.266667rem;
				img{
					width: 100%;
					display: inline-block;
				}
			}
			span{
				font-size: 0.426667rem;
			}
		}
		x-img{
			height: 2.053333rem;
		}
	}
  .ximg-error{
  	@include default-bg(2.08rem);
  }
	.weui-grid{
		padding: 1px !important;
	}
	.vux-x-img{
		max-width: 101% !important;
	}
</style>
