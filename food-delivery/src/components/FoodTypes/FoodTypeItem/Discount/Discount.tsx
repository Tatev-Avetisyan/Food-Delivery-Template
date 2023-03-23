import "./discount.scss";
import React from "react"


const Discount:React.FC<{discount:number}> = ({discount}) => {
  return (
    <div className="discount">
        <p className="discount-amount">{discount}</p>
        <div className="signs">
            <p className="percent">%</p>
            <p className="off">Off</p>
        </div>
      </div>
  )
}

export default Discount