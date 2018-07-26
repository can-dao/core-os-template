const lib = []

// 自动匹配顺序
// 链接上的 key => 域名 => 端口

// 域名类 LIST 规则
// www.4008-197-197.com 仅用 4008-197-197.com
// 二级域名则全称 如 m.can-dao.com

// /*匹配链接上的key*/
// lib.push({
//   type:"key",list:["b15ae13796ea20b4"],content:require("text-loader!../static/css/skins/test/key.skin"),
// 			//favicos:require("~/static/favicon1.ico") //全部都是 favicon1.ico
// 			/* 针对不同 key */
// 			// favicos:{
// 			// 	"b15ae13796ea20b4":require("~/static/favicon1.ico"),
// 			// 	"123456":require("~/static/favicon2.ico")
// 			// }
// })

// /*匹配域名*/
// lib.push({
//   type:"host",list:["localhost","4008-197-197.com","m.can-dao.com"],content:require("text-loader!../static/css/skins/test/localhost.skin")
// })

// /*匹配端口号 一般只在开发的时候使用*/
// lib.push({
//   type:"port",list:["106",""/*空为80端口*/],content:require("text-loader!../static/css/skins/test/106.skin")
// })

export default lib;