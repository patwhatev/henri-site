import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";
import La from "./La";
import St from "./St";
import At from "./At";
import Paris from "./Paris";

const paper = [
  {
    name: 'los angeles',
    className: 'La',
    id: 'la',
    description: 'description goes here'
  },
  {
    name: 'st. tropez',
    className: 'St',
    id: 'st',
    description: 'description goes here'
  },
  {
    name: 'austin, tx',
    className: 'At',
    id: 'at',
    description: 'description goes here'
  },
  {
    name: 'paris',
    className: 'Paris',
    id: 'paris',
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
        <div>
          <ul>
  		    {paper.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/photos/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
        </div>
    );
  }
}
 
export default PhotographsNav;