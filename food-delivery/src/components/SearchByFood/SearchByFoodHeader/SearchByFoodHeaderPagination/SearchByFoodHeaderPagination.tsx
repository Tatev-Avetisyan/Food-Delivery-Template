import React from "react";
import ArrowRightOrange from "../../../../assets/svg/ArrowRightOrange.svg";
import { ArrowLeftButton, ArrowRightButton, Button, Text } from "components";

import styles from "./searchByFoodHeaderPagination.module.scss";

const SearchByFoodHeaderPagination: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <div className={styles.paginationBtn}>
      <Button extraStyle={styles.btn}>
        <Text extraStyle={styles.context} text="View All" />
        <img src={ArrowRightOrange} alt="ArrowRight" />
      </Button>
      <div className={styles.pagination}>
        <ArrowLeftButton onClick={onClick} />
        <ArrowRightButton onClick={onClick} />
      </div>
    </div>
  );
};

export default SearchByFoodHeaderPagination;
