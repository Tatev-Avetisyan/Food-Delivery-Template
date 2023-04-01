import { DeliverTo, FoodWagon, LoginButton, SearchFood } from "components";
import styles from "./index.module.scss";

const MainHeader = () => {
  return (
    <header className={styles.main}>
      <FoodWagon />
      <DeliverTo />
      <div className={styles.searchLogin}>
        <SearchFood />
        <LoginButton />
      </div>
    </header>
  );
};

export default MainHeader;
