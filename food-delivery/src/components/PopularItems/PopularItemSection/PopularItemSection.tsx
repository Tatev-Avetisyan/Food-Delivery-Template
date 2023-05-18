import { useState } from "react";
import { ArrowLeftButton } from "components";
import PopularItem from "./PopularItem/PopularItem";
import DanCake from "../../../assets/png/DanCake.png";
import styles from "./popularItemSection.module.scss";
import ThaiSoup from "../../../assets/png/ThaiSoup.png";
import ToofesCake from "../../../assets/png/ToofesCake.png";
import CheeseBurger from "../../../assets/png/CheeseBurger.png";
import CrispySandwich from "../../../assets/png/CrispySandwitch.png";
import ArrowRightButton from "shared/ArrowButtons/ArrowRightButton";

const dummyFoods = [
  {
    index: 1,
    image: CheeseBurger,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    index: 2,
    image: ToofesCake,
    name: "Toofe's Cake",
    location: "Top Sticks",
    price: "4.00",
  },
  {
    index: 3,
    image: DanCake,
    name: "DanCake",
    location: "Cake World",
    price: "1.99",
  },
  {
    index: 4,
    image: CrispySandwich,
    name: "Crispy Sandwich",
    location: "Fastfood dine",
    price: "3.00",
  },
  {
    index: 5,
    image: ThaiSoup,
    name: "Thai Soup",
    location: "Foody man ",
    price: "2.79",
  },
  {
    index: 6,
    image: CheeseBurger,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    index: 7,
    image: CheeseBurger,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    index: 8,
    image: CheeseBurger,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    index: 9,
    image: CheeseBurger,
    name: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
  },
  {
    index: 1,
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
    <section className={styles.popularItemSection}>
      <div className={styles.paginationBtn}>
        <ArrowLeftButton onClick={decrement} />
        <ArrowRightButton onClick={increment} />
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
    </section>
  );
};

export default PopularItemSection;
