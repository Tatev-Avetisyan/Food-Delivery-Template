import LogoFoodWagon from "../../../assets/svg/LogoFoodWagon.svg";
import styles from "./foodWagon.module.scss";

const FoodWagon = () => {
  return (
    <div className={styles.foodWagon}>
      <img src={LogoFoodWagon} alt="logo" />
      <div className={styles.text}>
        <p className={styles.food}>food</p>
        <p className={styles.wagon}>wagon</p>
      </div>
    </div>
  );
};

export default FoodWagon;
