import orderFoodImage from "../../../assets/png/orderFoodImage.png";
import styles from "./orderFoodImage.module.scss";

const OrderFoodImage = () => {
  return (
    <div className={styles.imageShadow}>
      <div className={styles.image}>
        <img src={orderFoodImage} alt="foodImage" />
      </div>
    </div>
  );
};

export default OrderFoodImage;
