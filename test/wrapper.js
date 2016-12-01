import React from 'react';

module.exports = function() {
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
};
