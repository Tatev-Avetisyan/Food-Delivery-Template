import "./howDoesItWorkSection.scss";
import SectionItem from "./SectionItem/SectionItem";
import Donut from "../../../assets/svg/Donut.svg";
import Invoice from "../../../assets/svg/Invoice.svg";
import Map from "../../../assets/svg/Icon.svg";
import Menu from "../../../assets/svg/Menu.svg";

const dummySectionItems = [
  {
    image: Map,
    title: "Select location",
    description: "Choose the location where your food will be delivered.",
  },
  {
    image: Menu,
    title: "Choose order",
    description: "Check over hundreds of menus to pick your favorite food.",
  },
  {
    image: Invoice,
    title: "Pay advanced",
    description:
      "It's quick, safe, and simple. Select several methods of payment.",
  },
  {
    image: Donut,
    title: "Enjoy meals",
    description: "Food is made and delivered directly to your home.",
  },
];

const HowDoesItWorkSection = () => {
  return (
    <div className="section">
      {dummySectionItems.map((item, index) => {
        return (
          <SectionItem
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default HowDoesItWorkSection;
