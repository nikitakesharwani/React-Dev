import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.8430636&lng=77.656476"
    );
    const json = await data.json();

    setRestaurantList(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="rest-container">
      <button
        className="rest-btn"
        onClick={() => {
          const updatedRestList = restaurantList.filter(
            (restaurantLi) => restaurantLi.rating > 4.0
          );
          console.log(updatedRestList);
          setRestaurantList(updatedRestList);
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="rest-card-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
