import React from "react";
// import { Grid } from "@mui/material";

function About() {
  return (
    // <Grid container spacing={2} columns={16}>
    <div className="about">
      <div className="aboutContainer">
        <h1 className="about-title">About the Creators</h1>
        <section className="indent-1">
          <section className="about-description-1">
            <img
              className="lauren-pic"
              src="https://i.imgur.com/Y9lz9It.png"
              alt="Lauren pic"
            />
            <p>
              Hello, my name is Lauren and this is our project for phase 3 at
              Flatiron school using Ruby for our database and React.js for our
              frontend. I am pursuing a career change from teaching to tech with
              the goal to become a full-stack software engineer. I want to help
              modernize and develop educational technology that gives educators
              more resources for equitable education.
            </p>
            <a
              className="linkedin-icon"
              href="https://linkedin.com/in/lauren-erxleben"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              className="github-icon"
              href="https://github.com/laurennoelle"
              target="_blank"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>

            <br></br>
            <br></br>
            <br></br>
          </section>

          <section className="about-description-2">
            <img
              className="lauren-pic"
              src="https://i.imgur.com/Y9lz9It.png"
              alt="Lauren pic"
            />
            <p>
              My name is Chris Hendricks. I left the retail industrsy to become
              a full stack developer. HTML, CSS, JavaScript, React, Ruby and
              Ruby on rails. Passionate and driven software engineer, person and
              friend.
            </p>
            <a className="linkedin-icon" href="" target="_blank">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a className="github-icon" href="" target="_blank">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <br></br>
            <br></br>
            <br></br>
          </section>
        </section>
      </div>
    </div>
    // </Grid>
  );
}

export default About;
