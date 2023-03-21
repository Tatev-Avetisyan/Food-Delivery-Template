import MapYellowIcon from "../../../assets/svg/MapYellowIcon.svg";
import "./deliverTo.scss";

const DeliverTo = () => {
  return (
    <div className="deliver-to">
      <p className="dark">Deliver To:</p>
      <img src={MapYellowIcon} alt="deliverAddress" />
      <p className="light">Current Location</p>
      <p className="dark">Mohammadpur Bus Stand,Dhaka</p>
    </div>
  );
};

export default DeliverTo;
