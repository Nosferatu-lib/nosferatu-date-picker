import React from 'react';

let Button = React.createClass({
  render: function() {
    return (
      <div className="button">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

export default function() {
	React.render(<Button />, document.body);
};