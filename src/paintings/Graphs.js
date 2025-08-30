import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da66f35969104796c2abdf2/1571188569516/DSC_6743.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9f50a51fc08962a642c98a/5d9f50a502898f0055cbe8d9/1570721966884/XoCi9rgg.jpeg?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9f50a51fc08962a642c98a/5d9f51069eb7101c8dd8f678/1570722061959/44Vl7hzA.jpeg?format=1500w"
    ] 
class Graphs
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
 
export default Graphs
;