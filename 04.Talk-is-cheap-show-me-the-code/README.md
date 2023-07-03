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
