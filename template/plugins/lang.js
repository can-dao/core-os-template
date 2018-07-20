import Vue from 'vue';

//引入多语言基础插件
import LangPlugin from '@/../../plugins/lang.js';

//引入语言包的库
import langLib from '@/lib/lang.js';

LangPlugin.set({
  langLib,
  //lang:'hk', //默认为 zh 特殊项目可更改 [zh,en,hk]
});

//默认为 zh 特殊项目可更改 [zh,en,hk]
//LangPlugin.set('lang','en');

//全局混入
Vue.mixin({
  ...LangPlugin.mixin
});

