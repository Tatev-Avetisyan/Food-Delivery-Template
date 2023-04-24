import { FeaturedRestaurantType } from "types/FeaturedRestaurant/FeaturedRestaurant";
import styles from "./button.module.scss";

const Button:React.FC<{open:string}> = ({open}) => {
  return (
    <div className={styles.button}>
      <p>{open}</p>
    </div>
  );
};

export default Button;
