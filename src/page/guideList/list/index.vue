<!--
	全部攻略列表
-->
<template>
	<div class="sub-main">
		<guidelist :guidelist="guides"></guidelist>
	</div>
</template>

<script>
	import guidelist from '@/components/common/guidelist'
	import { getAllGuides } from '@/api'
	import { dateFormat } from 'vux'

	export default({
		data(){
			return{
				guides:[]
			}
		},
		created(){
			this.getAllGuides()
		},
		methods:{
			getAllGuides(){
				let params = {
					'searchKey':'',
					'pnum':1
				}
				getAllGuides(params).then(res => {
					this.guides = res.data
					for (var i = 0; i < this.guides.length; i++) {
						this.guides[i].article_publish_time = dateFormat(this.guides[i].article_publish_time,'YYYY-MM-DD')
					}
				}).catch(e => {})
			}
		},
		components:{
			guidelist
		}
	})
</script>

<style lang="scss" scoped>
    
</style>