const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode : "development", // 开发模式
	entry : path.join(__dirname,'src','index.js'), // 入口文件
	output : {
		path : path.join(__dirname,'dist'), //输出路径
		filename : "varEvery.js", // 输出文件名称
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : path.join(__dirname,'src','index.html'), // 引入模板地址
			filename : 'index.html',
			scriptLoading: 'blocking'
		})
	],
	devServer : {
		port : 8065,
		static : path.join(__dirname,'src','dist'), // 热更新
	}
}