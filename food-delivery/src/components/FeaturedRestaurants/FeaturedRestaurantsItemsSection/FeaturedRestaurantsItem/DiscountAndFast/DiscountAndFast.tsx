import { Discount } from "components";
import styles from "./discountAndFast.module.scss";
import Fast from "./Fast";

const DiscountAndFast = () => {
  return (
    <div className={styles.discountAndFast}>
      <Discount />
      <Fast />
    </div>
  );
};

export default DiscountAndFast;
