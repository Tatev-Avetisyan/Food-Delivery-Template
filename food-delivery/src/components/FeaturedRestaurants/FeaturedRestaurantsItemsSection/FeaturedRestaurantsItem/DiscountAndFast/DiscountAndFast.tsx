import { Discount } from "components";
import { FeaturedRestaurantType } from "types/FeaturedRestaurant/FeaturedRestaurant";
import styles from "./discountAndFast.module.scss";
import Fast from "./Fast";

const DiscountAndFast:React.FC<{discount:number}> = ({discount}) => {
  return (
    <div className={styles.discountAndFast}>
      <Discount  discount={discount}/>
      <Fast />
    </div>
  );
};

export default DiscountAndFast;
