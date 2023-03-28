import PopularItemSection from "../PopularItemSection/PopularItemSection";
import "./popularItemsMain.scss";

const PopularItemsMain = () => {
  return (
    <div className="popular-items-main">
      <p className="title"> Popular items</p>
      <PopularItemSection />
    </div>
  );
};

export default PopularItemsMain;
