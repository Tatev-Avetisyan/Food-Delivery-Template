import styles from "./featuredRestaurantsItem.module.scss";
import { DiscountAndFast } from "components";
import { FeaturedRestaurantType } from "types/FeaturedRestaurant/FeaturedRestaurant";
import ImageReviewButtonWrapper from "../ImageReviewButtonWrapper/ImageReviewButtonWrapper";

const FeaturedRestaurantsItem: React.FC<FeaturedRestaurantType> = ({
  image,
  discount,
  title,
  logo,
  open,
  stars,
}) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt="food" />
      <DiscountAndFast discount={discount} />
      <ImageReviewButtonWrapper
        discount={stars}
        title={title}
        open={open}
        logo={logo}
      />
    </div>
  );
};

export default FeaturedRestaurantsItem;
