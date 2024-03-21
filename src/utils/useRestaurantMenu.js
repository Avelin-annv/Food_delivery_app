import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (id) => {
  const [resData, setResData] = useState(null);
  const fetchResData = async () => {
    const res = await fetch(RESTAURANT_MENU_API + id);
    const jsonRes = await res.json();
    setResData(jsonRes);
  };
  useEffect(() => {
    fetchResData();
  }, []);
  return resData;
};
export default useRestaurantMenu;
