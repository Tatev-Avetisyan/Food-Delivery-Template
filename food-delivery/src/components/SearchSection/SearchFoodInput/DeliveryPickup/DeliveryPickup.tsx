import styles from "./deliveryPickup.module.scss";
import DeliveryIcon from "../../../../assets/svg/DeliveryIcon.svg";
import PickupIcon from "../../../../assets/svg/PickupIcon.svg";
import Button from "shared/Button/Button";

const DeliveryPickup = () => {
  return (
    <div className={styles.deliveryPickup}>
      <Button extraStyle={styles.deliveryButton}>
        <img src={DeliveryIcon} alt="deliveryIcon" />
        <p className={styles.deliveryText}>Delivery</p>
      </Button>
      <Button extraStyle={styles.pickupButton}>
        <img src={PickupIcon} alt="deliveryIcon" />
        <p className={styles.pickupText}>Pickup</p>
      </Button>
    </div>
  );
};

export default DeliveryPickup;
