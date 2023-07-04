# Namaste React

### Date - 2nd July 2023

## Inception

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

Does the script tag order matter ? Yes

```sh
 <div id="root">Smriti</div>
```

root.render will replace

## Igniting our App

### Episode 2 - Part 1: Igniting our App

For pushing our code into production we need to : -
Bundling
Chunking
Code splitting
Image optimisation

Production ready app. when we do npx create-react-app it gives you a production ready codes which are already setup for us but here we are going to build it from scratch.
There are lot of other things alongwith react which makes our application fast and production ready.
npm - is not node package manager .Its a package manager for JS.And has all the packages.

Make our project use npm ?
npm init
package.json is configuration for npm.It will manage all package/dependncies.Our dependent on a lot of package .npm will take care of the version of the package.
We are going to install package , the most important package in our project is a bundler.Our whole code needs to be bundled,complessed,cleaned , cached ,minified before sending it to the production.

- webpack
- parcel
- vit

npx-create-react-app uses webpack , babel to bundle our code behind the scenes.

npm install parcel

- There are two types of dependencies

1.  dev dependencies (used while development) -D
2.  normal dependencies (used in production also)

"parcel": "^2.9.3" -- > ^ update minor version update or parcel (recommended to use ^ , ~ major version update )

What is package.json and package-lock.json ?
package-lock.json keeps the record of every version . Exact version of dependency.The package.json can have ~ or ^ .package-lock.json have approx version.

node-modules - npm init .fetching all code of parcel and putting it inside node modules.
We only installed parcel but more folders got into . Because parcel may have few dependencies which has its own dependencies and this is known as transitive dependencies due to which so many folders got inside the node modules.
Every dependency has its own package.json and it has its own dependencies.

node_modules not go into production / git
.gitignore
/node_modules

Push into git - package.json and package-lock.json
if you have package.json and package-lock.json with you then we can regenerate node_modules. (npm i)

### Episode 2 - Part 2: Igniting our App

We will use parcel to ignite our app

Command :- npx parcel index.html
Output :-
Server running at http://localhost:1234
✨ Built in 592ms

Parcel has created a server for us and hosting it in port 1234.
npx parcel index.html (npx similar to npm , executing a package -npx,)

Another was to get react is npm . CDN method are not preferred way ,why ?

1. Not make network call to get react but have it in our node_modules.
2. src="https://unpkg.com/react@18/umd/react.development.js" what if the version changes?it will be easy to maintain inside node_modules.

npm i react
npm i react-dom

Erro -

 <script src="./App.js"></script>

Our application is treating App.js file as normal js and hence normal js file cannot have imports.

 <script src="./App.js" type="module"></script>

Parcel did

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image optimisation
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differencial Bundling - (app runs(supports) in older browsers as well.parcel does that for us.Different bundle for different browsers )
- Diagnostics
- Better Error suggestions.
- HTTPs ,gives way to host in HTTPS
- Tree Shaking - remove unused code .
- Different build for Dev and Production.

Why it is fast - because it has .parcel-cache

npx parcel build index.html -for build (Remove the "main": "App.js", in package json because conflicts may come.)
dist - when execute parcel, generate a development build and puts it in dist folder and refresh , it used parcel_cache and dist to update it using hmr.

npx parcel build index.html - takes more time .It will give you 1 html , 1 CSS , 1 JS file.These three files are you production ready code for your app.Highly optimised build.

.parcel-cache and dist can be regenerated . Any thing which can be regenerated need to be pushed into github
in server these files are regenerated.

browserslist
npm package
browserslist:["last 2 versions"]

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

### Episode 4 - Part 1 - Talk is Cheap , show me the code

Build a Food ordering App.

```sh
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src="https://img.freepik.com/premium-vector/catering-quality-food-design-logo_187482-593.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestraurentCard = () => {
  return (
    <div className="res-card">
      <h2 className="card-title">Meghana Foods</h2>
      <div className="card-image">
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rxsvhvcdip9dbfdijzk9"></img>
      </div>
      <div>Biryani , North Indian</div>
      <div>4.4 Stars</div>
      <div>30 minutes</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestraurentCard />
        <RestraurentCard />
        <RestraurentCard />
        <RestraurentCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

```

### Episode 4 - Part 2 - Talk is Cheap , show me the code

config driven ui -> according to the data the ui is changed.
Images are put inside CDN .Cloudinary Image is CDN
map,filter,reduce

key should be unique - react cannot uniquely identify all these cards and will rerender all this cards.When new card added , react wont know and rerender all the card. but if we give the id , react will know about the cards and render only one card. So giving the unique id is important.

```sh
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { restraurentData } from "./restraurentCard";

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src="https://img.freepik.com/premium-vector/catering-quality-food-design-logo_187482-593.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestraurentCard = ({ restraurent }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
  } = restraurent;
  return (
    <div className="res-card">
      <h2 className="card-title">{name}</h2>
      <div className="card-image">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        ></img>
      </div>
      <div className="cuisine">{cuisines.join("  , ")}</div>
      <div>{avgRating}</div>
      <div>{deliveryTime} mins</div>
      <div>{costForTwoString}</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restraurentData.map((restraurent) => {
          return (
            <RestraurentCard
              restraurent={restraurent?.data}
              key={restraurent?.data?.id}
            />
          );
        })}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
```

<img width="1440" alt="Screenshot 2023-07-03 at 11 24 03 PM" src="https://github.com/smritipradhan/namaste-react/assets/47382260/258c4a53-2c61-42b6-abc4-8d18ce2e0924">

### Episode 5 - Part 1 - Let's Get Hooked

1. React Hooks.
2. Clean

.js / .jsx are the same .

There are two types of Exports
1.Named Exports/imports ->export const <> -> import {} from ""
2.Defailt Exports/imports -> default export - import \_\_ from ""

One file can have only one default export . Default Export of file
There can be multiple names exports.
Can I have names export with default export?

### Episode 5 - Part 2 - Let's Get Hooked
