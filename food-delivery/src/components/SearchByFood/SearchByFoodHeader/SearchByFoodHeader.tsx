import Text from "shared/Text/Text";
import { SearchByFoodHeaderPagination } from "components";

import styles from "./searchByFoodHeader.module.scss";

const SearchByFoodHeader = () => {
  return (
    <header className={styles.headerWrapper}>
      <Text extraStyle={styles.context} text="Search By Food" />
      <SearchByFoodHeaderPagination onClick={() => {}} />
    </header>
  );
};

export default SearchByFoodHeader;
