import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resData?.data?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
  //     ?.card;

  const categories =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
        c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - Rs. {costForTwoMessage}
      </p>
      <p>{avgRatingString} Rating</p>
      {/* Categories Accoridon */}
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category.card.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

// console.log(
//   resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]
//     ?.card?.card?.itemCards
// );

// const [resItem, setResItem] = useState(null);
// const [foodItem, setFoodItem] = useState(null);

// useEffect(() => {
//   fetchData();
// }, []);

// const fetchData = async () => {
//   try {
//     const response = await fetch(API_URL + resId);
//     const resData = await response.json();

//     setResItem(resData?.data?.cards[2]?.card?.card?.info);

//     setFoodItem(
//       resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]
//         ?.card?.card?.itemCards
//     );
//   } catch (error) {
//     console.error("Error Fetching data: ", error);
//   }
// };
