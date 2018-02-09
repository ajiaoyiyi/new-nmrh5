<template>
	<div>
			<div class="slide-wrap">
		    <slide ref="slide" :length="homelist.length" :autoPlay="isAutoPlay" :loop="isLoop" :showDot="isShowDot" :interval="interval" :threshold="threshold" :speed="speed">
          <div v-for="(item,index) in homelist" :key="index">
	          <a :href="item.advContent" class="imgbg">
	            <img class="needsclick" :src="item.advTitle" alt="">
	          </a>
		      </div>
        </slide>
		  </div>
		<div class="home-main">
			<!--如果推文为空的时候，显示广告图-->
			<div v-if="!newslist">
				<a href="" class="imgbg">
					<img :src="advImg" class="index-adv">	
				</a>
			</div>
			<div v-else>
			 	<div class="home-tip">
			 		<img src="../../../static/images/icon/icon_hot.png"> 今日必读
			 	</div>
			 	<guidelist :guidelist="newslist"></guidelist>
			 	<div class="endline">精彩已到底，明天再继续</div>
		 	</div>
		</div>
 	</div>

</template>

<script>
	import guidelist from '@/components/common/guidelist'
	import { getCommonAdv, getIndexNews } from '@/api'
	import slide from '@/components/pageRender/slideRender'
	import { dateFormat } from 'vux'

	export default {
		data(){
			return {
				homelist: [],
				newslist: [],
        isAutoPlay: true,
        isLoop: true,
        isShowDot: true,
        speed: 400,
        threshold: 0.3,
        interval: 4000,
        advImg: 'static/images/img_xinniankuaile.jpg'
			}
		},
		created() {
      this.getIndexBanner();    
	    this.getIndexNews()
	  },
  	methods: {
  		getIndexBanner() {
  			let params = {apGradeno:'index_adv'}
		    getCommonAdv(params).then(res => {
					this.homelist = res.adv_list
			  }).catch(e => {
			  	console.log(e);
			  });
			},
			getIndexNews() {
				getIndexNews().then(res => {
					this.newslist = res.data;
					if(this.newslist.length == 0){
						this.newslist = false
					}else{
						for (var i = 0; i < this.newslist.length; i++) {
							this.newslist[i].article_publish_time = dateFormat(this.newslist[i].article_publish_time,'YYYY-MM-DD')
						}
					}
				}).catch(e => {
			  	console.log(e);
			  });
			}
	  },
		components: {
			guidelist,
			slide
		}
	}
</script>

<style lang="scss" scoped>
	.slide-wrap{
		position: relative;
		height: 3.28rem;
		overflow: hidden;
		.imgbg{
			@include default-bg(3.28rem);
		}
	}
	.home-main{
		margin-top: 0.266667rem;
		margin-bottom: 1.3rem;
		.index-adv{
			width: 100%
		}
		.home-tip{
			height: 1.2rem;
			line-height: 1.2rem;
			font-size: 0.426667rem;
			color: $tit-color;
			background-color: $white-color;
			@include border-bt;
			img{
				width: 0.373333rem;
				height: 0.426667rem;
				margin-right: 0.133333rem;
				margin-left: 0.266667rem;
				vertical-align: margin-top;
			}
		}
		.endline{
			margin-top:0.666667rem;
			padding-bottom: 0.4rem;
			color: $lightgray-color;
			font-size: 0.32rem;
			text-align: center;
		}
	}
</style>