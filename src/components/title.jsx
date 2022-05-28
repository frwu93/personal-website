import React, { Component } from 'react';
import '../styles/title.css';
import me from '../media/me.jpg';
import Typed from 'react-typed';
import { FaArrowDown } from "react-icons/fa";

class Title extends Component {
    render() {
      return (
        <div className="title-container" id="title">
          <div className='title'>
            <div className="wrapper">
              <p className='greeting'>Hi, my name is</p>
              <h1 className='name'>Franklin Wu</h1>
              <h2 className='school'>CS @ Duke</h2>
              <div className='typer'>
                <Typed
                    typeSpeed={50}
                    backSpeed={50}
                    strings={[
                      "I'm a coder.",
                      "I'm a thinker.",
                      "I'm a problem solver.",
                      "Scroll down to learn more about me!"
                    ]}
                    backDelay={1500}
                    startDelay={1000}
                    showCursor
                    cursorChar="|"
                  />
              </div>
            </div>
            <img src={me} alt="Me" className='me'/>
          </div>
          <div id="scroll">
            <a href='#about'><FaArrowDown size={20} className='arrow' id='arrow'/></a>
          </div>
        </div>
      )
    }
  }
  
  export default Title; 