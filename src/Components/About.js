import React from 'react'
// import { Grid } from "@mui/material";

function About() {
  return (
    // <Grid container spacing={2} columns={16}>
    <div className='about'>
        <div className='aboutContainer'>
            <h1 className='about-title'>About the Creators</h1>
            {/* <Grid item> */}
            <img className="lauren-pic" src='https://i.imgur.com/Y9lz9It.png' alt="Lauren pic" />
            <section className='about-description'>
                <p>Hello, my name is Lauren and this is our project for phase 3 at Flatiron school using Ruby for our database and React.js for our frontend. I am pursuing a career change from teaching to tech with the goal to become a full-stack software engineer. I want to help modernize and develop educational technology that gives educators more resources for equitable education.</p>
                <a href="www.linkedin.com/in/lauren-erxleben">linkedin</a> 
                <br></br>
                <a href="https://github.com/laurennoelle">Github</a>
                <br></br>
                <br></br>
            {/* <img className='chris-pic' src=" " alt="Chris Pic" />
            <p>Chris about here</p> */}
            </section>
            {/* </Grid>
            <Grid item> */}
            <img className="lauren-pic" src='https://i.imgur.com/Y9lz9It.png' alt="Lauren pic" />
            <section className='about-description'>
                <p>Hello, my name is Lauren and this is our project for phase 3 at Flatiron school using Ruby for our database and React.js for our frontend. I am pursuing a career change from teaching to tech with the goal to become a full-stack software engineer. I want to help modernize and develop educational technology that gives educators more resources for equitable education.</p>
                <a href="www.linkedin.com/in/lauren-erxleben">linkedin</a> 
                <br></br>
                <a href="https://github.com/laurennoelle">Github</a>
                <br></br>
                <br></br>
            {/* <img className='chris-pic' src=" " alt="Chris Pic" />
            <p>Chris about here</p> */}
            </section>
            {/* </Grid> */}
        </div>







    </div>
    // </Grid>
  )
}

export default About