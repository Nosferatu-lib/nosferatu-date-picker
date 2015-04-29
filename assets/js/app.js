import React from 'react';
import Router from 'react-router';
import AppRoutes from './routes/app-routes.jsx!';

// make react available to dev tool
if (!window.React) {
    window.React = React;
}

Router.create({
		routes: AppRoutes,
		scrollBehavior: Router.ScrollToTopBehavior
	}).run((Handler) => React.render(<Handler/>, document.body));