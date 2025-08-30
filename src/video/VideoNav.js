import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Aluminum from "./Aluminum";
import Government from "./Government";
import Paris from "./Paris";
import Stokholm from "./Stokholm";

const videos = [
  {
    name: 'Aluminum Tastes Like Fear Trailer',
    className: 'Aluminum',
    id: 'aluminum',
    description: 'description goes here',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: 'Government',
    className: 'Government',
    id: 'government',
    description: 'description goes here',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: 'Paris',
    className: 'Paris',
    id: 'paris',
    description: 'description goes here',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  },
  {
    name: 'Stokholm',
    className: 'Stokholm',
    id: 'stokholm',
    description: 'description goes here',
    resources: [
      'https://miro.medium.com/max/10944/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg'
    ]
  }
]

class VideoNav extends Component {
	constructor({match}) {
		super();
		this.match = this.props;
	}

  render() {
    return (
        <HashRouter>
        <div>
          <ul>
  		    {videos.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/videos/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
  		     <Route path={'/videos/aluminum'} component={Aluminum}/>
  		     <Route path={'/videos/government'} component={Government}/>
  		     <Route path={'/videos/paris'} component={Paris}/>
  		     <Route path={'/videos/stokholm'} component={Stokholm}/>
  		  </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default VideoNav;