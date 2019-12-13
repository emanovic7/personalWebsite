import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';





class About extends Component {

  render(){

    return (
      <div className="about">

      <Media>
        <img
          width={300}
          height={300}
          className="mr-3"
          src="/images/homePageImage.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
        <h3>About Me</h3>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
      </div>
    )

  }

}

export default About;
