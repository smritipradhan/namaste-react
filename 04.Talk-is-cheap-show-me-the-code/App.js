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
