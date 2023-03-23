import "./foodItem.scss";
import React from "react";
import Discount from "./Discount/Discount";
import { FoodItemType } from "../../../foodItemType/foodItemTypes";

const FoodItem: React.FC<FoodItemType> = (props) => {
  const { img, foodName, remainingTime, discount } = props;

  return (
    <div className="food-item">
      <img className="food-item-img" src={img} alt="food" />
      <Discount discount={discount} />
      <div className="name-remaining-time">
        <p className="text">{foodName}</p>
        <div className="remaining-text">
          <p>{remainingTime}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
