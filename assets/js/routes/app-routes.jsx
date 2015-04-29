import React from 'react';
import Router from 'react-router';
import Master from '../layouts/master.jsx!';
import Home from '../layouts/home.jsx!';
import Login from '../routes/login.jsx!';

var {Route, DefaultRoute} = Router;

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
  	<Route name="login" handler={Login} />

  	<DefaultRoute handler={Home} />
  </Route>
);

export default AppRoutes;