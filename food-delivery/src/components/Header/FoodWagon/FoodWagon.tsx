import LogoFoodWagon from "../../../assets/svg/LogoFoodWagon.svg";
import "./foodWagon.scss";

const FoodWagon = () => {
  return (
    <div className="food-wagon">
      <img src={LogoFoodWagon} alt="logo" />
      <div className="text">
        <p className="food">food</p>
        <p className="wagon">wagon</p>
      </div>
    </div>
  );
};

export default FoodWagon;
