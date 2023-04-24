import { FeaturedRestaurantsItem } from "components";
import styles from "./featuredRestaurantsItemsSection.module.scss";
import FoodWorldLogo from "../../../assets/svg/FeaturedRestaurantImages/Logos/FoodWorldLogo.svg";
import FoodWorld from "../../../assets/png/FoodWorld.png";
import { FeaturedRestaurantType } from "types/FeaturedRestaurant/FeaturedRestaurant";

const dummyDataFeaturedRestaurants: FeaturedRestaurantType[] = [
  {
    image: FoodWorld,
    discount: 26,
    logo: FoodWorldLogo,
    title: "FoodWorld",
    open: "Opens Tomorrow",
  },
  {
    image: FoodWorld,
    discount: 26,
    logo: FoodWorldLogo,
    title: "FoodWorld",
    open: "Opens Tomorrow",
  },
  {
    image: FoodWorld,
    discount: 26,
    logo: FoodWorldLogo,
    title: "FoodWorld",
    open: "Opens Tomorrow",
  },
  {
    image: FoodWorld,
    discount: 26,
    logo: FoodWorldLogo,
    title: "FoodWorld",
    open: "Opens Tomorrow",
  },
  {
    image: FoodWorld,
    discount: 26,
    logo: FoodWorldLogo,
    title: "FoodWorld",
    open: "Opens Tomorrow",
  },
  {
    image: FoodWorld,
    discount: 26,
    logo: FoodWorldLogo,
    title: "FoodWorld",
    open: "Opens Tomorrow",
  },
  {
    image: FoodWorld,
    discount: 26,
    logo: FoodWorldLogo,
    title: "FoodWorld",
    open: "Opens Tomorrow",
  },
  {
    image: FoodWorld,
    discount: 26,
    logo: FoodWorldLogo,
    title: "FoodWorld",
    open: "Opens Tomorrow",
  },
];

const FeaturedRestaurantsItemsSection = () => {
  return (
    <div className={styles.section}>
      {dummyDataFeaturedRestaurants.map((item) => {
        return (
          <FeaturedRestaurantsItem
            image={item.image}
            discount={item.discount}
            logo={item.logo}
            title={item.title}
            open={item.open}
          />
        );
      })}
    </div>
  );
};

export default FeaturedRestaurantsItemsSection;
