import search from "../../assets/png/search.png";
import "./searchFood.scss"

const SearchFood = () => {
  return (
    <div className="search">
      <img src={search} alt="search" />
      <p>Search Food</p>
    </div>
  );
};

export default SearchFood;
