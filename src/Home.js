import React, { Component } from "react";
 
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 400
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth <= 400
    });
  }

  render() {
      const { isMobile } = this.state;
      const formatParam = isMobile ? "?format=100w" : "?format=2500w";
      
      const x_home =   "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9495235c-133a-4e8b-aa29-bdf6bec0d478/Assemblage_04.jpg?content-type=image%2Fjpeg";
      const alt_2_home = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/a7d0792b-ec14-41bc-8194-e2359d721320/9134-21a.JPG?content-type=image%2Fjpeg";
      const og_home = "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe3c3dc97713cd08faa3/1570504266192/WEBSITE+COVER+PHOTO.TIF.png";
      const show_info = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/94988cb5-1c67-4d31-b102-96c975c48314/Russia+Show+Info.jpg?content-type=image%2Fjpeg";
      
      return (
      <div>
        <img src={`${x_home}${formatParam}`} alt="" className="home-img" />
        <br></br>
        <img src={`${show_info}${formatParam}`} alt="" className="show-details" style={{
                width: '60%',
              }}  />

      </div>
    );
  }
}

export default Home;