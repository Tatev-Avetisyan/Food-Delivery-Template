import PopularItem from "./PopularItem/PopularItem";
import "./popularItemSection.scss";
import CheeseBurger from "../../../assets/png/CheeseBurger.png";
import ToofesCake from "../../../assets/png/ToofesCake.png";
import DanCake from "../../../assets/png/DanCake.png";
import CrispySandwich from "../../../assets/png/CrispySandwitch.png";
import ThaiSoup from "../../../assets/png/ThaiSoup.png";
import ArrowLeft from "../../../assets/svg/ArrowLeft.svg";
import ArrowRight from "../../../assets/svg/ArrowRight.svg";
import { useState } from "react";

const dummyFoods = [
  {
    image: CheeseBurger,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    image: ToofesCake,
    name: "Toofe's Cake",
    location: "Top Sticks",
    price: "4.00",
  },
  {
    image: DanCake,
    name: "DanCake",
    location: "Cake World",
    price: "1.99",
  },
  {
    image: CrispySandwich,
    name: "Crispy Sandwich",
    location: "Fastfood dine",
    price: "3.00",
  },
  {
    image: ThaiSoup,
    name: "Thai Soup",
    location: "Foody man ",
    price: "2.79",
  },
  {
    image: CheeseBurger,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    image: CheeseBurger,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    image: CheeseBurger,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    image: CheeseBurger,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    image: CheeseBurger,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
];

const PopularItemSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const page = dummyFoods.length / 5;
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sliceFoodItems = dummyFoods.slice(startIndex, endIndex);

  const decrement = () => {
    if (currentPage === 1) {
      return;
    }

    setCurrentPage((prev) => prev - 1);
  };
  const increment = () => {
    if (currentPage === page) {
      return;
    }

    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="popular-item-section">
      <div className="paginationBtn">
        <div onClick={decrement}>
          <img src={ArrowLeft} alt="left" />
        </div>
        <div onClick={increment}>
          <img src={ArrowRight} alt="right" />
        </div>
      </div>
      {sliceFoodItems.map((item, index) => {
        return (
          <PopularItem
            key={index}
            image={item.image}
            location={item.location}
            price={item.price}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default PopularItemSection;
