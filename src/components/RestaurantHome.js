import { useState } from "react";
import { useParams } from "react-router";

import ShimmerComponent from "./ShimmerComponent";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { ITEM_CATEGORY } from "../utils/constants";
import ItemCategory from "./ItemCategory";

const RestaurantHome = () => {
  //remove below state to make accordion work in usual way-implemented-working fine
  const [expandedIndex, setExpandedIndex] = useState(null);
  const params = useParams();
  const resData = useRestaurantMenu(params.id);

  if (resData === null) return <ShimmerComponent />;
  const { name, avgRatingString, cuisines, sla } =
    resData?.data?.cards[2]?.card?.card?.info;

  const categoryCards =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => item.card.card["@type"] == ITEM_CATEGORY
    );

  return (
    <>
      <div className="res-header text-center">
        <h1 className="text-bold text-2xl">{name}</h1>
        <h2 className="text-blue-600">{`${avgRatingString} ⭐️ `}</h2> 
        <h3 className="text-xl">{cuisines.join(",")}</h3>
        <h3>{`⌛️---${sla?.deliveryTime} minutes"--🍕`}</h3>
      </div>
      <div className="">
        {categoryCards.map((item, index) => {
          return (
            <ItemCategory
              key={item?.card?.card?.title + index}
              dataList={item.card.card}
              expand={index === expandedIndex ? true : false}
              setExpandedIndex={() => {
                if (index === expandedIndex) {
                  setExpandedIndex(null);
                } else setExpandedIndex(index);
              }}
            />
          );
        })}{" "}
      </div>
    </>
  );
};
export default RestaurantHome;
