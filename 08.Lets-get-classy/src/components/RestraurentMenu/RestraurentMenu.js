import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RestraurentMenu.css";
import { CDN_LINK } from "../../utils/constants";
import { Breathing } from "react-shimmer";

const RestraurentMenu = () => {
  const [restraurentMenuData, setRestrauretMenuData] = useState(null);
  const [restraurentId, setRestraurentId] = useState("");
  const params = useParams();
  const fetchMenuData = async (resId) => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&sortBy=DELIVERY_TIME&page_type=DESKTOP_WEB_LISTING"
    );
    const restrauData = await data.json();
    setRestrauretMenuData(
      restrauData.data.cards[0]?.data?.data.cards.filter(
        (restraurent) => restraurent.data.id === resId
      )
    );
  };

  useEffect(() => {
    setRestraurentId(params.id);
    fetchMenuData(params.resId);
  }, []);

  if (restraurentMenuData === null) {
    return (
      <div className="breathe">
        <Breathing width={100} height={100} />
      </div>
    );
  }

  const {
    name,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
    costForTwoString,
    cuisines,
  } = restraurentMenuData[0]?.data || "";

  return (
    <div>
      Restraurent Menu
      <div className="restraurent-menu-card">
        {name}
        <div className="image">
          <img src={`${CDN_LINK}/${cloudinaryImageId}`}></img>
        </div>
        {/* <div className="cuisine">{cuisines.join("  , ")}</div> */}
        <div>{avgRating}</div>
        <div>{deliveryTime} mins</div>
        <div>{costForTwoString}</div>
      </div>
    </div>
  );
};

export default RestraurentMenu;
