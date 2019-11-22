import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import MuiLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

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


export default function About() {

   const classes = useStyles();


    return (
      <div className="about">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>

        <Grid item>
            <div className="bio">
              <h3>About Me</h3>
              <p>
                Hello, I am Emmanuel! I am a Software Engineer from Ghana based in NYC. I enjoy building all things complex
                and simple, especially with code. My background is in Physics, and I have worked in Engineering, my
                favourite being Solar Engineering. Some of my passions are Green Energy.

                These are some techonologies I have been working with
                  <div className="tech-stack-list">
                    <ul>
                      <li>JavaScript ES6+</li>
                      <li>React + Redux</li>
                      <li>Node.js</li>
                      <li>Ruby, Ruyb on Rails</li>
                      <li>HTML 5, (S)CSS</li>
                      <li>SQL, PostgreSQL</li>
                    </ul>
                And some other engineering technologies I enjoy
                     <ul>
                      <li>Matlab</li>
                      <li>CAD, 3D && 2D</li>
                     </ul>
                  </div>
              </p>
            </div>
          </Grid>
          <Grid item>
            <div className="homeImage">
              <img style={{width: '200px', height: '200 px'}} src="/images/homePageImage.jpg"/>
            </div>
          </Grid>

          </Grid>
        </Paper>
          <copyRight />
      </div>
    )
}
