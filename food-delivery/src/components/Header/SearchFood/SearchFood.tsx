import Search from "../../../assets/svg/Search.svg";
import styles from  "./searchFood.module.scss";

const SearchFood = () => {
  return (
    <div className={styles.search}>
      <img src={Search} alt="search" />
      <p>Search Food</p>
    </div>
  );
};

export default SearchFood;
