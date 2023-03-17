import "./mainHeader.scss";
import FoodWagon from "../FoodWagon/FoodWagon";
import DeliverTo from "../DeliverAddress/DeliverTo";
import LoginButton from "../LoginButton/LoginButton";
import SearchFood from "../SearchFood/SearchFood";

const MainHeader = () => {
  return (
    <div className="main-header">
      <FoodWagon />
      <DeliverTo />
      <div className="search-login">
        <SearchFood />
        <LoginButton />
      </div>
    </div>
  );
};

export default MainHeader;
