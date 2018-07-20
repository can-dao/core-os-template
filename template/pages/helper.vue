<template>
  <div>
    <p>{{'测试'|L}}</p>
    <p>{{'--测试--'|L}}</p>
    <p>{{'--测试--'|L('en')}}</p>

    <h1>LANG.js 示例</h1>
    <a href="javascript:void(0)" @click="toggleLang('zh')">ZH</a> | 
    <a href="javascript:void(0)" @click="toggleLang('en')">En</a> | 
    <a href="javascript:void(0)" @click="alertLang('测试')">在方法中使用语言</a>

    <h1>SERVER.js 示例</h1>
    <a href="javascript:void(0)" @click="testGet">get openCity</a> | 
    <a href="javascript:void(0)" @click="testGetWithData('menu')">get menu</a> | 
    <a href="javascript:void(0)" @click="testGetWithData('allStores')">get allStores</a>
    <br/>
    <a href="javascript:void(0)" @click="testSetCache">testSetCache</a> | 
    <a href="javascript:void(0)" @click="testGetCache">testGetCache</a> | 
    <a href="javascript:void(0)" @click="testCheckCache">testCheckCache</a> | 
    <a href="javascript:void(0)" @click="testCheckCache2">testCheckCache2</a>
  </div>
</template>

<script>
export default {
  data(){
    return {};
  },
  created(){
    
    //无域名需设置key
    this.server.setKey("b15ae13796ea20b4");

  },
  methods:{
    
    toggleLang(lang){
      this.LANG_change(lang);
    },

    alertLang(lang){
      alert(L(lang));
    },

    testGet(){
      this.server.get({name:"openCity"}).then(result=>{
        alert(JSON.stringify(result));
      });
    },

    testGetWithData(name){
      this.server.get({name,data:{
        sendType:1,storeId:7041
      }}).then(result=>{
        alert(JSON.stringify(result));
      });
    },


    testSetCache(){
      this.server.cache.set({cityName:"不知道什么市"}).then(result=>{
        alert(JSON.stringify(result));
      });
    },

    testGetCache(){
      this.server.cache.get('cityName').then(result=>{
        alert(JSON.stringify(result));
      });
    },

    testCheckCache(){
      this.server.cache.check('cityName').then(result=>{
        alert(JSON.stringify(result));
      });
    },

    testCheckCache2(){
      this.server.cache.check('cityName2').then(result=>{
        alert(JSON.stringify(result));
      });
    },

  }
}
</script>

<style>

</style>
