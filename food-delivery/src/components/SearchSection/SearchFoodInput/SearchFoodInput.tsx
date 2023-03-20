import DeliveryPickup from "./DeliveryPickup/DeliveryPickup";
import "./searchFoodInput.scss";
import SearchInput from "./SearchInput/SearchInput";

const SearchFoodInput = () => {
  return (
    <div className="order-card">
      <DeliveryPickup />
      <hr className="hr" />
      <SearchInput />
    </div>
  );
};

export default SearchFoodInput;
