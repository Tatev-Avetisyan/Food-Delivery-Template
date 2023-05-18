import Pizza from "../../../../assets/png/SearchByFood/Pizza.png";
import { Text } from "components";
import styles from "./itemSearchByFood.module.scss";

interface ItemSearchByFoodType {
  image: any;
  context: string;
}

const ItemSearchByFood: React.FC<ItemSearchByFoodType> = ({
  image,
  context,
}) => {
  return (
    <div className={styles.itemWrapper}>
      <img src={image} alt="Pizza" />
      <Text extraStyle={styles.text} text={context} />
    </div>
  );
};

export default ItemSearchByFood;
