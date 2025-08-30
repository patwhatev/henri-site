import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Louise from "./Louise";
import Somewhere from "./Somewhere";

const paper = [
  {
    name: 'louise',
    className: 'Louise',
    id: 'louise',
    description: 'description goes here'
  },
  {
    name: 'somewhere',
    className: 'Somewhere',
    id: 'somewhere',
    description: 'description goes here'
  }
]

class PhotographsNav extends Component {
  constructor({match}) {
    super();
    this.match = this.props;
  }

  render() {
    return (
        <HashRouter>
        <div>
          <ul>
          {paper.map(({ name, id }) => (
            <li key={id}>
              <NavLink to={`/photos/paris/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="sub-content">
           <Route path={'/photos/paris/louise'} component={Louise}/>
           <Route path={'/photos/paris/somewhere'} component={Somewhere}/>
        </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default PhotographsNav;