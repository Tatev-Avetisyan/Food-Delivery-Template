import { SearchByFoodHeader, SearchByFoodItemsSection } from "components";
import styles from "./searchByFoodMain.module.scss";

const SearchByFoodMain = () => {
  return (
    <div className={styles.mainWrapper}>
      <SearchByFoodHeader />
      <SearchByFoodItemsSection />
    </div>
  );
};

export default SearchByFoodMain;
