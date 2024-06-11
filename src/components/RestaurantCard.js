import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const RestaurantCard = ({ item }) => {
  return (
    <div
      className="flex flex-wrap w-[250px] m-2.5 rounded-xl shadow-xl p-1 min-h-[400px] font-semibold"
      data-testid={`res-card`}
    >
      <h3 className="font-bold font-xl mx-auto">{item.name}</h3>
      <img
        alt="Restaurant food items"
        className="w-60 h-60 rounded-xl"
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
