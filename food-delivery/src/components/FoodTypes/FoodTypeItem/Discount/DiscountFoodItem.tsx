import styles from "./discountFoodItem.module.scss";
import React from "react";

const DiscountFoodItem: React.FC<{ discount: number }> = ({ discount }) => {
  return (
    <div className={styles.discount}>
      <p className={styles.discountAmount}>{discount}</p>
      <div className={styles.signs}>
        <p className={styles.percent}>%</p>
        <p className={styles.off}>Off</p>
      </div>
    </div>
  );
};

export default DiscountFoodItem;
