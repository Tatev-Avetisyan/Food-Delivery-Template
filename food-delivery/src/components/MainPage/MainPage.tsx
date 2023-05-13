import {
  FeaturedRestaurantsMain,
  HowDoesItWorkMainPage,
  MainFoodComponent,
  MainHeader,
  MainSection,
  SearchByFoodSection,
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
      <SearchByFoodSection/>
    </div>
  );
};

export default MainPage;
