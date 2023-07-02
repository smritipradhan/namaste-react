/*
<div id = "parent">
    <div id = "child">
    <h1>hey</h1>
    <h1>Hello</h1>
    </div>
     <div id = "child2">
    <h1>hey 1</h1>
    <h1>Hello 1</h1>
    </div>
</div>
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hey "),
    React.createElement("h1", {}, "Hello "),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hey 1"),
    React.createElement("h1", {}, "Hello 1"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
