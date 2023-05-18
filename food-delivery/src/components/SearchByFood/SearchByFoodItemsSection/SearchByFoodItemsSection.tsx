import { ItemSearchByFood } from "components";
import Pizza from "../../../assets/png/SearchByFood/Pizza.png";
import Burger from "../../../assets/png/SearchByFood/Burger.png";
import Noodles from "../../../assets/png/SearchByFood/Noodles.png";
import SubSandwich from "../../../assets/png/SearchByFood/SubSandwich.png";
import Chowmein from "../../../assets/png/SearchByFood/Chowmein.png";
import Steak from "../../../assets/png/SearchByFood/Steak.png";

import styles from "./searchByFoodItemsSection.module.scss";

const searchFoodDummyData = [
  { image: Pizza, context: "Pizza" },
  { image: Burger, context: "Burger" },
  { image: Noodles, context: "Noodles" },
  { image: SubSandwich, context: "Sub-sandwich" },
  { image: Chowmein, context: "Chowmein" },
  { image: Steak, context: "Steak" },
];

const SearchByFoodItemsSection = () => {
  return (
    <div className={styles.wrapper}>
      {searchFoodDummyData.map((item) => {
        return <ItemSearchByFood image={item.image} context={item.context} />;
      })}
    </div>
  );
};

export default SearchByFoodItemsSection;
