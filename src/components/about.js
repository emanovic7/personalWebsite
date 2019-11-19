import React, { Component } from 'react';


class About extends Component {
  render(){
    return (
      <div className="about">
        I am the about page!
        <div className="homeImage">
          <img style={{width: '200px', height: '200 px'}} src="/images/homePageImage.jpg"/>
        </div>
      </div>
    )
  }
}


export default About;
