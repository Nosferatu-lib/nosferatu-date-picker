import React from 'react';
import Router from 'react-router';
import AppContainer from '../layouts/app-container.react';
import AppHeader from '../layouts/app-header.react';

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