/*
* @Author: zhangbin
* @Date:   2018-08-28 23:39:00
* @Last Modified by:   zhangbin
* @Last Modified time: 2018-08-29 00:30:35
*/
import React from 'react';
export default class ComponentBody extends React.Component{
	componentWillMount() {
		console.log('ComponentBody - componentWillMount');
	}

	componentDidMount() {
		console.log('ComponentBody - componentDidMount');
	}

	render(){
		//注释
		/*
		1、return和render中间属于js，可以使用单行注释
		  return内部属于JSX，不可以使用单张注释，应该使用花括号包裹块注释
		2、表达式使用花括号
		3、花括号引用变量给某属性赋值时，应去掉单/双引号
		4、直接显示html内容需要进行unicode转码或使用dangerouslySetInnerHTML属性
		 */
		var userName = 'zhangsan';
		var boolInput = false;
		var html = 'hello&nbsp;world';
		var unicodeHtml = 'hello\u0020world';
		return (
			<div>
				<h2>页面的主体内容</h2>{/*1、JSX注释*/}
				<p>{userName == '' ? '用户还没有登录' : '欢迎您：' + userName}</p>{/*2、表达式使用花括号*/}
				<p><input type='button' value={userName} disabled={boolInput}/></p>{/*3、花括号引用变量给某属性赋值时，应去掉单引号*/}
				<p>{html}</p>
				<p>{unicodeHtml}</p>
				<p dangerouslySetInnerHTML={{__html : html}}></p>
			</div>
		);
	}
}