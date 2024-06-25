import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

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

      let restList =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setRestaurantList(restList);
      setFilteredRestaurant(restList);
    } catch (error) {
      console.error(error);
      // Handle the error gracefully, e.g., display an error message to the user
    }
  };
  console.log("Body Rendered");

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="rest-container">
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
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
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
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
