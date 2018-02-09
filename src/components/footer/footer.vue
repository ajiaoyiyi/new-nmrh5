<template>
    <footer id="footer-nav">
        <tabbar class="footer-tabbar">
            <tabbar-item v-for="(item, index) in tabItems" :key="index" :selected=" item.link == path ? true : false" class="footer-item" :link="item.link" @on-item-click="onItemClick">
                <img slot="icon" :src="item.icon">
                <img slot="icon-active" :src="item.icon_active">
                <span slot="label">{{item.tabname}}</span>
            </tabbar-item>
        </tabbar>
    </footer>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux';
const tabItems = [
                {
                    'tabname':'首页',
                    'selected':true, 
                    'link':'/index', 
                    'icon':'static/images/icon/icon_home_normal.png', 
                    'icon_active':'static/images/icon/icon_home_press.png'
                },
                {
                    'tabname':'攻略',
                    'selected':false, 
                    'link':'/guide', 
                    'icon':'static/images/icon/icon_guide_normal.png', 
                    'icon_active':'static/images/icon/icon_guide_press.png'
                },
                {
                    'tabname':'我的', 
                    'selected':false, 
                    'link':'/my', 
                    'icon':'static/images/icon/icon_my_normal.png', 
                    'icon_active':'static/images/icon/icon_my_press.png'
                }
            ]
export default {
    components: {
        Tabbar,
        TabbarItem
    },
    data() {
        return {
            tabItems: tabItems,
            choseIndex: 0,
            path: this.$route.path
        }
    },
     methods:{
        onItemClick:function(index){
            this.choseIndex = index;
        },
    }
}

</script>
<style lang="scss">
#footer-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 0.013333rem solid $lightgray-color;
    background-color: $white-color;
    align-items: center;
    .footer-tabbar {
        text-align: center;
        background-color: $white-color;
        .footer-item {
            font-size: 0.266667rem;
            color: $sub-color;
            background-color: $white-color;
            padding: 0.16rem 0 0;
            img {
                width: auto;
                height: 86%;
            }
        }
    }
}

.weui-bar__item_on {
    span {
        color: $green-color
    }
}

</style>
