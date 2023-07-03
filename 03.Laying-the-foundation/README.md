## Laying the Foundation

### Episode 3 - Part 1 - Laying the Foundation

npm scripts (Standard ):-

"scripts": {
"test": "jest",
"start": "parcel index.html",
"build": "parcel build index.html"
},

npm run start // npm start
npm run build //npm build wont work

### Episode 3 - Part 2 - Laying the Foundation

const heading = React.createElement("h1", {}, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

heading is a React Element.Its just an object.
Replace everything inside the root.

```sh
<body>
    <div id="root">Not Rendered</div>
    <script src="./App.js" type="module"></script>
  </body>
```

If there is a problem then Not Rendered will be displayed.

### Episode 3 - Part 3 - Laying the Foundation

```sh
const heading = React.createElement("h1", {}, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

-This is very hard to read. The facebook developers created JSX.
-JSX and React are different and React can be written without JSX also.JSX makes our lives easier.
-JSX is not HTML in JAvaScript. JSX is HTML like/XML like language.

```sh
const root = ReactDOM.createRoot(document.getElementById("root"));
const headingJSX = <h1>Hello this is JSX Code .</h1>;
root.render(headingJSX);
```

const headingJSX = <h1>Hello this is JSX Code .</h1>; -- it is not the valid JavaScript ,jsengine wont understand.
This code is transpiled(converted into the code that the browsetrs can understand) before going to the JSEngine.(Done by Parcel).
This is not exactly done by the Parcel,this is given by parcel to Babel(again a package).

JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
WHo is converting this code ? Babel

### Episode 3 - Part 4 - Laying the Foundation

React Components
1.Class Based Components - Old way of writing code
2.Functional Components - New

Functional Components - Just a normal JavaScript Function which returns JSX Code.
const fn = () => ;
const fn = () => {return()} ;

```sh
import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return <h1>Namaste React Heading Functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

What is Component Composition ?

```sh

const Title = () => {
  return <h1>Namaste</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>Namaste React Heading Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

Componnet inside a component is Component Composition

### Episode 3 - Part 5 - Laying the Foundation

```sh
const Title = function(){
return(<h1>Hey</h1>)
}
```

Inside {} we can write any javaScript code inside JSX.

The data is malicious data ,JSX takes care of it and it does sanitisation.It will prevent cross side scripting attacks for you.

```sh
const malicious = 1000; //api.getData()
const HeadingComponent = () => {
  return (
    <div>
      {malicious}
      <h1>Namaste React Heading Functional Component</h1>
    </div>
  );
};
```

Calling as a function

```sh
const Title = () => {
  return <h1>Namaste</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <h1>Namaste React Heading Functional Component</h1>
    </div>
  );
};
```

Having two elements a root - use React Fragments.React fragment is the parent.React fragment is act as empty tag.

```sh
const Title = () => {
  return <h1>Namaste</h1>;
};

const HeadingComponent = () => {
  return (
    <>
      <div>
        {Title()}
        <h1>Namaste React Heading Functional Component</h1>
      </div>
      <div>dml</div>
    </>
  );
};


```

Can we have multiple root ?
Can we have fragment inside a fragment ?
