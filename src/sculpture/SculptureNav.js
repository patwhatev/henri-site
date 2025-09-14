import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";


const sculptures = [
  {
    name: 'Cages',
    className: 'Cages',
    id: 'cages',
    description: 'description goes here'
  },
  {
    name: 'Chaises',
    className: 'Chaises',
    id: 'chaises',
    description: 'description goes here'
  },
  {
    name: 'Synthesizer Prison Unit',
    className: 'SynthesizerPrisonUnit',
    id: 'synthesizer-prison-unit',
    description: 'description goes here'
  },
  {
    name: 'Narcan Car',
    className: 'NarcanCar',
    id: 'narcan-car',
    description: 'description goes here'
  },
  {
    name: 'Objekt',
    className: 'Objekt',
    id: 'objekt',
    description: 'description goes here'
  },
]

class SculptureNav extends Component {
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <div>
          <ul>
  		    {sculptures.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/sculpture/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
        </div>
    );
  }
}
 
export default SculptureNav;