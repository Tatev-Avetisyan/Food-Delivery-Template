import styles from "./imageNameReview.module.scss";
import NameReview from "./NameReview";

const ImageNameReview: React.FC<{
  logo: any;
  title: string;
  discount: number;
}> = (props) => {
  const { logo, title, discount } = props;

  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo" />
      <NameReview discount={discount} title={title} />
    </div>
  );
};

export default ImageNameReview;
