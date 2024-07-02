import { useState, useEffect } from "react";
import { API_DETAILS } from "./constants";

const useRestaurantDetail = () => {
  const [restaurantList, setRestaurantList] = useState([]); //restaurantList is used to perform the filter on click of search button in line 60

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_DETAILS);

        // Check if the response is not OK (status >= 400)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch data: ${response.status} ${response.statusText}`
          );
        }

        const json = await response.json();

        setRestaurantList(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || []
        );
      } catch (error) {
        console.error(error);
        // Handle the error gracefully, e.g., display an error message to the user
      }
    };

    fetchData();
  }, []);

  return restaurantList;
};

export default useRestaurantDetail;
