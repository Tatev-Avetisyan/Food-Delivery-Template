import "./popularItem.scss";
import MapYellowIcon from "../../../../assets/svg/MapYellowIcon.svg";
import { FoodOrderType } from "../../../../types/foodItemType/foodItemTypes";

const PopularItem: React.FC<FoodOrderType> = (props) => {
  const { image, price, location, name } = props;

  return (
    <div className="item">
      <img className="image" src={image} alt="foodImage" />

      <p className="text-title">{name}</p>
      <div className="location">
        <img src={MapYellowIcon} alt="foodImage" />
        <p>{location}</p>
      </div>
      <p className="price">${price}</p>
      <button className="order-button"> Order Now</button>
    </div>
  );
};

export default PopularItem;
