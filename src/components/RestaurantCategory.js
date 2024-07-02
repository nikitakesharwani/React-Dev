import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log("RestaurantCategory", data.itemCards);
  const itemLength = data.itemCards ? data.itemCards.length : 0;

  handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="">
      {/* {Header} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg p-3">
            {data.title} ({itemLength})
          </span>
          <span className="p-3">🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
