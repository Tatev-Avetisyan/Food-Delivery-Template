import FoodWorld from "../../../assets/png/FeaturedRestaurantImages/FoodWorld.png";
import PizzaHub from "../../../assets/png/FeaturedRestaurantImages/PizzaHub.png";
import DonutsHut from "../../../assets/png/FeaturedRestaurantImages/DonutsHut.png";
import DonutsHut1 from "../../../assets/png/FeaturedRestaurantImages/DonutsHut1.png";
import RubyTuesday from "../../../assets/png/FeaturedRestaurantImages/RubyTuesday.png";
import KuakataFriedChicken from "../../../assets/png/FeaturedRestaurantImages/KuakataFriedChicken.png";
import RedSquare from "../../../assets/png/FeaturedRestaurantImages/RedSquare.png";
import TacoBell from "../../../assets/png/FeaturedRestaurantImages/TacoBell.png";

import FoodWorldLogo from "../../../assets/svg/FeaturedRestaurantImages/Logos/FoodWorldLogo.svg";
import PizzaLogo from "../../../assets/svg/FeaturedRestaurantImages/Logos/PizzaLogo.svg";
import DonutsLogo from "../../../assets/svg/FeaturedRestaurantImages/Logos/DonutsLogo.svg";
import SubwayLogo from "../../../assets/svg/FeaturedRestaurantImages/Logos/SubwayLogo.svg";
import RubyLogo from "../../../assets/svg/FeaturedRestaurantImages/Logos/RubyLogo.svg";
import KFCLogo from "../../../assets/svg/FeaturedRestaurantImages/Logos/KFCLogo.svg";
import RedSquareLogo from "../../../assets/svg/FeaturedRestaurantImages/Logos/RedSquareLogo.svg";
import TacoBellLogo from "../../../assets/svg/FeaturedRestaurantImages/Logos/TacoBellLogo.svg";
import ArrowRight from "../../../assets/svg/FeaturedRestaurantImages/ArrowRight.svg";

import styles from "./featuredRestaurantsItemsSection.module.scss";

import { FeaturedRestaurantType } from "types/FeaturedRestaurant/FeaturedRestaurant";
import { FeaturedRestaurantsItem } from "components";
import Button from "shared/Button/Button";

// import {
//   DonutsLogo,
//   FoodWorldLogo,
//   PizzaLogo,
// } from "assets/svg/FeaturedRestaurantImages/Logos";

const dummyDataFeaturedRestaurants: FeaturedRestaurantType[] = [
  {
    key: 1,
    image: FoodWorld,
    discount: 20,
    // logo: <FoodWorldLogo />,
    logo: FoodWorldLogo,
    title: "FoodWorld",
    open: "Opens Tomorrow",
    stars: 46,
  },
  {
    key: 2,
    image: PizzaHub,
    discount: 15,
    // logo: <PizzaLogo />,
    logo: PizzaLogo,
    title: "Pizzahub",
    open: "Opens Tomorrow",
    stars: 40,
  },
  {
    key: 3,
    image: DonutsHut,
    discount: 10,
    // logo: <DonutsLogo />,
    logo: DonutsLogo,
    title: "Donuts hut",
    open: "Open Now",
    stars: 20,
  },
  {
    key: 4,
    image: DonutsHut1,
    discount: 15,
    logo: SubwayLogo,
    title: "Donuts hut",
    open: "Open Now",
    stars: 50,
  },
  {
    key: 5,
    image: RubyTuesday,
    discount: 10,
    logo: RubyLogo,
    title: "Ruby Tuesday",
    open: "Open Now",
    stars: 26,
  },
  {
    key: 6,
    image: KuakataFriedChicken,
    discount: 25,
    logo: KFCLogo,
    title: "Kuakata Fried Chicken",
    open: "Open Now",
    stars: 53,
  },
  {
    key: 7,
    image: RedSquare,
    discount: 10,
    logo: RedSquareLogo,
    title: "Red Square",
    open: "Open Now",
    stars: 45,
  },
  {
    key: 8,
    image: TacoBell,
    discount: 10,
    logo: TacoBellLogo,
    title: "Taco Bell",
    open: "Open Now",
    stars: 35,
  },
];

const FeaturedRestaurantsItemsSection: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        {dummyDataFeaturedRestaurants.map((item) => {
          return (
            <FeaturedRestaurantsItem
              key={item.key}
              stars={item.stars}
              image={item.image}
              discount={item.discount}
              logo={item.logo}
              title={item.title}
              open={item.open}
            />
          );
        })}
      </div>
      <div>
        <Button extraStyle={styles.featuredRestaurantBtn}>
          <p>View All</p>
          <img src={ArrowRight} alt="ArrowRight" />
        </Button>
      </div>
    </div>
  );
};

export default FeaturedRestaurantsItemsSection;
