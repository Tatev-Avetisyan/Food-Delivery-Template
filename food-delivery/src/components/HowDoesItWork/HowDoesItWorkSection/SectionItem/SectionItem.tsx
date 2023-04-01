import { HowDoesItWorkType } from "../../../../types/howDoesItWorkType/howDoesItWorkType";
import styles from "./sectionItem.module.scss";

const SectionItem: React.FC<HowDoesItWorkType> = (props) => {
  const { image, description, title } = props;

  return (
    <div className={styles.frame}>
      <div className={styles.image}>
        <img src={image} alt="icon" />
      </div>

      <p className={styles.textTitle}>{title}</p>
      <p className={styles.textDescription}>{description}</p>
    </div>
  );
};

export default SectionItem;
