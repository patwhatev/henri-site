import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
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
        <HashRouter>
        <div>
          <ul>
          {paper.map(({ name, id }) => (
            <li key={id}>
              <NavLink to={`/photos/la/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="sub-content">
           <Route path={'/photos/la/hollywood'} component={Hollywood}/>
           <Route path={'/photos/la/metal'} component={Metal}/>
           <Route path={'/photos/la/perris'} component={Perris}/>
           <Route path={'/photos/la/studio'} component={Studio}/>
        </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default PhotographsNav;