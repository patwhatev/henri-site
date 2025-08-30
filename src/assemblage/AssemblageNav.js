import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import La from "./La";

const paper = [
  {
    name: 'los angeles',
    className: 'La',
    id: 'la',
    description: 'description goes here'
  },
]

class AssemblageNav extends Component {
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
  		        <NavLink to={`/assemblage/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
           <Route path={'/assemblage/la'} component={La}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default AssemblageNav;