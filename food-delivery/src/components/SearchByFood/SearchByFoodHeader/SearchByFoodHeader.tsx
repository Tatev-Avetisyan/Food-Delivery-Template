import Text from "shared/Text/Text";
import styles from "./searchByFoodHeader.module.scss";
import { SearchByFoodHeaderPagination } from "components";

const SearchByFoodHeader = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className="">
        <Text extraStyle={styles.context} text="Search By Food" />
      </div>
      <SearchByFoodHeaderPagination onClick={() => {}} />
    </header>
  );
};

export default SearchByFoodHeader;
