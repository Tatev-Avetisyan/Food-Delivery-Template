import "./mainPage.scss";
import MainHeader from "../Header/MainHeader/MainHeader";
import MainSection from "../SearchSection/MainSection/MainSection";
import MainFoodComponent from "../FoodTypes/MainFoodTypesComponent/MainFoodComponent";
import HowDoesItWorkMainPage from "../HowDoesItWork/HowDoesItWorkMainPage/HowDoesItWorkMainPage";
import PopularItemsMain from "../PopularItems/PopularItemMain/PopularItemsMain";

const MainPage = () => {
  return (
    <div className="main-page">
      <MainHeader />
      <MainSection />
      <MainFoodComponent />
      <HowDoesItWorkMainPage />
      <PopularItemsMain />
    </div>
  );
};

export default MainPage;
