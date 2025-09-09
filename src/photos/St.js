import React, { Component } from "react";
import {
  Route,
  NavLink,
  
} from "react-router-dom";
import Eden from "./Eden";

const paper = [
  {
    name: 'eden roc',
    className: 'Eden',
    id: 'eden',
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
        <>
        <div>
          <ul>
          {paper.map(({ name, id }) => (
            <li key={id}>
              <NavLink to={`/photos/st/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="sub-content">
           <Route path={'/photos/st/eden'} component={Eden}/>
        </div>
        </div>
      </>
    );
  }
}
 
export default PhotographsNav;