import React, { Component } from 'react';
import '../styles/navbar.css';
// import logo from '../media/logo.png';

class Navigation extends Component {
    
  constructor(props){
    super(props);

    this.state = {
      open: "false",
      toggleOpen: "false",
      // clickOpen:"false",
      prevScrollPos: window.pageYOffset,
      scrollVisible: "true",
    };

    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleToggle = () => {
    if (this.state.open === "false" && this.state.toggleOpen === "true"){
      this.setState({open: "true", toggleOpen: "false"});
    } else if (this.state.open === "false"){
      this.setState({open: "true"});
    } else{
      this.setState({open: "false"});      
    }
  };

  handleScroll = () => {
    if (this.state.open === "true"){
      this.setState({scrollVisible: "true"});
      return;
    }

    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;

    const visible = prevScrollpos > currentScrollPos;
    this.setState({prevScrollpos: currentScrollPos});

    if (visible){
      this.setState({scrollVisible: "true"});
    }else{
      this.setState({scrollVisible: "false"});
    }
  };

  handleClickOutside(event) {
    console.log(event.target.id);
    if (this.state.toggleOpen === "false"){
      this.setState({toggleOpen: "true"})

    }
    else if (this.ref.current && !this.ref.current.contains(event.target)) {
      this.setState({open: "false",toggleOpen: "false"});
    } 
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener('click', this.handleClickOutside);
  }
  render() {
      return (
        <div className="nav-wrapper" data-visible={this.state.scrollVisible}>
        <div className="nav-container">
          {/* <div className="logo">
            <a href="#title"><img src={logo} alt="Logo"/></a>
          </div> */}
          <div className="mobile-nav-toggle" aria-controls="navigation" aria-expanded={this.state.open}
          onClick={this.handleToggle} data-visible={this.state.open}>
              <div/>
              <div/>
              <div/>
          </div>
          <nav id="navigation" className="navbar" >
            <ul className="nav-menu" data-visible={this.state.open} ref={this.ref}>
              <li><a href="#about" className="nav-links" onClick={this.handleToggle}> <span aria-hidden="true">00</span>About Me</a></li>
              <li><a href="#experience" className="nav-links" onClick={this.handleToggle}><span aria-hidden="true">01</span>Experience</a></li>
              <li><a href="#projects" className="nav-links" onClick={this.handleToggle}><span aria-hidden="true">02</span>Projects</a></li>
              <li><a href="#contact" className="nav-links" onClick={this.handleToggle}><span aria-hidden="true">03</span>Contact</a></li>

            </ul>
          </nav>
        </div>
        </div>
      )
    }
  }
  

  export default Navigation; 