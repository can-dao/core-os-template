import Vue from 'vue';

//引入多语言基础插件
import LangPlugs from '@/../../plugs/lang.js';

//引入语言包的库
import langLib from '@/lib/lang.js';

LangPlugs.set({
  langLib,
  //lang:'hk', //默认为 zh 特殊项目可更改 [zh,en,hk]
});

//默认为 zh 特殊项目可更改 [zh,en,hk]
//LangPlugs.set('lang','en');

//全局混入
Vue.mixin({
  ...LangPlugs.mixin
});

