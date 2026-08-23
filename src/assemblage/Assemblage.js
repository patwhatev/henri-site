import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const new_1 = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/0f773149-e688-48d7-bbc2-0a8be0b714af/white+painting+with+baby+trams.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f794c34b-f548-4bf1-b8a8-f1d143732f12/_2PW0099+copy.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/8ed7c8bb-bc65-4bf1-88e4-b30c2a22baf5/_2PT6711+copy.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/b3b32a81-1031-4639-963a-d269b2abc42d/_2PT6688+copy2.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/bb098498-ec3e-4c88-a037-da11633e6eed/_2PT9987+copy.png?content-type=image%2Fpng",
];

const assemblage_1 = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a30b0aac-41f8-415c-8623-6ab0ec4dd40e/Assemblage_01.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/3845a25e-d481-405d-ba50-1b176349e5d5/Assemblage_02.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/406e240c-6ce3-4acc-9bac-3568f3344329/Assemblage_03.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9495235c-133a-4e8b-aa29-bdf6bec0d478/Assemblage_04.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6718c9d2-7f57-4baf-ab87-aa333c73e04f/Assemblage_05.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/8a6ce475-1e60-4ff8-81c8-364c1e3021bd/Assemblage_06.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/0e725479-f214-443e-a1f1-8c29a6750d3a/Assemblage_07.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/086dc1d9-7f0a-44cc-b205-64109a7be1ce/Assemblage_08.jpg?content-type=image%2Fjpeg",
];

const imgs_arr = [new_1, assemblage_1];
 
class Eden extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 400,
      loadedImages: new Set()
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

  handleImageLoad = (imageUrl) => {
    this.setState(prevState => ({
      loadedImages: new Set(prevState.loadedImages).add(imageUrl)
    }));
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
    const { isMobile, loadedImages } = this.state;
    const formatParam = isMobile ? "?format=100w" : "?format=2500w";
    const imgs = imgs_arr.flat();

    return (
	    <div className='assemblage'>
          {imgs.map((image, index) => {
          const dynamicStyle = this.check_img(image);
          const fullImageUrl = `${image}${formatParam}`;
          const isLoaded = loadedImages.has(fullImageUrl);

          return (
            <div key={index} className="image-container">
              <img
                className={`${dynamicStyle.className} ${isLoaded ? 'loaded' : 'loading'}`}
                src={fullImageUrl}
                alt=""
                style={{
                  ...dynamicStyle
                }}
                onLoad={() => this.handleImageLoad(fullImageUrl)}
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