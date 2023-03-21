import "./searchFoodInput.scss";
import SearchInput from "./SearchInput/SearchInput";
import OrderFoodImage from "../FoodImage/OrderFoodImage";
import DeliveryPickup from "./DeliveryPickup/DeliveryPickup";

const SearchFoodInput = () => {
  return (
    <>
      <div className="order-card">
        <DeliveryPickup />
        <hr className="hr" />
        <SearchInput />
      </div>
      <OrderFoodImage />
    </>
  );
};

export default SearchFoodInput;
