import SearchFoodInput from "../SearchFoodInput/SearchFoodInput";
import SearchTitle from "../Title/SearchTitle";
import "./mainSection.scss";

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="title-and-order">
        <SearchTitle />
        <SearchFoodInput/>
      </div>
    </section>
  );
};

export default MainSection;
