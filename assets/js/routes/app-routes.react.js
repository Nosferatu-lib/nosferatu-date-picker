import React from 'react';
import Router from 'react-router';
import Master from '../layouts/master.react';
import Home from '../layouts/home.react';

var {Route, DefaultRoute} = Router;

var AppRoutes = (
  <Route name="root" path="/" handler={Master}>

  	<DefaultRoute handler={Home} />
  </Route>
);

export default AppRoutes;