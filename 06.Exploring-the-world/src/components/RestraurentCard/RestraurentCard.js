import React from "react";
import "./RestraurentCard.css";
import { CDN_LINK } from "../../utils/constants";

export const RestraurentCard = ({ restraurent }) => {
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
        <img src={`${CDN_LINK}/${cloudinaryImageId}`}></img>
      </div>
      <div className="cuisine">{cuisines.join("  , ")}</div>
      <div>{avgRating}</div>
      <div>{deliveryTime} mins</div>
      <div>{costForTwoString}</div>
    </div>
  );
};
