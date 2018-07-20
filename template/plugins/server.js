import Vue from 'vue';
import Axios from 'axios'

//引入多语言基础插件
import ServerPlugs from '@/../../plugs/server.js';
//引入语言包的库
import serverLib from '@/lib/server.js';

// Vue.prototype.axios = axios.create({
//   timeout: 3000
// });

ServerPlugs.set({
	Vue,
	Axios,
	serverLib
	,loading(status){
		
		
		if(status){
			$nuxt.$loading.start()
		}else{
			setTimeout(() => $nuxt.$loading.finish(), 500);
		}
	}
});

//全局混入
Vue.mixin({
  ...ServerPlugs.mixin
});

