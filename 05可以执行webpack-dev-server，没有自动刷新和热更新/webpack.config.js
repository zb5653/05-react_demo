/*
* @Author: Administrator
* @Date:   2018-08-21 23:59:56
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-23 00:54:51
*/
var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + '/src',
	mode: 'production',
	entry: "./js/index.js",
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: [
				path.resolve(__dirname, "/node_modules")
			],
			loader: 'babel-loader',
			query: {
				presets: [
					'react',
					'env'
				]
			},
		}]
	},
	performance: {
		hints:false   
	},
	devServer: {
        contentBase:'./',		//开发服务运行时的文件根目录
        host: 'localhost',      // 默认是localhost
        port: 8080,             // 端口
        open: true,             // 自动打开浏览器
		inline:true,
       // hot: true               // 开启热更新
    },
	output: {
		path: __dirname + "/src/",
		filename: "bundle.js"
	}
};