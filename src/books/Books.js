import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import BooksNav from "./BooksNav";
import Rkr from "./Rkr";
import Dictatorship from "./Dictatorship";
// Import other book sub-components here

const landingImage = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/28908417-7b00-457b-b7d7-23baaaf40985/VIKS1169.jpg?content-type=image%2Fjpeg";

class Books extends Component {
  render() {
    return (
      <div className="content">
        <BooksNav/>
        
        <Switch>
          {/* Landing page route - shows when at /books exactly */}
          <Route exact path="/books" render={() => (
            <div>
              <img className="d-block w-100" src={landingImage} alt="Books landing image" />
            </div>
          )} />
          
          {/* Sub-page routes - show carousels without landing image */}
          <Route path="/books/rkr" component={Rkr} />
          <Route path="/books/dictatorship" component={Dictatorship} />
          {/* Add more sub-routes as needed */}
        </Switch>
      </div>
    );
  }
}

export default Books;