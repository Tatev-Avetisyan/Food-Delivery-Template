import styles from "./popularItem.module.scss";
import MapYellowIcon from "../../../../assets/svg/MapYellowIcon.svg";
import { FoodOrderType } from "../../../../types/foodItemType/foodItemTypes";
import Button from "shared/Button/Button";

const PopularItem: React.FC<FoodOrderType> = (props) => {
  const { image, price, location, name } = props;

  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt="foodImage" />

      <p className={styles.textTitle}>{name}</p>
      <div className={styles.location}>
        <img src={MapYellowIcon} alt="foodImage" />
        <p>{location}</p>
      </div>
      <p className={styles.price}>${price}</p>
      <Button extraStyle={styles.orderButton}> Order Now</Button>
    </div>
  );
};

export default PopularItem;
