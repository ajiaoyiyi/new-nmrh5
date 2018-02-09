import fetch from '@/config/fetch'

/**
 * 获取广告位接口
 * @param  {
 *  apGradeno:'index_adv'  首页广告banner
 *  apGradeno:'search'   搜索框热搜
 *  apGradeno:'category + id'   商品分类
 * } 
 * @return {
 *  advtype:连接方式(内容为1,商品为2,店铺为3,0表示文字)
 *  advcontent: 广告链接（文字不需要链接）
 * }
 *  
 */
export const getCommonAdv = params => fetch.get('/common/goAdv.action', { params })


/**
 * 获取首页今日推荐文章列表
 * @param  {null}
 * @return {object}
 */
export const getIndexNews = params => fetch.get('/newOa/oaIndex.action', { params })


/**
 * 获取攻略文章详情
 * @param  {
 *  article_id(true):文章ID,
 *  member_id(false):用户id,
 *  isUp(false):下一篇传1,否则不传或者传0)
 * }
 * @return {object}
 */
export const getguideDetail = params => fetch.get('/newOa/getArticleDet.action', { params })


/**
 * 获取攻略文章评论
 * @param  {
 *  article_id(true):文章ID,
 *  member_id(true):用户id
 * }
 * @return {object}
 */
export const getguideComments = params => fetch.get('/newOa/getComments.action', { params })


/**
 * 获取攻略栏目列表
 * @param  {null}
 * @return {object}
 */
export const getguidePrograms = params => fetch.get('/newOa/programePage.action', { params })


/**
 * 获取攻略栏目详情（如杂食记） 
 * @param  {
 *  class_id(true):分类id,
 *  pnum(false):分页码
 * }
 * @return {object} 攻略文章列表
 */
export const getSearchProgramGuides = params => fetch.get('/newOa/searchProgameLeads.action', { params })


/**
 * 获取全部攻略搜索结果 ==>攻略文章列表
 * 从搜索结果页面进入全部攻略搜索
 * @param  {
 *  searchKey(false):查询关键字
 *  pnum(false):分页码
 * }
 * @return {object}
 */
export const getAllGuides = params => fetch.get('/newOa/searchAllLeads.action', { params })


/**
 * 获取攻略搜索结果==>推荐攻略文章列表
 * 搜索页面进入
 * @param  {
 *  searchKey(false):查询关键字
 * }
 * @return {object} {只显示两条数据}
 */
export const getSearchGuides = params => fetch.get('/newOa/searchLeads.action', { params })


/**
 * 获取攻略搜索结果==>推荐产品列表
 * 搜索页面进入
 * @param  {
 *  searchKey(false):查询关键字
 *  pnum(false):分页码
 * }
 * @return {object}
 */
export const getSearchGoods = params => fetch.get('/newOa/getGoodsList.action', { params })


/**
 * 获取产品分类
 * @param  {[object]} 
 * params [null]
 * @return {[object]}
 */
export const getGoodsType = params => fetch.get('/goodsType/goType.action',{params})


/**
 * 获取分类下的商品列表
 * @params  {[
 *  typeId(true)：分类ID 
 *  pnum(true):分页参数
 * ]} 
 * @return {[object]}
 */
export const getGoodsList = params => fetch.get('/newOa/getGoodsByType.action',{params})
