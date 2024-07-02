import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]); //restaurantList is used to persorm the filter on click of search button in line 60
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //this is updating the res-card with filtered cards
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      // Check if the response is not OK (status >= 400)
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
      }

      const json = await response.json();

      setRestaurantList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(error);
      // Handle the error gracefully, e.g., display an error message to the user
    }
  };


  const onlineStatus = useOnlineStatus();

  if (onlineStatus === "false")
    return <h1>You are offline. Please check your connection!!!</h1>;

  return restaurantList.length === null ? (
    <Shimmer />
  ) : (
    <div className="search-box px-5 m-3">
      <input
        type="text"
        placeholder="  Search"
        className="border border-solid border-black m-3 rounded-md focus:ring-2"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="p-2 mx-2 bg-blue-900 text-cyan-100 rounded-md"
        onClick={() => {
          let filteredRest = restaurantList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText)
          );

          setFilteredRestaurant(filteredRest);
        }}
      >
        Search
      </button>

      <button
        className="p-2 bg-gray-400 text-cyan-100 rounded-md"
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

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant-menu/${restaurant.info.id}`}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

// let restList =
//   json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
//     ?.restaurants ||
//   json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
//     ?.restaurants;
// console.log(json);
