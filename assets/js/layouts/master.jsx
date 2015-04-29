import React from 'react';
import Router from 'react-router';
import AppContainer from '../layouts/app-container.jsx!';
import AppHeader from '../layouts/app-header.jsx!';

var RouteHandler = Router.RouteHandler;

var Master = React.createClass({
	render() {
		return (
			<AppContainer>
				<RouteHandler />
			</AppContainer>
		);
	}
});

export default Master;