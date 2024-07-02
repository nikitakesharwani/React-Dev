import { RES_URL } from "../utils/constants";
const ItemList = ({ items = [] }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div className="flex justify-between mx-2 p-4">
          <div
            key={item?.info?.id}
            className="text-left border-b-2 py-2 mx-3 w-9/12"
          >
            <div className="mb-2 font-medium">
              {item.card.info.name} - ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </div>
            <p className="text-sm mb-8">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 w-24">
            <img src={RES_URL + item.card.info.imageId} />
            <button className="px-2 mx-16 rounded-lg bg-black text-white text-sm shadow-lg">
              +Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
