import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/8438443d-81c5-4801-be0c-e3b233a4781c/1756585581378-00dfa619-558a-466d-8ffb-d61deca85115_1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6df5b292-3ef2-4263-8965-bd8186109852/1756585581378-00dfa619-558a-466d-8ffb-d61deca85115_2.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/72407ae3-6ece-4a82-bca6-d555335bb955/1756585581378-00dfa619-558a-466d-8ffb-d61deca85115_3.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a91bfd01-79cf-4d86-bc9c-df1cb61f5750/1756585581378-00dfa619-558a-466d-8ffb-d61deca85115_4.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/2d455a52-6ec2-4aeb-a1df-6f6677d5a310/1756585581378-00dfa619-558a-466d-8ffb-d61deca85115_5.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/b679fec5-0314-4501-8180-127030fed243/1756585581378-00dfa619-558a-466d-8ffb-d61deca85115_6.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/d45b4f10-4d99-443f-bdec-735be3e530b7/1756585581378-00dfa619-558a-466d-8ffb-d61deca85115_7.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/98426531-409e-43c0-ba42-907ba75851e4/1756585581378-00dfa619-558a-466d-8ffb-d61deca85115_8.png?content-type=image%2Fpng",
]
 
class Eden
 extends Component {
  render() {
    return (
	    <div>
          {imgs.map(image => (
              <img className="d-block w-100 scrolldown-img" src={image} alt="" />
          ))}         
		</div>
    );
  }
}
 
export default Eden
;