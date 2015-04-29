import React from 'react';
import classNames from 'classnames';

var AppHeader = React.createClass({
	render() {
		var classes = classNames({
			'app-header': true,
			'sticky': true
		});

		return (
			<div className={classes}>App Header</div>
		);
	}
});

export default AppHeader;