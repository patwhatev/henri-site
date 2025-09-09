import React, { Component } from "react";
import {
  Route,
  NavLink,
  
} from "react-router-dom";
import Korean from "./Korean";

const paper = [
  {
    name: 'Korean punkband tile floors and cops',
    className: 'Korean',
    id: 'korean',
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
              <NavLink to={`/photos/at/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="sub-content">
           <Route path={'/photos/at/korean'} component={Korean}/>
        </div>
        </div>
      </>
    );
  }
}
 
export default PhotographsNav;