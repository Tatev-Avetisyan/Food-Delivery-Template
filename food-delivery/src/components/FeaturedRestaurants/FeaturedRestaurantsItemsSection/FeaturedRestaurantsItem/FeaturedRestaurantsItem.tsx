import styles from "./featuredRestaurantsItem.module.scss";
import FoodWorld from "../../../../assets/png/FoodWorld.png";
import { DiscountAndFast } from "components";
import ImageReviewButtonWrapper from "../ImageReviewButtonWrapper/ImageReviewButtonWrapper";
import { FeaturedRestaurantType } from "types/FeaturedRestaurant/FeaturedRestaurant";



const FeaturedRestaurantsItem:React.FC<FeaturedRestaurantType> = ({image,discount,title,logo,open}) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt="food" />
      <DiscountAndFast discount={discount} />
      <ImageReviewButtonWrapper title={title} open={open} logo={logo}  />
    </div>
  );
};

export default FeaturedRestaurantsItem;
