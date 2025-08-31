import React, { Component } from "react";
import {
  NavLink,
  HashRouter
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

class BooksNav extends Component {
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <HashRouter>
        <div>
          <ul>
  		    {books.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/books/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
        </div>
      </HashRouter>
    );
  }
}
 
export default BooksNav;