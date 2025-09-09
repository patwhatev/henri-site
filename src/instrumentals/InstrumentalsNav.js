import React, { Component } from "react";
import {
  NavLink,
  
} from "react-router-dom";

const instrumentals = [
  {
    name: 'Dictatorship',
    className: 'Dictatorship',
    id: 'dictatorship',
    description: 'description goes here'
  },
  {
    name: 'Reverse Keith Richards',
    className: 'Rkr',
    id: 'rkr',
    description: 'description goes here'
  }

]

class InstrumentalsNav extends Component {
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <>
        <div>
          <ul>
  		    {instrumentals.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/instrumentals/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
        </div>
      </>
    );
  }
}
 
export default InstrumentalsNav;