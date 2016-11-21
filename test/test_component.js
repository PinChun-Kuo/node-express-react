var React = require('react');
import ReactDOM from 'react-dom';

module.exports = function(DecoratedComponent, props) {
  return React.createClass({
    render: function() {
      return (
        <DecoratedComponent {...props} {...this.props} />
      );
    }
  });
};

// module.exports = function() {
//   return function(DecoratedComponent, props) {
//     return React.createClass({
//       render: function() {
//         return (
//           <DecoratedComponent ref='decorated' {...props} {...this.props} />
//         );
//       }
//     });
//   };
// };
