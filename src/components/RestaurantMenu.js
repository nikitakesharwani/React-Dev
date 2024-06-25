import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const [resItem, setResItem] = useState(null);

  const [foodItem, setFoodItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL + resId);

      const resData = await response.json();
      const data = resData?.data?.cards[2]?.card?.card?.info;
      setResItem(data);

      console.log(
        resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]
          ?.card?.card?.itemCards
      );

      const foodDetails =
        resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]
          ?.card?.card?.itemCards;
      setFoodItem(foodDetails);
    } catch (error) {
      console.error("Error Fetching data: ", error);
    }
  };

  if (resItem === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRatingString } = resItem;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines} - Rs. {costForTwoMessage}
      </p>
      <p>{avgRatingString} Rating</p>
      {foodItem &&
        foodItem.map((item) => (
          <p key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </p>
        ))}
    </div>
  );
};

export default RestaurantMenu;
