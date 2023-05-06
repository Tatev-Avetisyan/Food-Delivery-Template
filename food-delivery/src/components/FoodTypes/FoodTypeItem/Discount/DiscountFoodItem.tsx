import styles from "./discountFoodItem.module.scss";
import React from "react";

const DiscountFoodItem: React.FC<{ discount: number }> = ({ discount }) => {
  return (
    <div className={styles.discount}>
      <div className={styles.discountWrapper}>
        <div className={styles.discountAmount}>
          <p>{discount}</p>
        </div>
        <div className={styles.signs}>
          <div className={styles.percent}>%</div>
          <div className={styles.off}>Off</div>
        </div>
      </div>
    </div>
  );
};

export default DiscountFoodItem;
