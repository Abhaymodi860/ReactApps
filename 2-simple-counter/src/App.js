import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h2>Simple Counter</h2>
      <button onClick={increment} className="counter">
        +
      </button>
      <button onClick={decrement} className="counter">
        -
      </button>
      <h3>{count}</h3>
    </div>
  );
};

export default App;

// By using Classes
// import React, { Component } from "react";
// import "./App.css";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h2>Simple Counter</h2>
//         <button onClick={this.increment} className="counter">
//           +
//         </button>
//         <button onClick={this.decrement} className="counter">
//           -
//         </button>
//         <h3>{this.state.count}</h3>
//       </div>
//     );
//   }
// }
