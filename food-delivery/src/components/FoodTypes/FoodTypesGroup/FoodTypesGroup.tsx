import "./foodTypesGroup.scss"
import FoodItem from "../FoodTypeItem/FoodItem";
import firstImage from "../../../assets/png/firstImage.png";
import secondImage from "../../../assets/png/secondImage.png";
import thirdImage from "../../../assets/png/thirdImage.png";
import forthImage from "../../../assets/png/forthImage.png";
import { FoodItemType } from "../../../types/foodItemType/foodItemTypes";



const foodTypeItems: FoodItemType[] = [
  {
    img: firstImage,
    discount: 17,
    foodName: "Greys Vage",
    remainingTime: "4 Days Remaining",
  },
  {
    img: secondImage,
    discount: 13,
    foodName: "Greys Vage",
    remainingTime: "6 Days Remaining",
  },
  {
    img: thirdImage,
    discount: 35,
    foodName: "Greys Vage",
    remainingTime: "8 Days Remaining",
  },
  {
    img: forthImage,
    discount: 25,
    foodName: "Greys Vage",
    remainingTime: "2 Days Remaining",
  },
];

const FoodTypesGroup = () => {
  return (
    <div className="foodGroup">
      {foodTypeItems.map((item, index) => {
        return (
          <FoodItem
            key={index}
            img={item.img}
            foodName={item.foodName}
            discount={item.discount}
            remainingTime={item.remainingTime}
          />
        );
      })}
    </div>
  );
};

export default FoodTypesGroup;
