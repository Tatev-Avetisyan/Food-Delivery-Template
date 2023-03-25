import { HowDoesItWorkType } from "../../../../types/howDoesItWorkType/howDoesItWorkType";
import "./sectionItem.scss";

const SectionItem: React.FC<HowDoesItWorkType> = (props) => {
  const { image, description, title } = props;

  return (
    <div className="frame">
      <div className="image">
        <img  src={image} alt="icon" />
      </div>

      <p className="text-title">{title}</p>
      <p className="text-description">{description}</p>
    </div>
  );
};

export default SectionItem;
