import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Hollywood from "./Hollywood";
import Metal from "./Metal";
import Perris from "./Perris";
import Studio from "./Studio";

const paper = [
  {
    name: 'hollywood hills',
    className: 'Hollywood',
    id: 'hollywood',
    description: 'description goes here'
  },
  {
    name: 'backyard metal show',
    className: 'Metal',
    id: 'metal',
    description: 'description goes here',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: 'perris speedway',
    className: 'Perris',
    id: 'perris',
    description: 'description goes here',
  },
  {
    name: 'studio',
    className: 'Studio',
    id: 'studio',
    description: 'description goes here',
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
              <NavLink to={`/photos/la/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <Routes>
           <Route path="hollywood" element={<Hollywood />} />
           <Route path="metal" element={<Metal />} />
           <Route path="perris" element={<Perris />} />
           <Route path="studio" element={<Studio />} />
        </Routes>
        </div>
    );
  }
}
 
export default PhotographsNav;