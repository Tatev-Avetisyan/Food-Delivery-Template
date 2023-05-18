import ArrowLeftWhite from "../../assets/svg/ArrowLeftWhite.svg";
import styles from "./arrowButtons.module.scss";

interface ArrowLeftType {
  onClick?: () => void;
  extraStyle?: any;
}

const ArrowLeftButton: React.FC<ArrowLeftType> = ({ onClick, extraStyle }) => {
  return (
    <div onClick={onClick} className={` ${styles.arrowBtn} ${extraStyle}`}>
      <img src={ArrowLeftWhite} alt="left" />
    </div>
  );
};

export default ArrowLeftButton;
