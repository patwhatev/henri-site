import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/26941f60-884e-4f81-a94e-093d95568d45/_2PT6678+copy+1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/d87afd32-9066-4fa0-992c-4413a49a8a93/_2PT6635+copy.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/fd9f0298-fccc-4d7c-9699-c690fe74f017/_2PT9982+copy.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e45e1c85-dd38-4ded-85c3-ca8d43052e31/_2PT9930+copy.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6cdd53f5-1def-412f-ac85-664b037b2d7f/Black+Paintings_03+copy.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a5e9d72f-f2b5-4643-8c1d-a6ae398d22e9/_2PW0085-Pano+copy.png?content-type=image%2Fpng",
  // older 
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/cc4dd351-c1e5-47e9-beed-997bef749647/Black+Paintings_01.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/dcab4599-311c-4e8b-bae0-c03d9b1cad8e/Black+Paintings_02.jpg?content-type=image%2Fjpeg",
  // "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9d3676f4-bbff-4c16-9cba-4448e135cd79/Black+Paintings_03.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/863e6e65-43da-4c07-b28b-4ab3cf839c1b/Black+Paintings_04.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/05e8ca7d-240d-416c-b100-5b7d3f0b3ebe/Black+Paintings_05.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/190ca95d-f17f-45e0-a468-305aac78fb6a/Black+Paintings_06.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/4cfeaaac-8c64-4cab-8f2b-d1760a3158db/Black+Paintings_07.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f4ba96c8-19ec-402e-8cf3-2529276ae367/Black+Paintings_08.jpg?content-type=image%2Fjpeg",
] 
class BlackPaintings extends Component {
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

  render() {
    const { isMobile, loadedImages } = this.state;
    const formatParam = isMobile ? "?format=100w" : "?format=2500w";

    // if (isMobile) {
    //   return (
    //     <div className="black-paintings-mobile">
    //       {imgs.map((image, index) => {
    //         const fullImageUrl = `${image}${formatParam}`;
    //         const isLoaded = loadedImages.has(fullImageUrl);
    //         return (
    //           <div key={index} className="image-container">
    //             <img
    //               className={`d-block w-100 ${isLoaded ? 'loaded' : 'loading'}`}
    //               src={fullImageUrl}
    //               alt=""
    //               onLoad={() => this.handleImageLoad(fullImageUrl)}
    //             />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
    // }

   return (
      <div>
        <Carousel>
          {imgs.map((image, index) => {
            const fullImageUrl = `${image}${formatParam}`;
            const isLoaded = loadedImages.has(fullImageUrl);
            return (
              <Carousel.Item key={index}>
                <div className="image-container">
                  <img
                    className={`d-block w-100 ${isLoaded ? 'loaded' : 'loading'}`}
                    src={fullImageUrl}
                    alt=""
                    onLoad={() => this.handleImageLoad(fullImageUrl)}
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
 
export default BlackPaintings;
