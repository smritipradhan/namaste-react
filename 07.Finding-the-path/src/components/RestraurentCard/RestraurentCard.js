import React from "react";
import "./RestraurentCard.css";
import { CDN_LINK } from "../../utils/constants";
import { NavLink } from "react-router-dom";

export const RestraurentCard = ({ restraurent }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
    id,
  } = restraurent;
  return (
    <NavLink to={`/restraurent/${id}`} className="navlink">
      <div className="res-card">
        <h2 className="card-title">{name}</h2>
        <div className="card-image">
          <img src={`${CDN_LINK}/${cloudinaryImageId}`}></img>
        </div>
        <div className="cuisine">{cuisines.join("  , ")}</div>
        <div>{avgRating}</div>
        <div>{deliveryTime} mins</div>
        <div>{costForTwoString}</div>
      </div>
    </NavLink>
  );
};
