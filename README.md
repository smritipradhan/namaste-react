# Namaste React

### Date - 2nd July 2023

### Episode 1 - Part 1: Inception

! -> for the boiler plate code

1.1 How do we put this heading inside root (div tag)

using root.appendChild(heading);

```sh
<body>
    <div id = "root"></div>
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World from JavaScript"
        const root = document.getElementById("root");
        root.appendChild(heading);
    </script>
</body>
```

1.2 How this browser understand createElement,innerHTML,getELementById ?
The browsers has this javascript injected in it which executes this Javascript code.The browser does not understand React .

Firstly we need to get React into out project . How do we do that ?

- Via CDN
  CDN are content delivery network.These are the websites where React has been hosted and we are just pulling React into our project.

```sh
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
  </body>

```

Now we have injected React into our project.
React is just JavaScript Library in JavaScript Language.

1 . <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script> -- React

2. <script
     crossorigin
     src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
   ></script> -- Usefull for DOM operations.Dom need to modify the DOM

---

### Episode 1 - Part 2: Inception

heading element created
root element is something we change in DOM, so we use ReactDOM

```sh
 <script>
        const heading = React.createElement("h1",{},"Hello World from React");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
      </script>

```

### Episode 1 - Part 3: Inception

here heading is an object , react element . the object are the props/children .

```sh
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React"
);
```

root.render(heading); - passing react element. take this object and create the h1 tag which the browser understands and put that inside the root.

### Episode 1 - Part 4: Inception

while rendering to dom it convert the object into the element that browser understands

```sh
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
```

The complexity of the code is too much and thats why JSX came into picture.

### Episode 1 - Part 5: Inception
