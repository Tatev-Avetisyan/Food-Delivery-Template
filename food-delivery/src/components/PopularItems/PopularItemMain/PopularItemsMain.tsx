import PopularItemSection from "../PopularItemSection/PopularItemSection";
import  styles from  "./popularItemsMain.module.scss";

const PopularItemsMain = () => {
  return (
    <div className={styles.popularItemsWrapper}>
      <p className={styles.title}> Popular items</p>
      <PopularItemSection />
    </div>
  );
};

export default PopularItemsMain;
