import React from 'react';
import classNames from 'classnames';

var AppContainer = React.createClass({
	render() {
		var classes = classNames({
			'container': true
		});

		return (
			<div className={classes}>
				{this.props.children}
			</div>
		);
	}
});

export default AppContainer;