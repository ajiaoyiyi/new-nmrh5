<template>
	<div class="sub-main">
		<!--搜索框-->
		<div class="search-input-view">
			<flexbox :gutter="18" justify="space-between" align="center">
				<flexbox-item span="300">
					<div class="search-item">
						<x-icon type="ios-search-strong" size="20" class="icon-green"></x-icon>
						<input type="text" placeholder="文字" v-model="searchKey">
					</div>
				</flexbox-item>
				<flexbox-item>
					<div class="search-btn" @click="seachGuide">搜索</div>
					<!-- <div class="search-btn">取消</div> -->
				</flexbox-item>
			</flexbox>
		</div>
		<!--大家都在搜-->
		<div class="search-hot-view" v-show="hotlist">
			<h2 class="s-tit">大家都在搜</h2>
			<ul class="s-his-list">
				<li class="s-key" :span="2" v-for="item in hotlist"
				:key="item.advBackup">关键字1</li>
			</ul>
		</div>
		<!--搜索历史-->
		<div class="search-history-view">
			<div class="s-his-tit">
				<div class="s-tit">我搜索过的</div>
				<div class="s-clear">
					<img src="../../../static/images/icon/icon_delete.png" height="14" width="14">
				</div>
			</div>
			<ul class="s-his-list">
				<li>
					<p>历史搜索文字</p>
					<x-icon type="ios-close" class="cell-x-icon"></x-icon>
				</li>
				<li>
					<p>历史搜索文字</p>
					<x-icon type="ios-close" class="cell-x-icon"></x-icon>
				</li>
				<li>
					<p>历史搜索文字</p>
					<x-icon type="ios-close" class="cell-x-icon"></x-icon>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Flexbox, FlexboxItem} from 'vux'
	import { getCommonAdv } from '@/api'
	import Store from '@/store'
	console.log(Store);
  export default ({
	data(){
		return {
			hotlist:[],
			historylist:[],
			searchKey: '关键字'
		}
	},
	created(){
		this.getHotList();
	},
	methods: {
		getHotList(){
			var params = {"apGradeno":"search"}
			getCommonAdv(params).then(res => {
				if(res.adv_list.length>0){
					this.hotlist = res.adv_list  
				}
				this.hotlist = false
			})
		},
		//搜索事件
		seachGuide(){
			this.$router.push({
				path:'/searchResult',
				query:{
					searchKey:this.searchKey
				}
			});
		}
	},
	watch: {
		//观察historylist变化
		historylist:{
			handler:function(historylist){
				Store.setStore('historylist',historylist)
			},
			deep: true
		}
	},
	components:{
		Flexbox,
		FlexboxItem
	}
})
</script>

<style lang="scss" scoped>
  .search-input-view,.search-hot-view,.search-history-view{
  	width: 100%;
		background-color: $white-color;
  }
  .search-hot-view,.search-history-view{
		padding: 0.4rem 0.266667rem;
		.s-tit{
			@include sc(0.4rem,$tit-color);
			font-weight: bolder;
		}
  }
  .search-input-view{
		padding: 0.226667rem 0.4rem;
		@include border-bt;
		@include sc(0.426667rem,$lightgray-color);
		.search-item{
			width: 100%;
			height: 0.746667rem;
			line-height: 0.746667rem;
			background-color: $f5-color;
			@include borderRadius(0.373333rem);
			@include border-c($bc);
			padding: 0px 0.4rem;
			display: flex;
			align-items: center;
			.icon-green{
				fill: $sicon;
				margin-right: 0.08rem;
			}
			input{
				width: 5.5rem;
				background-color: $f5-color;
				@include sc(0.4rem,$tit-color);
			}
		}
		.search-btn{
			text-align: center;
		}
  }
	
	.search-hot-view{
		.s-his-list{
			display: flex;
			flex-wrap: wrap;
			padding-top: 0.133333rem;
		}
		.s-key{
			margin-top: 0.266667rem;
			margin-right: 0.266667rem;
			padding: 0.2rem 0.266667rem;
			background-color: $f0;
			@include sc(0.346667rem,$tit-color);
			text-align: center;
		}
	}
  
  .search-history-view{
  	margin-top: 0.266667rem;
  	.s-his-tit{
  		display: flex;
  		justify-content: space-between;
  		align-items: center;
  	}
  	li{
  			@include sc(0.373333rem, $hc-color);
  			padding-top: 0.4rem;
  			padding-bottom: 30px;
  			vertical-align: middle;
  			padding: 0.4rem 0;
  			display: flex;
	  		justify-content: space-between;
	  		align-items: center;
	  		@include border-bt;
	  		.cell-x-icon{
	  			fill: $d9c;
	  			@include wh(0.373333rem,0.373333rem)
	  		}
  		}
  		li:last-child{
				padding-bottom: 0.133333rem;
				border: none;
  		}
  }
</style>