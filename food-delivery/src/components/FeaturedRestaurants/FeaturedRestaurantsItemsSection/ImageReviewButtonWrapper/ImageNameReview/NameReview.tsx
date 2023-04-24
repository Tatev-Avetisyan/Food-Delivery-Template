import styles from "./imageNameReview.module.scss";
import Star from "../../../.././../assets/svg/Star.svg";

const NameReview:React.FC<{title:string}> = ({title}) => {
  return (
    <div className={styles.nameReview}>
      <p className={styles.text}>{title}</p>
      <div className={styles.star}>
        <img src={Star} />
        <p>46</p>
      </div>
    </div>
  );
};

export default NameReview;
