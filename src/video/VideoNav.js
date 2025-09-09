import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  
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
        <>
        <div>
          <ul>
  		    {videos.map(({ name, id }) => (
  		      <li key={id}>
  		        <NavLink to={`/videos/${id}`}>{name}</NavLink>
  		      </li>
  		    ))}
  		  </ul>
  		  <div className="sub-content">
           <Routes>
             <Route path="aluminum" element={<Aluminum />} />
             <Route path="government" element={<Government />} />
             <Route path="paris" element={<Paris />} />
             <Route path="stokholm" element={<Stokholm />} />
           </Routes>
  		  </div>
        </div>
      </>
    );
  }
}
 
export default VideoNav;