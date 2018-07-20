//多项目共用一套程序的皮肤解决方案
import SkinPlugin from '@/../../plugins/skin.js';
import skinLib from '@/lib/skin.js';
SkinPlugin.set({skinLib /*,mulit:false*//*三种只匹配一种*/ });
//SkinPlugin.set({skinLib,auto:false}); //不自动匹配
//SkinPlugin.load("localhost","4008-197-197.com"); //手动设置

import Vue from 'vue';

//一些特殊情况可能会用到
//比如浏览器设置访客模式致使localStorage失效,需用cookie替代
//不用到可不用
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);

//全局混入
Vue.mixin({
  
});

