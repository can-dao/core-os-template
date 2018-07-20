const lib = []

// 自动匹配顺序
// 链接上的 key => 域名 => 端口

// 域名类 LIST 规则
// www.4008-197-197.com 仅用 4008-197-197.com
// 二级域名则全称 如 m.can-dao.com

// /*匹配链接上的key*/
// import skin1 from "text-loader!../static/css/skins/test/key.skin";
// lib.push({
//   type:"key",list:["b15ae13796ea20b4"],content:skin1
// })

// /*匹配域名*/
// import skin2 from "text-loader!../static/css/skins/test/localhost.skin";
// lib.push({
//   type:"host",list:["localhost","4008-197-197.com","m.can-dao.com"],content:skin2
// })

// /*匹配端口号 一般只在开发的时候使用*/
// import skin3 from "text-loader!../static/css/skins/test/106.skin";
// lib.push({
//   type:"port",list:["106",""/*空为80端口*/],content:skin3
// })

export default lib;