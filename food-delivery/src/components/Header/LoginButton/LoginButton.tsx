import user from "../../../assets/png/user.png";
import "./loginButton.scss";

const LoginButton = () => {
  return (
    <button className="login-button">
      <img src={user} alt="deliverAddress" />
      <p className="login-text">Login</p>
    </button>
  );
};

export default LoginButton;
