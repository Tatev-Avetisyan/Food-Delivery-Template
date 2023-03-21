import Search from "../../../assets/svg/Search.svg";
import "./searchFood.scss";

const SearchFood = () => {
  return (
    <div className="search">
      <img src={Search} alt="search" />
      <p>Search Food</p>
    </div>
  );
};

export default SearchFood;
