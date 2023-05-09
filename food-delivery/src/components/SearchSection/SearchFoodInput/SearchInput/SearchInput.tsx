import styles from "./searchInput.module.scss";
import SearchWhiteIcon from "../../../../assets/svg/SearchWhiteIcon.svg";
import Button from "shared/Button/Button";

<img src={SearchWhiteIcon} alt="deliveryIcon" />;

const SearchInput = () => {
  return (
    <div className={styles.searchInput}>
      <input
        placeholder="Enter Your Address"
        type="text"
        className="input"
        src={SearchWhiteIcon}
      />
      <Button extraStyle={styles.button}>
        <img src={SearchWhiteIcon} alt="deliveryIcon" />
        Find Food
      </Button>
    </div>
  );
};

export default SearchInput;
