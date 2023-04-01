import "./featuredRestaurantsItem.scss";
import FoodWorld from "../../../../assets/png/FoodWorld.png";
import DiscountAndFast from "./DiscountAndFast/DiscountAndFast";

const FeaturedRestaurantsItem = () => {
  return (
    <div className="featured-restaurants-item">
      <img className="image-featured-restaurants" src={FoodWorld} />
      <DiscountAndFast />
    </div>
  );
};

export default FeaturedRestaurantsItem;
