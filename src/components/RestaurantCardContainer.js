import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantCardContainer = ({ restaurantList }) => {
  return (
    <div className="flex flex-wrap">
      {restaurantList?.map((item) => (
        <Link
          key={item.info.id}
          to={`/restaurant/${item.info.id}`}
          className="mx-auto"
        >
          <RestaurantCard item={item.info} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantCardContainer;

export const promotedRestaurantCard = (ResComp) => {
  return (props) => {
    return (
      <div className="relative ">
        <label className=" absolute bg-black text-white ">
          {props.item.aggregatedDiscountInfoV3.discountTag}
        </label>
        <ResComp {...props} />
      </div>
    );
  };
};
