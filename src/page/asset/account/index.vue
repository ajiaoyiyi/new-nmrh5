<template>
    <div class="img-page">
    	<div class="imgng" v-for="(item, index) in imgList">
    		<img :src="item" alt="">
    	</div>
    </div>
</template>

<script>
	const accountImgs = [
		'static/images/asset/account_01.jpg',
		'static/images/asset/account_02.jpg',
		'static/images/asset/account_03.jpg',
		'static/images/asset/account_04.jpg'
	];
  export default ({
		data(){
			return {
				imgList:accountImgs
			}
		},
		components:{
			
		}
	})
</script>

<style lang="scss" scoped>
	.img-page{
		width: 100%;
		font-size: 0;
		.imgng{
			@include default-bg('auto');
			img{
				width: 100%
			}
		}
		
	}
</style>