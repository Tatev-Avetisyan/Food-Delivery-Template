import { FoodTypesGroup } from "components";
import styles from "./index.module.scss";

const MainFoodComponent = () => {
  return (
    <div className={styles.main}>
      <FoodTypesGroup />
    </div>
  );
};

export default MainFoodComponent;
