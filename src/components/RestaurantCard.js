import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const RestaurantCard = ({ item }) => {
  return (
    <div className="flex flex-wrap w-[300px] m-2.5" data-testid={`res-card`}>
      <h3 className="font-semibold h-12">{item.name}</h3>
      <img
        alt="Restaurant food items"
        className="w-64 h-64"
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
