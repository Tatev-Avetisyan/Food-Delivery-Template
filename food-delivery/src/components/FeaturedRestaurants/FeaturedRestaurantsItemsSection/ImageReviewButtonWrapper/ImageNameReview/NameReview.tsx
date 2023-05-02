import Star from "../../../../../assets/svg/Star.svg"

import styles from "./imageNameReview.module.scss";


const NameReview: React.FC<{ title: string; discount: number }> = ({
  title,
  discount,
}) => {
  return (
    <div className={styles.nameReview}>
      <p className={styles.text}>{title}</p>
      <div className={styles.star}>
        <img src={Star} alt="logo" />
        <p>{discount}</p>
      </div>
    </div>
  );
};

export default NameReview;
