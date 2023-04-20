
import { FeaturedRestaurantsItem } from "components";
import styles from "./featuredRestaurantsItemsSection.module.scss";

const FeaturedRestaurantsItemsSection = () => {
  return (
    <div className={styles.section}>
      <FeaturedRestaurantsItem />
      <FeaturedRestaurantsItem />
      <FeaturedRestaurantsItem />
      <FeaturedRestaurantsItem />
      <FeaturedRestaurantsItem />
      <FeaturedRestaurantsItem />
      <FeaturedRestaurantsItem />
      <FeaturedRestaurantsItem />
    </div>
  );
};

export default FeaturedRestaurantsItemsSection;
