import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a30b0aac-41f8-415c-8623-6ab0ec4dd40e/Assemblage_01.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/3845a25e-d481-405d-ba50-1b176349e5d5/Assemblage_02.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/406e240c-6ce3-4acc-9bac-3568f3344329/Assemblage_03.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9495235c-133a-4e8b-aa29-bdf6bec0d478/Assemblage_04.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6718c9d2-7f57-4baf-ab87-aa333c73e04f/Assemblage_05.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/8a6ce475-1e60-4ff8-81c8-364c1e3021bd/Assemblage_06.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/0e725479-f214-443e-a1f1-8c29a6750d3a/Assemblage_07.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/086dc1d9-7f0a-44cc-b205-64109a7be1ce/Assemblage_08.jpg?content-type=image%2Fjpeg",
];
 
class Eden extends Component {
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

  check_img(img) {
    let style_add = {};

    if (img.includes("_07.jpg")) {
      console.log("found match: ", img)
      style_add.className = 'img-7';
    } else {
      style_add.className = 'photo-grid-item';

    }

    return style_add;
  }

  render() {
    const { isMobile } = this.state;
    const formatParam = isMobile ? "?format=100w" : "?format=2500w";

    return (
	    <div className='assemblage'>
          {imgs.map((image, index) => {
          const dynamicStyle = this.check_img(image);
          return (
            <div key={index}>
              <img 
                className={dynamicStyle.className}
                src={`${image}${formatParam}`} 
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
 
export default Eden
;