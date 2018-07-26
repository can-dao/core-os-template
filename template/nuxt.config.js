module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '项目名称',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height' },
      { hid: 'description', name: 'description', content: 'coco' }
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      //{src:"https://cdn.bootcss.com/jquery/3.3.1/core.js"} //引入第三方JS
    ]
  },

  css:[
    './../../static/css/reset.css',
    './../../static/css/common.less',
    '~/static/css/reset.css',
    '~/static/css/common.less'
  ],

  transition: {
    name: 'fade'
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

      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1kB
          name: 'img/[name].[hash:7].[ext]'
        }
      });
      config.module.rules.push({
        test: /\.(ico)$/,
        loader: 'file-loader',
        query: {
          name: 'img/[name].[hash:7].[ext]'
        }
      });

      config.module.rules.push({
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1kB
          name: 'fonts/[name].[hash:7].[ext]'
        }
      });

      
      if (isClient) {
        config.devtool = 'eval-source-map'
      }
    },

    babel: {
      presets: ['es2015', 'stage-0']
      ,plugins:[
        'transform-runtime'
      ]
    },

    filenames:{
      css: 'common.[contenthash].css',
      manifest: 'manifest.[hash].js',
      vendor: 'common.[chunkhash].js',
      app: 'app.[chunkhash].js',
      chunk: '[name].[chunkhash].js'
    }

  },
  
  plugins: [
    {src:'~/plugins/init',ssr:false}, //os项目的初始化
    {src:'~/plugins/server',ssr:false}, //请求服务端接口方法
    {src:'~/plugins/lang',ssr:false}, //全局语言包初始化
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
        target: 'http://qc.can-dao.com:{{ port }}', // QC环境的地址 这里用的是标准版的
        //pathRewrite: { '^/' : '/' } //一般不用这个配置 除非有特定的接口
      }
    ]
  ]

  
  
}
