module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '网站名称',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height' },
      { hid: 'description', name: 'description', content: 'coco' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      //{src:"https://cdn.bootcss.com/jquery/3.3.1/core.js"}
    ]
  },

  parser: 'babel-eslint',

  /*
  ** Customize the progress bar color
  */
  loading: {
	  color: '#0093dd', //顶部的加载条 默认餐道蓝
	  height: '2px'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    babel: {
      presets: ['es2015', 'stage-0']
      ,plugins:[
        'transform-runtime'
      ]
    }

  },
  
  plugins: [
    {src:'~/plugins/init',ssr:false}, //os项目的初始化
    {src:'~/plugins/server',ssr:false}, //请求服务端接口方法
    {src:'~/plugins/lang',ssr:false}, //全局语言包初始化
    {src:'~/plugins/skin',ssr:false}, //同一项目下的皮肤解决方案 待加
  ],

  router: {
    mode: 'hash' //默认是HTML5路由,由于兼容性问题,我们统一使用传统hash
  },

  modules:[
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/*',
      { 
        target: 'http://qc.can-dao.com:106', // QC环境的地址 这里用的是标准版的
        //pathRewrite: { '^/' : '/' } //一般不用这个配置 除非有特定的接口
      }
    ]
  ]

  
  
}