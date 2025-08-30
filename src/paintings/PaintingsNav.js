import React, { Component } from "react";
import {
  NavLink,
  HashRouter
} from "react-router-dom";


const paintings = [
  {
    name: 'Black Paintings',
    className: 'BlackPaintings',
    id: 'black-paintings',
    description: 'description goes here'
  },
  {
    name: 'Graphs',
    className: 'Graphs',
    id: 'graphs',
    description: 'description goes here'
  },
  {
    name: 'Valet',
    className: 'Valet',
    id: 'valet',
    description: 'description goes here'
  },
  {
    name: 'Heroin',
    className: 'Heroin',
    id: 'heroin',
    description: 'some other stuff'
  }
]

class PaintingsNav extends Component {
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <HashRouter>
        <div>
          <ul>
  		    {paintings.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/paintings/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
        </div>
      </HashRouter>
    );
  }
}
 
export default PaintingsNav;