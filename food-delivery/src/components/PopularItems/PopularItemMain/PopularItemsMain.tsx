import PopularItemSection from "../PopularItemSection/PopularItemSection";
import "./popularItemsMain.scss";
import ArrowLeft from "../../../assets/svg/ArrowLeft.svg";
import ArrowRight from "../../../assets/svg/ArrowRight.svg";

const PopularItemsMain = () => {
  return (
    <div className="popular-items-main">
      {/* <div className="paginationBtn">
        <div>
          <img src={ArrowLeft} alt="left" />
        </div>
        <div>
          <img src={ArrowRight} alt="right" />
        </div>
      </div> */}
      <p className="title"> Popular items</p>
      <PopularItemSection />
    </div>
  );
};

export default PopularItemsMain;
