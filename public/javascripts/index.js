import React from 'react';
import ReactDOM from 'react-dom';

import Dummy from './helloWorld';

// class Dummy extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, World!</h1>
//       </div>
//     );
//   }
// }

// function Dummy() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

ReactDOM.render(
  <Dummy />,
  document.getElementById('root')
);
