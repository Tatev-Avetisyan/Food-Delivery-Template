import orderFoodImage from "../../../assets/png/orderFoodImage.png"
import "./orderFoodImage.scss";

const OrderFoodImage = () => {
  return (
    <div className="image-shadow">
      <div className="image">
        <img src={orderFoodImage} alt="foodImage" />
      </div>
    </div>
  );
};

export default OrderFoodImage;
