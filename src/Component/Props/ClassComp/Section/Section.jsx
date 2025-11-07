import { Component } from "react";
import menu from "../../../../commonResource/data";
import FoodItem from "../FoodItem/FoodItem";
import styles from "../FoodItem/FoodItem.module.css"

class Section extends Component {
  render() {
    // const menu = null;
    return (
      <>
        <div className={styles["foods-container"]}>
          {menu?.map((ele, index) => {
            // "?"....is called optional chaining
            return <FoodItem key={index} {...ele} />;

            {
              /* ...ele mean just destructuring using spread operator */
            }
          })}
        </div>
      </>
    );
  }
}

export default Section;
