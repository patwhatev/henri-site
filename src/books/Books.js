import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import BooksNav from "./BooksNav";
import Rkr from "./Rkr";
import Dictatorship from "./Dictatorship";
// Import other book sub-components here


const dictatorship = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/563c91c6-6f1f-4854-9446-f209601a0bff/Invite1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e73cc940-fcf2-4fab-b72c-99a7a852326c/Invite3.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/dc0641ad-d1ba-4489-b32d-68466ca356c4/Invite2.png?content-type=image%2Fpng",
];

const christaine = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/5ec416ce-4cc0-4140-9372-3a40cf23653b/FW24Invite1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/63e35bc3-d898-4632-832c-c4dcfaf24c67/FW24Invite4.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/1ba91b6c-2309-4da0-af90-592ddfa946c3/FW24Invite2.png?content-type=image%2Fpng",
];

const invite_24 = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/4397b509-747e-4d87-bb29-e25b688e5275/InviteBox.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/7072e308-2282-4077-b24b-77ab8615b541/InviteBoxOpen.png?content-type=image%2Fpng",
]

const books_arr = [dictatorship, christaine, invite_24]

class Books
 extends Component {
  
  render() {
    const allImages = books_arr.flat();
    return (
      <div className="content">
          {allImages.map((image, index) => (
            <div key={index}>
              <img className="photo-grid-item" src={image} alt="" style={{
                width: '600px',
                height: '600px',
                objectFit: 'cover'
              }}  />
            </div>
          ))}         
      </div>
    );
  }
}

export default Books;