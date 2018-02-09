<template>
  <div>
  <transition name="fade">
    <router-view class="child-view"></router-view>
  </transition>
  <v-footer v-show="$route.meta.navShow"></v-footer>
  </div>
</template>

<script>
	import footer from '@/components/footer/footer'
  export default {
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    },
    components: {
	  	'v-footer': footer
	  }
  }
</script>

<style lang="scss">
  .child-view {
	  position: absolute;
	  left: 0;
	  top: 0;
	  width:100%;
	  transition: all .8s ease-in-out;
  }
  .fade-enter-active, &.fade-leave-active{
    opacity: 0.01
  }
  .fade-enter, &.fade-leave{
    transition: opacity .4s
  }
  // .slide-left-enter, .slide-right-leave-active {
  //   opacity: 0;
  //   -webkit-transform: translate(100%, 0);
  //   transform: translate(100%, 0);
  // }
  // .slide-left-leave-active, .slide-right-enter {
  //   opacity: 0;
  //   -webkit-transform: translate(-100%, 0);
  //   transform: translate(-100%, 0);
  // }
</style>