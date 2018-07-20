<template>
  <div>
    
  <div id="header">
    <div class="base-wrap">
      <h1>layout header</h1>
        
      <p><nuxt-link to="/index">Index</nuxt-link></p>
      <p><nuxt-link to="/userCenter">UserCenter</nuxt-link></p>
      <p><nuxt-link to="/booking">Booking</nuxt-link></p>
    </div>
  </div>
  <div id="main">

    <no-ssr>
    <nuxt :keepAlive="true" keep-alive/>
    </no-ssr>

  </div>
  <div id="footer">
    <div class="base-wrap">
      <h2>layout footer</h2>
    </div>
  </div>


  </div>
</template>

<style>
#main{background-color:#bbb;}
</style>
