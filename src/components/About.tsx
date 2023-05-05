import { useEffect, useState } from "react";
import React from "react";

// const About = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("component 'About' mounted");

//     return () => {
//       console.log("component 'About' unmounted");
//     };
//   });

//   return (
//     <>
//       <h3>About</h3>
//       <p>Value: {value} </p>
//       <button onClick={() => setValue(value + 1)}>Push</button>
//     </>
//   );
// };

type about = {
  value: number;
};

class About extends React.Component<{}, about> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount(): void {
    console.log("component 'About' mounted");
  }

  componentWillUnmount(): void {
    console.log("component 'About' will be unmounted");
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<about>, snapshot?: any): void {
      console.log(`component 'About' updated (${prevState.value} --> ${this.state.value})`)
  }

  render() {
    return (
      <>
        <h3>About</h3>
        <p>Value: {this.state.value} </p>
        <button
          onClick={() => {
            this.setState({ value: this.state.value + 1 });
          }}
        >
          Push
        </button>
      </>
    );
  }
}

export default About;
