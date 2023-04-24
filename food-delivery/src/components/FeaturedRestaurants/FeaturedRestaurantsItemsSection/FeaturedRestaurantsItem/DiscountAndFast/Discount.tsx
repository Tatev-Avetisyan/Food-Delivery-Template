import styles from "./discountAndFast.module.scss";
import Tag from "../../../../../assets/svg/Tag.svg";

const Discount: React.FC<{ discount: number }> = ({ discount }) => {
  return (
    <button className={styles.wrapperDiscount}>
      <img src={Tag} />
      <div className={styles.text}>
        <p>
          {discount}%
         
        </p>
        <p>off</p>
      </div>
    </button>
  );
};

export default Discount;
