var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header.js';
import ComponentBody from './components/body';//1、可以省略.js
import ComponentFooter from './components/footer.js';
class Index extends React.Component {
	render() {
		
		var component;
		if ('用户已登录') {
			component = <ComponentHeader/>
		} else {
			component = <ComponentHeader/>
		}
		 
		return (
			<div>
				{component}
				<ComponentBody/>
				<ComponentFooter/>
			</div>
		);
	}
}

ReactDOM.render(
	<Index/>,
	document.getElementById('example')
);