import React, { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL + resId);
    const resData = await data.json();
    setResData(resData);
  };
  return resData;
};

export default useRestaurantMenu;
