import styles from "./deliveryPickup.module.scss";
import DeliveryIcon from "../../../../assets/svg/DeliveryIcon.svg";
import PickupIcon from "../../../../assets/svg/PickupIcon.svg";

const DeliveryPickup = () => {
  return (
    <div className={styles.deliveryPickup}>
      <button className={styles.deliveryButton}>
        <img src={DeliveryIcon} alt="deliveryIcon" />
        <p className={styles.deliveryText}>Delivery</p>
      </button>
      <button className={styles.pickupButton}>
        <img src={PickupIcon} alt="deliveryIcon" />
        <p className={styles.pickupText}>Pickup</p>
      </button>
    </div>
  );
};

export default DeliveryPickup;
