import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

// import Assemblage from "./assemblage/Assemblage";
import Books from "./books/Books";
import Home from "./Home";
import Paintings from "./paintings/Paintings";
import Paper from "./paper/Paper";
import Photographs from "./photos/Photographs";
import Sculpture from "./sculpture/Sculpture";
import Assemblage from "./assemblage/Assemblage";
import Instrumentals from "./instrumentals/Instrumentals";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1></h1>
          <h1><a href="/#">HENRIALEXANDERLEVY</a></h1>
          <ul className="header">
            <li><NavLink to="/paintings">Paintings</NavLink></li>
            <li><NavLink to="/assemblage">Assemblage</NavLink></li>
            <li><NavLink to="/paper">Works on paper</NavLink></li>
            <li><NavLink to="/photos">Photographs</NavLink></li>
            <li><NavLink to="/sculpture">Sculpture/Furniture</NavLink></li>
            <li><NavLink to="/books">Books/Zines</NavLink></li>
            {/* <li><NavLink to="/instrumentals">Instrumentals</NavLink></li> */}
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/paintings/*" element={<Paintings />} />
              <Route path="/assemblage/*" element={<Assemblage />} />
              <Route path="/paper/*" element={<Paper />} />
              <Route path="/photos/*" element={<Photographs />} />
              <Route path="/sculpture/*" element={<Sculpture />} />
              <Route path="/books/*" element={<Books />} />
              {/* <Route path="/instrumentals/*" element={<Instrumentals />} /> */}
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;