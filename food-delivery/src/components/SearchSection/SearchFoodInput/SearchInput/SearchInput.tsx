import "./searchInput.scss";
import SearchWhiteIcon from "../../../../assets/svg/SearchWhiteIcon.svg";

<img src={SearchWhiteIcon} alt="deliveryIcon" />;

const SearchInput = () => {
  return (
    <div className="search-input">
      <input  placeholder="Enter Your Address" type="text" className="input" src={SearchWhiteIcon} />

      <button>
        <img src={SearchWhiteIcon} alt="deliveryIcon" />
        Find Food
      </button>
    </div>
  );
};

export default SearchInput;
