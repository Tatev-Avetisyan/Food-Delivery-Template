import styles from "./foodItem.module.scss";
import React from "react";

import { FoodItemType } from "../../../types/foodItemType/foodItemTypes";
import { DiscountFoodItem } from "components";
import Button from "shared/Button/Button";

const FoodItem: React.FC<FoodItemType> = (props) => {
  const { img, foodName, remainingTime, discount } = props;

  return (
    <div className={styles.foodItem}>
      <div className={styles.imageDiscount}>
        <img className={styles.img} src={img} alt="food" />
        <DiscountFoodItem discount={discount} />
      </div>
      <div className={styles.nameRemainingTime}>
        <p className={styles.text}>{foodName}</p>
        <Button extraStyle={styles.remainingText}>
          <p>{remainingTime}</p>
        </Button>
      </div>
    </div>
  );
};

export default FoodItem;
