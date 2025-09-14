import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter,
  useLocation
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

function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <h1></h1>
      <h1><a href="/#">HENRIALEXANDERLEVY</a></h1>
      
      {/* Hamburger Menu Button - Only visible on mobile */}
      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        <img src="/hamb-icon.png" alt="Menu" className="hamburger-icon" />
      </button>

      {/* Desktop Navigation - Hidden on mobile */}
      <ul className="header desktop-nav">
        <li><NavLink to="/paintings">Paintings</NavLink></li>
        <li><NavLink to="/assemblage">Assemblage</NavLink></li>
        <li><NavLink to="/paper">Works on paper</NavLink></li>
        <li><NavLink to="/photos">Photographs</NavLink></li>
        <li><NavLink to="/sculpture">Sculpture/Furniture</NavLink></li>
        <li><NavLink to="/books">Books/Zines</NavLink></li>
      </ul>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <ul>
          <li><NavLink 
            to="/paintings" 
            onClick={closeMobileMenu}
            className={isActive('/paintings') ? 'active' : ''}
          >Paintings</NavLink></li>
          <li><NavLink 
            to="/assemblage" 
            onClick={closeMobileMenu}
            className={isActive('/assemblage') ? 'active' : ''}
          >Assemblage</NavLink></li>
          <li><NavLink 
            to="/paper" 
            onClick={closeMobileMenu}
            className={isActive('/paper') ? 'active' : ''}
          >Works on paper</NavLink></li>
          <li><NavLink 
            to="/photos" 
            onClick={closeMobileMenu}
            className={isActive('/photos') ? 'active' : ''}
          >Photographs</NavLink></li>
          <li><NavLink 
            to="/sculpture" 
            onClick={closeMobileMenu}
            className={isActive('/sculpture') ? 'active' : ''}
          >Sculpture/Furniture</NavLink></li>
          <li><NavLink 
            to="/books" 
            onClick={closeMobileMenu}
            className={isActive('/books') ? 'active' : ''}
          >Books/Zines</NavLink></li>
        </ul>
      </div>
    </>
  );
}

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <Navigation />
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