import React, { Component } from 'react';
import styles from "./FoodItem.module.css"
class FoodItem extends Component {
    render() {
        const { img, title, price, desc, link } = this.props;
        return (
          <>
            <div className={`${styles["single-food"]}`}>
              <div className={styles["img"]}>
                <img src={img} />
              </div>
              <div className={styles["title-price"]}>
                <h3> {title}</h3>
                <p>${price}</p>
              </div>
              <div className={styles["food-desc"]}>{desc.slice(1, 300)}...</div>
              <br />
              <div>{link && `${link}`}</div>{" "}
              {/* which is conditional rendering....mean that Show the value of link inside the <div> only if the link exists*/}
            </div>
          </>
        );
    }
}

export default FoodItem;
