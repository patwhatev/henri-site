import React, { Component } from "react";

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

const ah_19_invite = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6be90a19-2e1f-4fd6-bf72-7b225bed7529/AH19FrontCover.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/58964cf2-7644-4937-81fe-1428c9203cec/AH19Spread.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c1f1d0d5-b113-4bf1-be3b-5f4140004eec/AH19BackCover.png?content-type=image%2Fpng"
]

const pe_18_zine = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/2a970509-d2a4-45be-a2f0-1a5664a4bc3e/PE18FrontCover.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/226a63e4-60cc-45fe-b08a-cec58e388d9a/PE18Spread1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/5f779a6c-09de-41d4-a6d5-715936983f04/PE18Spread2.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a711c628-36e6-45d2-8eb7-d2cbe2c443d4/PE18BackCover.png?content-type=image%2Fpng",
]

const reverse_keith = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9cc40c9c-d6bd-465e-86fa-123f1b7dd8b1/ReverseKeithRichardsBookCover.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e003fe4e-09a2-40c8-a253-0a8de43eae9c/ReverseKeithRichardsBook_Spead01.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/0dad383e-86b0-488c-88a6-b9fcc4193faa/ReverseKeithRichardsBook_Spead02.png?content-type=image%2Fpng",
  // "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/471a4870-871d-4c53-9b6b-7e0990a744a5/ReverseKeithRichardsBookBack.png?content-type=image%2Fpng",
]



const books_arr = [dictatorship, christaine, reverse_keith, invite_24, ah_19_invite, pe_18_zine]

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedImages: new Set()
    };
  }

  handleImageLoad = (imageUrl) => {
    this.setState(prevState => ({
      loadedImages: new Set(prevState.loadedImages).add(imageUrl)
    }));
  }

  check_img(img) {
    let style_add = {};

    // if (img.includes("/Invite1") || img.includes("/Invite2") || img.includes("/Invite3")) {
    //   console.log("found match: ", img)
    //   style_add.objectFit = 'cover';
    //   style_add.height = '700px';
    //   style_add.width = '1000px';
    // } else if ( img.includes("/InviteBox")) {
    //   style_add.objectFit = 'cover';
    //   style_add.height = '900px';
    //   style_add.width = '900px';
    // } else {
    //   style_add.objectFit = 'cover';
    //   style_add.width = '700px';
    // }

    return style_add;
  }
  
  render() {
    const { loadedImages } = this.state;
    const allImages = books_arr.flat();
    return (
      <div className="content">
          {allImages.map((image, index) => {
            const dynamicStyle = this.check_img(image);
            const isLoaded = loadedImages.has(image);
            return (
              <div key={index} className="image-container">
                <img
                  className={isLoaded ? 'loaded' : 'loading'}
                  src={image}
                  alt=""
                  style={{
                    ...dynamicStyle
                  }}
                  onLoad={() => this.handleImageLoad(image)}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default Books;