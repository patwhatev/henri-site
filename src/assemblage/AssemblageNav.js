import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  
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
        <>
        <div>
          <ul>
  		    {paper.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/assemblage/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
           <Routes>
             <Route path="la" element={<La />} />
           </Routes>
  		  </div>
        </div>
      </>
    );
  }
}
 
export default AssemblageNav;