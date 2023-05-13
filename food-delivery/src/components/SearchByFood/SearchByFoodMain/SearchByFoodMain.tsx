import { SearchByFoodHeader } from "components";
import styles from "./searchByFoodMain.module.scss";

const SearchByFoodMain = () => {
  return (
    <div className={styles.mainWrapper}>
      <SearchByFoodHeader />
    </div>
  );
};

export default SearchByFoodMain;
