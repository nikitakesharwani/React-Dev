import User from "./User";
import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react web series</h2>

        <User name={"Nikita"} location={"Jabalpur"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namaste react web series</h2>

//       <UserClass name={"Nikita"} location={"Jabalpur"} />
//     </div>
//   );
// };

export default About;

// Parent Constructor
// Parent Render

// First Child Constructor
// First Child Render

// Second Child Constructor
// Second Child Render

// <DOM is Updated- In Single Batch>

// First Child Component Did Mount
// Second Child Component Did Mount
// Parent Component Did Mount

//React does this to optimize the process
//DOM manipulation is a costly process.
//thats why batches are created and in first batch it call constructor and renders all the components
//then in batch 2 run componentDidMount

//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
