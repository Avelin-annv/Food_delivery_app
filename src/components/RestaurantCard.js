import React from "react";
import { CLOUDINARY_URL, IMG_CDN_URL } from "../utils/constants";
const RestaurantCard = ({ item }) => {
  // console.log("item sinside", item);
  return (
    <div className="flex flex-wrap w-[300px] m-2.5" data-testid={`res-card`}>
      <h3 className="font-semibold h-12">{item.name}</h3>
      <img
        alt="Restaurant food items"
        className="rest-img w-65 h-65"
        src={IMG_CDN_URL + item.cloudinaryImageId}
      ></img>
      <div className="card-footer">
        <h4>{item.name}</h4>
        <h3>{item.avgRating}</h3>
        <h3>{`${item.sla.deliveryTime}min -----    ${item.costForTwo}`}</h3>
      </div>
    </div>
  );
};
export default RestaurantCard;
