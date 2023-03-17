import foodWagon from "../../../assets/png/foodWagon.png"
import "./foodWagon.scss";


const FoodWagon = () => {
  return (
    <div className="food-wagon"> 
        <img src={foodWagon} alt = "logo"/>
        <p className="food">food</p>
        <p className="wagon">wagon</p>
      </div>
  )
}

export default FoodWagon