import React from 'react';

module.exports = function() {
  return React.createClass({
      render: function() {
          return (
              <div>{this.props.children}</div>
          );
      }
  });
}
