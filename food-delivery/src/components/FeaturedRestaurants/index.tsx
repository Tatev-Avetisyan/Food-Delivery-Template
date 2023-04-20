import { FeaturedRestaurantsItemsSection } from "components";
import styles from "./index.module.scss";

const FeaturedRestaurantsMain = () => {
  return (
    <div className={styles.main}>
      <p className={styles.title}> Featured Restaurants</p>
      <FeaturedRestaurantsItemsSection />
    </div>
  );
};

export default FeaturedRestaurantsMain;
