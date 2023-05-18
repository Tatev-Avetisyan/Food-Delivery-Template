import styles from "./text.module.scss";

type TextType = {
  extraStyle?: any;
  text: string;
};

const Text: React.FC<TextType> = ({ text, extraStyle  }) => {
  return <p className={`${styles.text} ${extraStyle}`}>{text}</p>;
};

export default Text;
