import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";


const paintings = [
  {
    name: 'Black Paintings',
    className: 'BlackPaintings',
    id: 'black-paintings',
    description: 'description goes here'
  },
  {
    name: 'Paintings',
    className: 'Paintings2',
    id: 'paintings2',
    description: 'description goes here'
  },
  {
    name: 'Graphs',
    className: 'Graphs',
    id: 'graphs',
    description: 'description goes here'
  }
]

class PaintingsNav extends Component {
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <div>
          <ul>
  		    {paintings.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/paintings/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
        </div>
    );
  }
}
 
export default PaintingsNav;