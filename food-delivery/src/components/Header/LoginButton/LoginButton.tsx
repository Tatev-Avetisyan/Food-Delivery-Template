import User from "../../../assets/svg/User.svg";
import styles from "./loginButton.module.scss";

const LoginButton = () => {
  return (
    <button className={styles.loginButton}>
      <img src={User} alt="deliverAddress" />
      <p className={styles.loginText}>Login</p>
    </button>
  );
};

export default LoginButton;
