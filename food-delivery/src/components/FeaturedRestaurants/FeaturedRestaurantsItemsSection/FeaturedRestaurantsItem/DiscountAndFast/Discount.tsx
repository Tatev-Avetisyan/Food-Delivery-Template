import styles from "./discountAndFast.module.scss";
import Tag from "../../../../../assets/svg/Tag.svg";

const Discount = () => {
  return (
    <button className={styles.wrapperDiscount}>
      <img src={Tag} />
      <div className={styles.text}>
        <p>29%</p>
        <p>off</p>
      </div>
    </button>
  );
};

export default Discount;
