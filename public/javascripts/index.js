import React from 'react';
import ReactDOM from 'react-dom';

class dummy extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <dummy />,
  document.getElementById('root')
);
