import React, { Component } from "react";
 
class Home extends Component {
  render() {
      const x_home = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a91bfd01-79cf-4d86-bc9c-df1cb61f5750/1756585581378-00dfa619-558a-466d-8ffb-d61deca85115_4.png?content-type=image%2Fpng";
      const alt_2_home = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a7d0792b-ec14-41bc-8194-e2359d721320/9134-21a.JPG?content-type=image%2Fjpeg";
      const og_home = "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe3c3dc97713cd08faa3/1570504266192/WEBSITE+COVER+PHOTO.TIF.png?format=2500w";
    return (
      <div>
        <img src={x_home} alt="" />
      </div>
    );
  }
}

export default Home;