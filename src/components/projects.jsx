import React, { Component } from 'react';
import '../styles/projects.css'
import miniamz from '../media/amazon-home.jpg';
import rsrch from '../media/poster.jpg';
import btd from '../media/btd-cover.jpg';



class Projects extends Component {
    render() {
      return (
        <div className="projects-container" id="projects">
         <div className="project-header">
            <h1>Projects</h1>
          </div>
          <div className="feature-container" data-visible="all">
              <div className="left-img">
                <img src={miniamz} alt="Mini-Amazon Home Screen"/>
              </div>
              <div className="right-text">
                <h2>Mini-Amazon</h2>
                <p> A miniature version of Amazon's marketplace. This full-stack project simulates an online marketplace 
                  with thousands of buyers, sellers, and products. Back-end built using Flask on a PostgreSQL database with HTML/CSS front-end.</p>
              </div>
          </div>
          <div className="feature-container" data-visible="desktop-only">
              <div className="left-text">
                <h2>Oncology Research</h2>
                <p>Research project conducted under Dr. Andrew Allen, Ph.D. Using memory-efficient bit-vectors to represent cancer mutations in the human genome. Seeking to 
                  identify significant cancer-inducing mutations in non-coding DNA.</p>
              </div>
              <div className="right-img">
                <img src={rsrch} alt="Research Poster"/>
              </div>
          </div>
          <div className="feature-container" data-visible="mobile-only">
              <div className="left-img">
                <img src={rsrch} alt="Research Poster"/>
              </div>
              <div className="left-text">
                <h2>Oncology Research</h2>
                <p>Research project conducted under Dr. Andrew Allen, Ph.D. Using memory-efficient bit-vectors to represent cancer mutations in the human genome. Seeking to 
                  identify significant cancer-inducing mutations in non-coding DNA.</p>
              </div>
              
          </div>
          <div className="feature-container" data-visible="all">
              <div className="left-img">
                <img src={btd} alt="Bloons Tower Defense Game"/>
              </div>
              <div className="right-text">
                <h2>Bloons Tower Defense</h2>
                <p> Recreation of the popular Bloons Tower Defense game. Back-end built using Java and front-end using JavaFX 
                  with incorporation of SOLID principles. Final project for CS 307 (Software Design) at Duke. </p>
              </div>
          </div>
        </div>
      )
    }
  }
  

  export default Projects; 