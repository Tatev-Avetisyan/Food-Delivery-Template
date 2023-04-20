import MapYellowIcon from "../../../assets/svg/MapYellowIcon.svg";
import styles from "./deliverTo.module.scss";

const DeliverTo = () => {
  return (
    <div className={styles.deliverTo}>
      <p className={styles.dark}>Deliver To:</p>
      <img src={MapYellowIcon} alt="deliverAddress" />
      <p className={styles.lightOpenSans}>Current Location</p>
      <p className={styles.darkOpenSans}>Mohammadpur Bus Stand,</p>
      <p className={styles.darkOpenSans}> Dhaka</p>
    </div>
  );
};

export default DeliverTo;
