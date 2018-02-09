<template>
	<div class="sub-main">
		<group :gutter="0" class="sr-tit">
			<cell title="相关攻略" value="查看全部" link="guidelist" :is-link="true">
				<img slot="icon" src="../../../../static/images/icon/icon_guide_press.png" alt="">
			</cell>
		</group>
		<div class="sr-guide-list">
			<ul>
				<li v-for="item in guidelist" :key="item.article_id">
					<div class="sg-img imgbg">
						<img :src="item.article_image" alt="">
					</div>
					<div class="sr-guide-con">
						<div class="sg-tit">{{item.article_title}}</div>
						<div class="sg-author">
							<flexbox justify="space-between" align="center" :gutter="0">
						      <flexbox-item>
						      	<div class="sg-name">
						      		<div class="defimg">
						      			<img :src="item.admin_head_img" alt="">
						      		</div>
						      		<span>{{item.username}}</span>
						      	</div>
						      </flexbox-item>
						      <flexbox-item>
						      	<div class="sg-date">{{item.article_publish_time}}</div>
						      </flexbox-item>
						    </flexbox>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!--相关产品-->
		<group class="sr-tit">
			<cell title="相关产品" value="其他产品" link="foods" :is-link="true">
				<img slot="icon" src="../../../../static/images/icon/icon_xiangguanchanpin.png" alt="">
			</cell>
		</group>
		<div class="goods-list">
			<goodslist :goodslist="goodslist"></goodslist>
		</div>
	</div> 
</template>

<script>
	import { Group, Cell, Flexbox, FlexboxItem, dateFormat } from 'vux'
	import goodslist from '../../../components/common/goodslist'
	import { getSearchGuides, getSearchGoods } from '@/api'
    export default ({
    data(){
			return {
				guidelist: [],
				goodslist: []
			}
		},
		created(){
			this.getSearchGuides();
			this.getSearchGoods();
		},
		methods:{
			//根据搜索key查询相关攻略列表
			getSearchGuides(){
				let params = {
					searchKey:this.$route.params.searchKey
				}
				getSearchGuides(params).then( res => {
					this.guidelist = res.data
					for (var i = 0; i < this.guidelist.length; i++) {
						this.guidelist[i].article_publish_time = dateFormat(this.guidelist[i].article_publish_time,'YYYY-MM-DD')
					}
				}).catch(e => {
			  	console.log(e);
			  });
			},
			//根据搜索key查询相关商品
			getSearchGoods(){
				let params = {
					searchKey: '',
					pnum: 1
				}
				getSearchGoods(params).then( res => {
					this.goodslist = res.data
				}).catch(e => {
			  	console.log(e);
			  });
			}
		},
		components:{
			Group,
			Cell,
			Flexbox, 
			FlexboxItem,
			goodslist
		}
	})
</script>

<style lang="scss" scoped>
	.sr-tit{
		img{
			@include wh(0.533333rem,0.533333rem);
			margin-right: 0.266667rem;
			vertical-align: middle;
		}
	}
	.sr-guide-list{
		.imgbg{
	  	@include default-bg(1.813333rem);
	  }
	  li{
	  	display: flex;
	  	padding: 0.266667rem;
	  	background-color: $fc;
	  	@include border-bt();
			.sg-img{
				@include wh(4.0rem,1.813333rem);
				flex: 1;
				margin-right: 0.4rem;
			}
			.sr-guide-con{
				display: flex;
				align-content: space-between;
				height: 1.813333rem;
				width: 5.066667rem;	
				flex-wrap: wrap;
				.sg-tit{
					width: 100%;
					@include sc(0.373333rem,$tit-color);
					line-height: 1.5;
					@include line-clamp(2);
				}
				.sg-author{
					width: 100%;
					flex: 1;
					.sg-name{
						@include sc(0.32rem,$tit-color)
						text-align: left;
						display: flex;
						align-items: center;
						.defimg{
							margin-right: 0.266667rem;
							@include wh(0.533333rem,0.533333rem);
							@include borderRadius(50%);
							display: inline-block;
    					overflow: hidden;
						}
					}
					.sg-date{
						@include sc(0.32rem,$lightgray-color);
						text-align: right;
					}
				}
			}
	  }
	  .goods-list{
	  	margin-top: 0.266667rem;
	  }
	}
</style>