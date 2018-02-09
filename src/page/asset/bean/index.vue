<template>
    <div class="img-page">
    	<div class="imgng" v-for="(item, index) in imgList">
    		<img :src="item" alt="">
    	</div>
    </div>
</template>

<script>
	const beanImgs = [
		'static/images/asset/bean_01.jpg',
		'static/images/asset/bean_02.jpg',
		'static/images/asset/bean_03.jpg'
	];
  export default ({
		data(){
			return {
				imgList:beanImgs
			}
		},
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