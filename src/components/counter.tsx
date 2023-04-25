import * as React from "react";
import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>count is {count}</p>
//       <button onClick={() => setCount((count) => count + 1)}>++</button>
//       <button onClick={() => setCount((count) => (count > 0 ? count - 1 : count))}>--</button>
//     </div>
//   );
// };

type counter = {
  count: number
}

class Counter extends React.Component<{}, counter> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>count is {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          ++
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          --
        </button>
      </div>
    );
  }
}

export default Counter;
