
import Button from "shared/Button/Button";
import ImageNameReview from "./ImageNameReview/ImageNameReview";
import styles from "./ImageReviewButtonWrapper.module.scss";

const ImageReviewButtonWrapper: React.FC<{
  open: string;
  logo: any;
  title: string;
  discount: number;
}> = (props) => {
  const { open, title, logo, discount } = props;
  return (
    <div className={styles.wrapper}>
      <ImageNameReview discount={discount} title={title} logo={logo} />
      <Button
        extraStyle={
          open === "Open Now" ? styles.buttonGreen : styles.buttonOrange
        }
        open={open}
      >
        <p>{open}</p>
      </Button>
    </div>
  );
};

export default ImageReviewButtonWrapper;
