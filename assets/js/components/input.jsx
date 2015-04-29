import React from 'react';
import classNames from 'classnames';

var Input = React.createClass({

	propTypes: {
		id: React.PropTypes.string
	},

	render() {
		var classesInput = classNames({
			'input': true
		});
		var inputProps = {
			id: this.props.id
		};
		var inputElement = <input {...inputProps} ref = 'input'
								placeholder = {this.props.placeholder}
								className = {classesInput} />;

		var label = <label htmlFor = {this.props.id}></label>

		var classesWrapper = classNames({
			'input-box': true
		});

		return (
			<div className = {classesWrapper}>
				{label}
				{inputElement}
			</div>
		);
	}
});

export default Input;