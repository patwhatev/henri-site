import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";

const paper = [
  {
    name: '2016 - 2019',
    className: 'Paper2016to2020',
    id: '2016-2020',
    description: 'description goes here'
  },
  {
    name: '2021 - 2025',
    className: 'Paper2021to2025',
    id: '2021-2025',
    description: 'some other stuff'
  }
]

class PaperNav extends Component {
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
  		        <NavLink to={`/paper/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
        </div>
    );
  }
}
 
export default PaperNav;