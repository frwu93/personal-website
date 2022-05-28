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
          <div className="resume-wrapper">
            <a href="./FranklinWu_ResumeCS.pdf" target="_blank" className='resume'>View Resume</a>
          </div>
          <div className="socials-mobile">
            <a href="https://github.com/frwu93" target="_blank" rel="nofollow noopener noreferrer" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>

            <a href="https://www.linkedin.com/in/franklin-wu6/" target="_blank" rel="nofollow noopener noreferrer" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
          </div>
        </div>
      )
    }
  }
  

  export default About; 