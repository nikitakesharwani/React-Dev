import { RES_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="rest-card">
      <img className="rest-img" src={RES_URL+resData.info.cloudinaryImageId} alt="" />
      <h3>{resData.info.name}</h3>
      <h5>{resData.info.cuisines.join(", ")}</h5>
      <h5>{resData.info.avgRating}</h5>
      <h5>{resData.info.costForTwo}</h5>
    </div>
  );
};
export default RestaurantCard;
