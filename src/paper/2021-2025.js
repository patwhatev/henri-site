import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9e9f99d8-1634-465a-a03c-1bd5f44a0770/New+Paper_01.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/b3ea84f9-96eb-447b-8c19-0da8d68c63e4/New+Paper_02.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/ab95ca0f-50e0-47c0-a34f-25fb8f1b9390/New+Paper_03.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/2d8ece92-b224-4223-ad41-b77a799e1fd9/New+Paper_04.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/68284116-2d0b-4e67-bcad-7b85e62d4096/New+Paper_05.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/899a5fc6-bfb2-4eb6-8fe5-825f30f7027b/New+Paper_06.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/7780f677-90f2-493e-9186-503debe9cbe4/New+Paper_07.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/29eebe9f-14d9-459f-a355-f44f4861be72/New+Paper_08.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/76a277f0-239c-4a12-846d-a6c405a70ca6/New+Paper_09.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e8a6a6ba-1c93-42ce-ba50-3ec2b67f37d5/New+Paper_10.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/744b0e1a-203c-4a23-a983-2d7ecfe8326a/New+Paper_11.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/31f19c0d-f676-4fee-bfb7-8fbb9f5df49d/New+Paper_12.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/d4b1acca-6c97-4b65-b7d0-ede344f43d3d/New+Paper_13.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/8ca1d722-7e9f-4930-95e6-e45c3f462bb7/New+Paper_14.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f12f0d23-39fe-4521-8f95-410bbeda1206/New+Paper_15.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/27fff8ed-49a2-4616-911d-4bfa32573652/New+Paper_16.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/558b9bdf-5d47-43c4-806c-a89bfb915336/New+Paper_17.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/1ce961e9-2378-4155-90f2-f5d88041eba1/New+Paper_18.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f41dae47-81ad-49c3-9ec3-edafe77454b2/New+Paper_19.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/72158221-84be-481e-b258-3a0814526413/New+Paper_20.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/fa746d7b-fbf2-462b-9bc7-50b5c0f53880/New+Paper_22.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c9fabacb-ba67-469c-a397-9f5d72c21d6f/New+Paper_22.png?content-type=image%2Fpng",
];

class Paper2021to2025 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 400
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth <= 400
    });
  }

  render() {
    const { isMobile } = this.state;
    const formatParam = isMobile ? "?format=100w" : "?format=2500w";

    return (
      <div className="paper-21" >
          {imgs.map((image, index) => (
              <img key={index} className="d-block w-100" src={`${image}${formatParam}`} alt="" />
          ))}         
      </div>
    );
  }
}
 
export default Paper2021to2025
;