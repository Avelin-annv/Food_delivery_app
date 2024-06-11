import { useState } from "react";
import { useParams } from "react-router";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import { ITEM_CATEGORY } from "../utils/constants";
import ItemCategory from "./ItemCategory";
import ShimmerMenu from "../Shimmer/ShimmerMenu";

const RestaurantHome = () => {
  //remove below state to make accordion work in usual way-implemented-working fine
  const [expandedIndex, setExpandedIndex] = useState(null);

  const params = useParams();
  const resData = useRestaurantMenu(params.id);
  if (resData === null) return <ShimmerMenu />;
  const { name, avgRatingString, cuisines, costForTwoMessage } =
    resData?.data?.cards[2]?.card?.card?.info;

  const categoryCards =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => item.card.card["@type"] == ITEM_CATEGORY
    );
  return (
    <>
      <div className="res-header text-center font-bold bg-red-100 rounded-xl w-10/12 lg:w-6/12 md:lg:w-8/12 mx-auto my-2">
        <h1 className="text-4xl">{name}</h1>
        <h2 className="my-2">{`${avgRatingString} ⭐️ `}</h2> 
        <h3 className="text-xl my-1">{cuisines.join(",")}</h3>
        <h3 className="my-2">{`⌛️--|20-30 minutes"|--🍕`}</h3>
        <h3 className="my-2">{costForTwoMessage}</h3>
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
