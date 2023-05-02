import styles from "./button.module.scss";

export const ButtonGreen: React.FC<{ open: string }> = ({ open }) => {
  return (
    <div className={styles.buttonGreen}>
      <p>{open}</p>
    </div>
  );
};

const Button: React.FC<{ open: string; extraStyle: any }> = ({
  open,
  extraStyle,
}) => {
  return (
    <div className={` ${extraStyle}`}>
      <p>{open}</p>
    </div>
  );
};

export default Button;
