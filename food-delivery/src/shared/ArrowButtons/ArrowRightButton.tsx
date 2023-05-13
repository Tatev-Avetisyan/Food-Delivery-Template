import ArrowRightWhite from "../../assets/svg/ArrowRightWhite.svg";
import styles from "./arrowButtons.module.scss";

interface ArrowRightType {
  onClick?: () => void;
  extraStyle?: any;
}

const ArrowLeftButton: React.FC<ArrowRightType> = ({ onClick, extraStyle }) => {
  return (
    <div onClick={onClick} className={` ${styles.arrowBtn} ${extraStyle}`}>
      <img src={ArrowRightWhite} alt="right" />
    </div>
  );
};

export default ArrowLeftButton;
