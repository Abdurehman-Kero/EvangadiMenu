import React, { Component } from "react";

class SectionThree extends Component {
  render() {
    return (
      <div>
        <div className="single-food">
          <div className="img">
            <img src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp" />
          </div>
          <div className="title-price">
            <h3>KITFO (ክትፎ)</h3>
            <p>$25.99</p>
          </div>
          <div className="food-desc">
            Made from the leanest meat, kitfo is viewed as a big treat by
            ordinary Ethiopians, while its nutritional powers are also praised.
            Similar to French steak tartare, the meat is minced and warmed in a
            pan with a little butter, mitmita (a stronger version of berbere)...
          </div>
        </div>
      </div>
    );
  }
}

export default SectionThree;
