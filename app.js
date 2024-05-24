import React from "react";
import ReactDOM from "react-dom";

//using React.createElement-JS Object => Html Element(render)
const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
console.log(heading);

//using JSX=> Babel convert it to-React.createElement-JS Object => Html Element(render)
const jsxHeading = (
  <h1 id="heading" className="head">
    Hello World!
  </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" }, [
//       React.createElement("h1", {}, "Hey I am h1 tag"),
//       React.createElement("h2", {}, "Hi I am h2 tag"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "Hi I am h1 tag"),
//       React.createElement("h2", {}, "Hi I am h2 tag"),
//     ]),
//   ])
// );

{
  /* <div id="parent">
  <div id="child1">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div>; */
}
