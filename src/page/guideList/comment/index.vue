<!--攻略评论-->
<template>
	<div class="page-main">
		<comment :comments="guideComments"></comment>
		<load-more :show-loading="false" tip="THE END"></load-more>
		<comment-form></comment-form>
	</div>
</template>

<script>
	import comment from '@/components/common/comment'
	import commentForm from '@/components/common/commentForm'
	import { LoadMore } from 'vux'
	import { getguideComments } from '@/api'

	export default ({
		data(){
			return{
				guideComments:[]
			}
		},
		created(){
			this.getguideComments();
		},
		methods:{
			getguideComments(){
				let params = {
					'article_id':12,
					'member_id':''
				}
				getguideComments(params).then(res => {
					this.guideComments = res.data
				}).catch(e => {})
			}
		},
		components:{
			comment,
			LoadMore,
			commentForm
		}
	})
</script>

<style lang="scss" scoped>
    
</style>