import React, { useState, useEffect } from "react";

import { swiggy_api_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCardContainer from "./RestaurantCardContainer";
import ShimmerComponent from "./ShimmerComponent";
const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const isOnline = useOnlineStatus();
  async function getData() {
    //4 1
    const res = await fetch(swiggy_api_URL);
    const data = await res.json();

    console.log("fetch", res);
    setRestaurantList(
      data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setSearchList(
      data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  const handleSearch = () => {
    debugger;
    const filteredList = restaurantList?.filter((item) =>
      item.info.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setSearchList(filteredList);
  };

  useEffect(() => {
    getData();
  }, []);
  if (!isOnline)
    return (
      <div>
        <h1>Ooops..Looks like your internet connection is lost!!</h1>
      </div>
    );
  return (
    <div className="page-container p-[5%]">
      <div className="my-5 mr-2.5 ml-0 flex align-middle">
        <input
          className="m-3 w-[80%] border-2 border-black-1000 rounded-lg h-14"
          data-testid={"search-input"}
          value={searchVal}
          placeholder="Search for restaurants and foods"
          onChange={(e) => {
            if (e.target.value === "") setSearchList(restaurantList);
            setSearchVal(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        ></input>
        <button
          data-testid="search-btn"
          className=" py-0 px-4 mt-5 h-10 rounded-lg bg-blue-400"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
      {searchList?.length === 0 ? (
        searchVal !== "" ? (
          <div className="no-search">
            <h2>{`No match found for "${searchVal}"`}</h2>
          </div>
        ) : (
          <ShimmerComponent />
        )
      ) : (
        <RestaurantCardContainer restaurantList={searchList} />
      )}
    </div>
  );
};

export default Home;
