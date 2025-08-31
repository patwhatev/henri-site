import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// Import other book sub-components here


const porcelain_trays = {
  cover: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/0cbbde1d-6a26-4d20-822e-bdcfccdc7342/Porcelain+Trays.jpg?content-type=image%2Fjpeg",
  player: "tbd"
}

const swiss_toys = {
  cover: "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c01a87b7-1e50-4ced-935f-57920c5c7853/Special+Swiss+Toys.jpg?content-type=image%2Fjpeg",
  player: "tbd"
}

const albums_arr = [porcelain_trays, swiss_toys]

class Instrumentals
 extends Component {
  
  render() {
    const allAlbums = albums_arr.flat();
    return (
      <div className="content">
          {allAlbums.map((object, index) => (
            <div key={index}>
              <img className="photo-grid-item" src={object.cover} alt="" style={{
                width: '600px',
                height: '600px',
                objectFit: 'cover'
              }}  />
            </div>
          ))}         
      </div>
    );
  }
}

export default Instrumentals;