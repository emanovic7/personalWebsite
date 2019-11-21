import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const copyRight = () => {
  return(
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


class About extends Component {
  render(){
    return (
      <div className="about">
        <Container>
          <div className="homeImage">
            <img style={{width: '200px', height: '200 px'}} src="/images/homePageImage.jpg"/>
          </div>
        </Container>
          <copyRight />
      </div>
    )
  }
}


export default About;
