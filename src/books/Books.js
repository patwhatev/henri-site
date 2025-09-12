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
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/db7e4793-e9ec-4b8f-999f-039a54906c57/AH19FrontCover.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/ad24fad0-097c-4f1f-bd1c-d088e51fe639/AH19Spread.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/06126b53-52fa-4f78-ae2b-0170b5ef8f9c/AH19BackCover.png?content-type=image%2Fpng",
]

const pe_18_zine = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a9971225-8bfb-409f-b34c-1437553338d5/PE18FrontCover.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a9059f3a-bd00-483c-b9a1-6db70987bb18/PE18Spread1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/b819c7de-1004-4622-84a7-72aeceaa5672/PE18Spread2.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/b83780dd-7f2e-4a81-93e5-16fabfc5421c/PE18BackCover.png?content-type=image%2Fpng",
]

const reverse_keith = [
  // "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/2217077e-20d0-475a-a304-88dec020db16/ReverseKeithRichardsBoxCover.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/10359536-398a-4d96-a9fa-d5b57fa58481/ReverseKeithRichardsBookCover.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a9467a55-2764-498e-bcb5-ab4ec97cc2d5/ReverseKeithRichardsBook_Spead01.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e938b4db-83e9-403a-b1d9-bd7f4c1ea128/ReverseKeithRichardsBook_Spead02.jpg?content-type=image%2Fjpeg",
  // "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/1a4de605-109a-400e-9903-79ef97a619df/ReverseKeithRichardsBookBack.png?content-type=image%2Fpng"
]



const books_arr = [dictatorship, christaine, reverse_keith, invite_24, ah_19_invite, pe_18_zine]

class Books
 extends Component {

  check_img(img) {
    let style_add = {};

    if (img.includes("/Invite1") || img.includes("/Invite2") || img.includes("/Invite3")) {
      console.log("found match: ", img)
      style_add.objectFit = 'cover';
      style_add.height = '700px';
      style_add.width = '1000px';
    } else if ( img.includes("/InviteBox")) {
      style_add.objectFit = 'cover';
      style_add.height = '900px';
      style_add.width = '900px';
    } else if ( img.includes("/ReverseKeithRich")) {
      style_add.objectFit = 'contain';
      style_add.height = '900px';
      style_add.maxWidth = '840px';
    } else {
      style_add.objectFit = 'cover';
      style_add.width = '700px';
    }

    return style_add;
  }
  
  render() {
  const allImages = books_arr.flat();
  return (
    <div className="content">
        {allImages.map((image, index) => {
          const dynamicStyle = this.check_img(image);
          return (
            <div key={index}>
              <img 
                className="photo-grid-item" 
                src={image} 
                alt="" 
                style={{
                  ...dynamicStyle
                }}  
              />
            </div>
          );
        })}         
    </div>
  );
}
}

export default Books;