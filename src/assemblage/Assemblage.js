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
 
class Eden
 extends Component {
  render() {
    return (
	    <div className='assemblage'>
          {imgs.map(image => (
              <img className="d-block w-100 scrolldown-img" src={image} alt="" />
          ))}         
		</div>
    );
  }
}
 
export default Eden
;