import { RES_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="m-4 p-4 w-[250px] h-[450px] bg-orange-50 rounded-lg hover:bg-orange-100">
      <img
        className="w-[250px] h-44 rounded-md"
        src={RES_URL + resData.info.cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold py-3 text-lg">{resData.info.name}</h3>
      <h5 className="py-3">{resData.info.cuisines.join(", ")}</h5>
      <h5>{resData.info.avgRating}</h5>
      <h5>{resData.info.costForTwo}</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    //this returns a enhanced component.
    return (
      <div>
        <label className="absolute px-3 m-2 bg-black text-cyan-50 rounded-md font-serif">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
