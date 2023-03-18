import "./mainPage.scss";
import MainHeader from "../Header/MainHeader/MainHeader";
import MainSection from "../SearchSection/MainSection/MainSection";

const MainPage = () => {
  return (
    <div className="main-page">
      <MainHeader />
      <MainSection/>
    </div>
  );
};

export default MainPage;
