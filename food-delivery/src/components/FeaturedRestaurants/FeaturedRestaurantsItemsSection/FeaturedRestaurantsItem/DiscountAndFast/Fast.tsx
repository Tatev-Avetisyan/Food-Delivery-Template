import styles from "./discountAndFast.module.scss";
import Clock from "../../../../../assets/svg/Clock.svg";

const Fast = () => {
  return (
    <button className={styles.wrapperFast}>
      <img src={Clock} />
      <p className={styles.text}>Fast</p>
    </button>
  );
};

export default Fast;
