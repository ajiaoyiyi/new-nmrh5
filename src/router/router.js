//路由配置文件
import App from '../App'
const index = r => require.ensure([], () => r(require('../page/index')), 'index')
const guide = r => require.ensure([], () => r(require('../page/guide')), 'guide')
const my = r => require.ensure([], () => r(require('../page/my')), 'my')
const guidelist = r => require.ensure([], () => r(require('../page/guidelist/list')), 'guidelist')
const guidedetail = r => require.ensure([], () => r(require('../page/guidelist/detail')), 'guidedetail')
const guidecommont = r => require.ensure([], () => r(require('../page/guidelist/comment')), 'guidecomment')
const search = r => require.ensure([], () => r(require('../page/search')), 'search')
const searchResult = r => require.ensure([], () => r(require('../page/search/searchResult')), 'searchResult')
const foods = r => require.ensure([], () => r(require('../page/foods')), 'foods')
const account = r => require.ensure([], () => r(require('../page/asset/account')), 'account')
const bean = r => require.ensure([], () => r(require('../page/asset/bean')), 'bean')
export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [  //二级路由。对应App.vue
  	//地址为空时跳转home页面
    {
        path: '',
        redirect: '/index',
        meta: { navShow: true, cname: 'tab page' }
    },
    //首页
    {
        path: '/index',
        component: index,
        meta: { navShow: true, cname: 'tab page' }
    },
    //攻略tab
    {
        path: '/guide',
        component: guide,
        meta: { navShow: true, cname: 'tab page' }
    },

    //个人中心
    {
        path: '/my',
        component: my,
        meta: { 
            navShow: true, 
            cname: 'tab page',
            requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
        }
    },
    //攻略列表
    {
        path: '/guidelist',
        component: guidelist,
        meta: { navShow: false, cname: 'tab sub' }
    },
    //攻略详情
    {
        path: '/guidedetail/:guideid',
        component: guidedetail,
        name: 'guidedetail',
        meta: { navShow: false, cname: 'tab sub' }
    },
    //攻略评论
    {
        path: '/guidecommont',
        component: guidecommont,
        meta: { navShow: false, cname: 'tab sub' }
    },
    //搜索
    {
        path: '/search',
        component: search,
        meta: { navShow: false, cname: 'tab sub' }
    },
    //搜素结果页
    {
        path: '/searchResult',
        component: searchResult,
        meta: { navShow: false, cname: 'tab sub' }
    },
    //全部商品
    {
        path: '/foods',
        component: foods,
        meta: { navShow: false, cname: 'tab sub' }
    },
    //账户余额说明
    {
        path: '/account',
        component: account,
        meta: { navShow: false, cname: 'tab sub' }
    },
    //农豆说明
    {
        path: '/bean',
        component: bean,
        meta: { navShow: false, cname: 'tab sub' }
    }
  ]
}]
