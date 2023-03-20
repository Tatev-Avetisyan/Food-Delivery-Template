import "./deliveryPickup.scss";
import DeliveryIcon from "../../../../assets/svg/DeliveryIcon.svg";
import PickupIcon from "../../../../assets/svg/PickupIcon.svg";

const DeliveryPickup = () => {
  return (
    <div className="delivery-pickup">
      <button className="delivery-button">
        <img src={DeliveryIcon} alt="deliveryIcon" />
        <p className="delivery-text">Delivery</p>
      </button>
      <button className="pickup-button">
        <img src={PickupIcon} alt="deliveryIcon" />
        <p className="pickup-text">Pickup</p>
      </button>
    </div>
  );
};

export default DeliveryPickup;
