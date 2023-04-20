import styles from "./featuredRestaurantsItem.module.scss";
import FoodWorld from "../../../../assets/png/FoodWorld.png";
import { DiscountAndFast } from "components";

const FeaturedRestaurantsItem = () => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={FoodWorld} alt="food" />
      <DiscountAndFast />
    </div>
  );
};

export default FeaturedRestaurantsItem;
