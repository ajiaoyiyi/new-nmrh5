/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = ''; 
let routerMode = 'hash';
let imgBaseUrl;

if (process.env.NODE_ENV == 'development') {  //开发环境
  baseUrl = 'https://m.nongmuren.com/interface';
  // baseUrl = 'http://192.168.6.12:7740/interface';
  imgBaseUrl = 'https://m.nongmuren.com';

}else if(process.env.NODE_ENV == 'production'){  //线上环境
	baseUrl = 'https://m.nongmuren.com/interface';
	// baseUrl = 'https://www.nongmuren.com/V453/interface';
  imgBaseUrl = 'https://www.nongmuren.com';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl
}