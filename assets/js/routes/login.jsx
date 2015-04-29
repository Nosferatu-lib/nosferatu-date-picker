import React from 'react';
import classNames from 'classnames';
import Input from '../components/input.jsx!';

var Login = React.createClass({
	render() {
		var classes = classNames({
			'box form--login': true
		});

		return (
			<form className = {classes}>
				<h1 className = 'gamma'>Please, login in...</h1>
				<Input id = {'username'} />
				<Input id = {'password'} />
			</form>
		);
	}
});

export default Login;