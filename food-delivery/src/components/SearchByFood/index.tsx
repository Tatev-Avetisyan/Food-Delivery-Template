import { SearchByFoodHeader, SearchByFoodMain } from "components";
import styles from "./index.module.scss";

const SearchByFoodSection = () => {
  return (
    <section className={styles.wrapper}>
        <SearchByFoodMain/>
    </section>
  );
};

export default SearchByFoodSection;
