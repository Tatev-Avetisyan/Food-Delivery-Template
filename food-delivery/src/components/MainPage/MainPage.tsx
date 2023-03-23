import "./mainPage.scss";
import MainHeader from "../Header/MainHeader/MainHeader";
import MainSection from "../SearchSection/MainSection/MainSection";
import MainFoodComponent from "../FoodTypes/MainFoodTypesComponent/MainFoodComponent";

const MainPage = () => {
  return (
    <div className="main-page">
      <MainHeader />
      <MainSection/>
      <MainFoodComponent/>
    </div>
  );
};

export default MainPage;
