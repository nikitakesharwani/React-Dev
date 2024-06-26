import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

  const { resname, cuisines, costForTwoMessage, avgRatingString } =
    resData?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      ?.card;

  return (
    <div>
      <h1>{resname}</h1>
      <p>
        {cuisines} - Rs. {costForTwoMessage}
      </p>
      <p>{avgRatingString} Rating</p>
      {itemCards &&
        itemCards.map((item) => (
          <p key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </p>
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
