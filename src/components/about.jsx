import React, { Component } from 'react';
import me from '../media/me.jpg';

import '../styles/about.css';

class About extends Component {
    render() {
      return (
        <div className="about-container" id="about">
          <div className="about-me-header">
            <h1>About Me</h1>
          </div>
          <img src={me} alt="Me" className='me-mobile'/>
          <div className="about-me-text">
            <p>
              Hi, I'm Franklin! I'm currently a junior studying at Duke University majoring in Computer Science with a concentration in AI/ML and minoring in Biology and Chemistry.
              My interests lie broadly at the intersection between technology and medicine. In particular, I'm passionate about exploring ways in which bioinformatics, machine learning, and software
              can improve health outcomes across the spectrum.
              <br/><br/>
              On campus, I'm a Data Analyst for the Duke Impact Investing Group, where I help take on pro-bono projects for small-scale companies.
              Last semester, my team and I used website traffic and feature usage data to suggest a redesign for one company's UI. Additionally,
              I am a teaching assistant for the Data Structures and Algorithms class, the largest and most popular CS class at Duke.
              Finally, I also work with several professors in the Computational Biology Department, conducting research on cancer mutations
              and snoRNAs using whole genome sequencing.
              <br/><br/>
              This past summer, I was a software development engineer intern at Amazon Web Services (AWS) in Boston, where I worked on machine learning pipelines for 
              the Gandalf team. This coming summer, I will be working as a software engineer intern at Meta in NYC!
              <br/><br/>
              In my free time, you can find me shooting hoops, solving the latest NYT crossword, or trying to read a book.
            </p>
          </div>
          
          
        </div>
      )
    }
  }
  

  export default About; 