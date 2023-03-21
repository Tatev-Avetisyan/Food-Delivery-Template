import User from "../../../assets/svg/User.svg";
import "./loginButton.scss";

const LoginButton = () => {
  return (
    <button className="login-button">
      <img src={User} alt="deliverAddress" />
      <p className="login-text">Login</p>
    </button>
  );
};

export default LoginButton;
