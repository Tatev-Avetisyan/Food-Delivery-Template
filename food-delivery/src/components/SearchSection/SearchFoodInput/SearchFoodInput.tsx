import styles from "./searchFoodInput.module.scss";
import { DeliveryPickup, OrderFoodImage, SearchInput } from "components";

const SearchFoodInput = () => {
  return (
    <>
      <div className={styles.orderCard}>
        <DeliveryPickup />
        <hr className={styles.hr} />
        <SearchInput />
      </div>
      <OrderFoodImage />
    </>
  );
};

export default SearchFoodInput;
