import Button from "./Button/Button";
import ImageNameReview from "./ImageNameReview/ImageNameReview";
import styles from "./ImageReviewButtonWrapper.module.scss";

const ImageReviewButtonWrapper:React.FC<{open:string,logo:string,title:string}> = (props) => {

  const {open,title,logo} = props

  return (
    <div className={styles.wrapper}>
      <ImageNameReview  title = {title}logo={logo} />
      <Button open={open} />
    </div>
  );
};

export default ImageReviewButtonWrapper;
