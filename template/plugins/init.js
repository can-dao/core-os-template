import Vue from 'vue';

//一些特殊情况可能会用到
//比如浏览器设置访客模式致使localStorage失效,需用cookie替代
//不用到可不用
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);


//全局混入
Vue.mixin({
  
});

