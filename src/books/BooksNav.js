import React, { Component } from "react";
import {
  NavLink,
  
} from "react-router-dom";

const books = [
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
        <>
        <div>
          <ul>
  		    {books.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/books/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
        </div>
      </>
    );
  }
}
 
export default BooksNav;