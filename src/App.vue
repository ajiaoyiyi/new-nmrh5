<template>
  <div>
    <transition name="fade">
      <router-view class="view"></router-view>
    </transition>
    <v-footer v-show="$route.meta.navShow"></v-footer>
  </div>
</template>

<script>
	import footer from '@/components/footer/footer'
	export default {
	  name: 'app',
	  components: {
	  	'v-footer': footer
	  }
	}
</script>

<style lang="scss" scoped>
	.view{
    transition: all 0.4s ease-in-out
  }
  .fade-enter-active, .fade-leave-active{
    opacity: 0.01
  }
  .fade-enter, .fade-leave{
    transition: opacity .4s	
  }
</style>

