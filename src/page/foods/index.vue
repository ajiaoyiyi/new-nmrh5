<!--全部商品-->
<template>
	<div class="sub-main">
		<div class="tab-view">
      <tab v-model="chose" :style="barWidth" defaultColor="#333333" active-color="#00A653" bar-active-color="#00A653" :line-width="2">
        <tab-item :selected="chose === index" v-for="(item, index) in typelist" :key="index" @click="chose = chose">{{item.typeName}}</tab-item>
      </tab>
    </div>
    <swiper v-model="chose" height="800px" :show-dots="false">
      <swiper-item v-for="(item, index) in typelist" :key="index">
        <goodslist :goodslist="goodslist"></goodslist>
      </swiper-item>
    </swiper>
	</div>
</template>

<script>
	import { Tab, TabItem, Swiper, SwiperItem, Sticky } from 'vux'
	import goodslist from '@/components/common/goodslist'
	import { getGoodsType, getGoodsList } from '@/api'
    export default ({
		components:{
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			goodslist,
			Sticky
		},
		data(){
			return {
				typelist: [],
				goodslist: [],
				chose:0,
				barWidth: '',
				curHeight: '',
				index: 0
			}
		},
		mounted () {
	    this.$nextTick(() => {
	    })
		},
		created () {
			this.getGoodsType()
			this.getGoodsList()
		},
		methods:{
			//获取分类列表
			getGoodsType(){
				getGoodsType().then(res => {
						this.typelist = res.type_list
						let index = res.type_list.length
						this.barWidth = {
							width:(index + 1) * 80 + 'px'
						}
				}).catch(e => {})
			},
			//获取商品列表
			getGoodsList(){
				let params = {
					typeId: '',
					pnum: 1
				}
				getGoodsList(params).then(res => {
					this.goodslist = res.data;
				}).catch(e => {});
			}
			
		}
	})
</script>

<style lang="scss" scoped>
  .tab-view{
  	width: 100%;
  	overflow:scroll;
  	-webkit-overflow-scrolling:touch;
  }
</style>