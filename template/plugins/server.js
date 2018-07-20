import Vue from 'vue';
import Axios from 'axios'

//引入多语言基础插件
import ServerPlugin from '@/../../plugins/server.js';
//引入语言包的库
import serverLib from '@/lib/server.js';

// Vue.prototype.axios = axios.create({
//   timeout: 3000
// });

ServerPlugin.set({
	Axios,
	serverLib,
	loading(status){
		if(status){
			$nuxt.$loading.start()
		}else{
			setTimeout(() => $nuxt.$loading.finish(), 500);
		}
	},
	//key:"b15ae13796ea20b4" //如果是标准版,则需要设置该项
});

//全局混入
Vue.mixin({
  ...ServerPlugin.mixin
});

