<!--
  slide 渲染
-->
<template>
  <div class="slider" ref="slide">
    <div class="slider-group" ref="group">
      <slot></slot>
      <!--slot插槽说明 
        外部引用slide时，slider包裹的DOM会被插入进这个slot插槽部分 
        eg:
         在相关页面需要引用slide组件的地方写下如下代码:
         <slide>
            <div>...这里写循环的内容与结构....</div>
         </slide>
      -->
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) in dots" :class="{active: currentPageIndex === index}"></span>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { addClass } from '@/utils/dom'

/** 
 * slide 基于better-scroll实现，监听了它的几个事件{snap,snapLoop，snapThreshold,snapSpeed }  
 * 注：better-scroll因为版本原因，以上几个事件会有出入，请参考官方文档
 **/
const COMPONENT_NAME = 'slide'
export default {
  name: COMPONENT_NAME,
  data() {
    return {
      dots: [], // 定义一个名为dots的数组，小圆点数组
      currentPageIndex: 0 // 当前的页码
    }
  },
  //定义可在外部控制的属性
  props: { 
    loop: { // 是否是循环轮播
      type: Boolean,
      default: true
    },
    autoPlay: { // 自动播放
      type: Boolean,
      default: true
    },
    interval: { // 自动轮播间隔
      type: Number,
      default: 4000
    },
    showDot: { //显示dot
      type: Boolean,
      default: true
    },
    threshold: { //表示可滚动到下一个的阈值
      type: Number,
      default: 0.3
    },
    speed: {  //滚动速度
      type: Number,
      default: 400
    },
    length: { // 列表的数据 
      type: Number, 
      default: 0 
    }
  },
  mounted() {
    this.update()
    //当调整浏览器窗口的大小时，发生 resize 事件。
    window.addEventListener('resize', () => {
      console.log('resize')
      if (!this.slide || !this.slide.enabled) {
        return
      }
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        if (this.slide.isInTransition) {
          this.onScrollEnd()
        } else {
          if (this.autoPlay) {
            this.play()
          }
        }
        this.refresh()
      }, 60)
    })
  }, 
  methods: {
    update() {
      // 初始化 better-scroll时机(*一般初始化better-scroll不成功,使用vue $nextTick方法 或者better-scroll推荐的settimeout延时20秒)
      if (this.slide) {
        this.slide.destroy()
      }
      this.$nextTick(() => {
        this.init()
      })
    },
    refresh() {
      this.setSlideWidth(true)
      this.slide.refresh()
    },
    init() {
      clearTimeout(this.timer)
      this.currentPageIndex = 0
      this.setSlideWidth()
      if (this.showDot) {
        this.initDots()
      }  
      this.initSlider()
      if (this.autoPlay) {
        this.play()
      }
    },
    // 因为是横向滚动，需计算slide 的宽度并且赋值
    setSlideWidth(isResize) {
      this.children = this.$refs.group.children // 获取整个列表有多少个元素
      let width = 0 // 总的宽度
      let slideWidth = this.$refs.slide.clientWidth // slide 父元素的宽度
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i] // 获取每个子元素
        addClass(child, 'slider-item') // 添加名为slider-item的类名

        child.style.width = slideWidth + 'px'
        width += slideWidth
      }
      if (this.loop && !isResize) { // 如果slide是需要循环的话，slide会在左右两侧copy两个子元素从而保证循环切换
        width += 2 * slideWidth
      }
      this.$refs.group.style.width = width + 'px'
    },
    //初始化dot
    initDots() {
      this.dots = new Array(this.children.length)
    },
    //初始化slide
    initSlider() { 
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true, // 横向滚动
        scrollY: false, // 不允许纵向滚动
        momentum: false, // 是否开启动量动画，关闭可以提升效率
        snap: {
          loop: this.loop,
          threshold: this.threshold,
          speed: this.speed
        },
        bounce: false,
        click: true
      })
      //滚动结束时触发
      this.slide.on('scrollEnd', this.onScrollEnd)
      //滑动结束时触发
      this.slide.on('touchEnd', () => {
        if (this.autoPlay) {
          this.play()
        }
      })
      //滚动开始之前触发
      this.slide.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearTimeout(this.timer)
        }
      })
    },
    onScrollEnd() {
      let pageIndex = this.slide.getCurrentPage().pageX
      this.currentPageIndex = pageIndex
      if (this.autoPlay) {
        this.play()
      }
    },
    play() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.slide.next()
      }, this.interval)
    }
  },
  watch: {
    // 监听数据的变化，调用refresh方法重新计算，保证滚动效果正常
    length() {
      this.update()
    }
  }
}

</script>
<style lang="scss" scoped>
.slider {
  min-height: 1px;
  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $fc;
      &.active {
        width: 20px;
        border-radius: 5px;
        background: $fc;
      }
    }
  }
}

</style>
