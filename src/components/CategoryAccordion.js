import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { CLASSIFIER_ICONS, IMG_CDN_URL } from "../utils/constants";

const CategoryAccordion = ({ dataList }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //add to store
    dispatch(addItem(item));
  };
  return (
    <div className=" my-8">
      {dataList.map((item) => {
        // console.log("finding key", item.card.info.id);
        return (
          <div key={item.card.info.id}>
            <div className="flex m-4 justify-between">
              <div className="block w-9/12">
                <img
                  className="w-4 h-4"
                  src={
                    CLASSIFIER_ICONS[item.card.info.itemAttribute.vegClassifier]
                  }
                />
                <h1 className="">{item.card.info.name}</h1>
                <h2>{`₹ ${
                  item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100
                }`}</h2>
                <label className="text-gray-400 text-sm">
                  {item.card.info.description}
                </label>
              </div>
              <div className="">
                <button
                  className="px-6 shadow-lg my-2 text-green-400 rounded-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add+
                </button>
                {item?.card?.info?.imageId ? (
                  <div className="">
                    <img
                      className="w-20 h-20"
                      alt={item.card.info.name + "image"}
                      src={IMG_CDN_URL + item?.card?.info?.imageId}
                    ></img>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <hr className="solid m-2 to-black"></hr>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryAccordion;
