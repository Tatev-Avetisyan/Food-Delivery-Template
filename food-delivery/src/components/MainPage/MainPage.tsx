import {
  FeaturedRestaurantsMain,
  HowDoesItWorkMainPage,
  MainFoodComponent,
  MainHeader,
  MainSection,
} from "components";
import styles from "./mainPage.module.scss";

import PopularItemsMain from "../PopularItems/PopularItemMain/PopularItemsMain";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <MainHeader />
      <MainSection />
      <MainFoodComponent />
      <HowDoesItWorkMainPage />
      <PopularItemsMain />
      <FeaturedRestaurantsMain />
    </div>
  );
};

export default MainPage;
