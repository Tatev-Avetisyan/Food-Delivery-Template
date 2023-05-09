import Button from "shared/Button/Button";
import User from "../../../assets/svg/User.svg";
import styles from "./loginButton.module.scss";

const LoginButton = () => {
  return (
    <Button extraStyle={styles.loginButton}>
      <img src={User} alt="deliverAddress" />
      <p className={styles.loginText}>Login</p>
    </Button>
  );
};

export default LoginButton;
