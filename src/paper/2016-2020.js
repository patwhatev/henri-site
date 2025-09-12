import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/2ee0cca4-8d21-4102-9e15-a37d3af0d2fb/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/528987ff-6a4d-47cf-b410-db86dbcfbe63/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_2.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/d75b283f-a214-4c9b-b33f-374a5ac1ed6f/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_3.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f0274c0f-29cc-42ba-8eaa-7289d9f6efe4/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_4.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/483b2010-3835-41e2-adaa-c5d25add31b7/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_5.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9d4d596e-3668-4015-bab3-6a54a02c75f0/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_6.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/d621cc58-1360-495c-8506-bdb4942cb95d/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_7.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/25023bbd-6f11-4eb8-b61a-963632dcde70/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_8.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/91d72291-02aa-4ef6-8a0f-7f09a1869a86/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_9.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/ec8ad3e3-a535-4c9f-89e4-92705d14771d/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_10.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e55a6fb5-4a41-4e57-be01-fce7d796da19/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_11.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e497e3a4-467c-4307-b843-3d65da2e0dba/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_12.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/400aff75-2c1f-4076-b3d5-272e58a6427a/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_13.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/cd12eec7-6bae-4e96-82cc-29f796bcefbd/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_14.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/786f1d49-40d3-4f4a-b904-cce6cfbfc421/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_15.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/0255fd72-1084-441c-a348-782d621b8df2/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_16.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/aceaef8a-01e7-4d85-900b-68c36ffa2f43/1756599537401-42ce0fe5-c689-42f3-ba17-a617bb16b63d_17.png?content-type=image%2Fpng"
];

class Paper2016to2020
 extends Component {
  render() {
    return (
      <div className='paper-16'>
          {imgs.map(image => (
              <img className="d-block w-100" src={image} alt="" />
          ))}         
      </div>
    );
  }
}
 
export default Paper2016to2020
;