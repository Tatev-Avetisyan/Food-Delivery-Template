import styles from "./index.module.scss";
import { SearchFoodInput, SearchTitle } from "components";

const MainSection = () => {
  return (
    <section className={styles.main}>
      <div className={styles.titleAndOrder}>
        <SearchTitle />
        <SearchFoodInput />
      </div>
    </section>
  );
};

export default MainSection;
