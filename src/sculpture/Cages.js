import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6b9706da-22a3-448c-8fc3-d1271af81820/print0001.jpg?content-type=image%2Fjpeg",
];

class Cages
 extends Component {
  render() {
    return (
      <div>
          {imgs.map(image => (
              <img className="d-block w-100" src={image} alt="" />
          ))}         
      </div>
    );
  }
}
 
export default Cages
;