import React from 'react';

export default function wrapper() {
  return React.createClass({
    propTypes: {
      children: React.PropTypes.element.isRequired,
    },
    render: function() {
      return (
        <div>{this.props.children}</div>
      );
    }
  });
}
