import { HowDoesItWorkSection } from "components";
import styles from "./index.module.scss";

const HowDoesItWorkMainPage = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}> How does it work</p>
      <HowDoesItWorkSection />
    </div>
  );
};

export default HowDoesItWorkMainPage;
