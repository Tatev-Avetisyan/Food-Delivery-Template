import styles from "./imageNameReview.module.scss";
import NameReview from "./NameReview";

const ImageNameReview: React.FC<{ logo: string; title: string }> = (props) => {
  const { logo, title } = props;

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={logo} />
      <NameReview title={title} />
    </div>
  );
};

export default ImageNameReview;
