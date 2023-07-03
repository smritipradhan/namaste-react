import React from "react";
import ReactDOM from "react-dom/client";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
