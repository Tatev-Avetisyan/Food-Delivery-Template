import styles from "./searchTitle.module.scss";

const SearchTitle = () => {
  return (
    <div className={styles.searchTitle}>
      <p className={styles.title}>Are you starving?</p>
      <p className={styles.info}>
        Within a few clicks, find meals that are accessible near you{" "}
      </p>
    </div>
  );
};

export default SearchTitle;
