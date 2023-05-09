import styles from "./button.module.scss";
import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  extraStyle: any;
  context?: string;
  open?: string;
};

const Button: React.FC<ButtonProps> = ({ children, extraStyle, ...rest }) => {
  return (
    <button className={`${styles.button} ${extraStyle}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
