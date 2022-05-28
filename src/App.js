import './App.css';
import Title from './components/title.jsx'
import About from './components/about.jsx'
import Experience from './components/experience.jsx'
import Navigation from './components/navbar.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'
import Socials from './components/socials.jsx'

function App() {
  return (
    <div className='content'> 
      <Navigation></Navigation>
      <Title></Title>
      <About></About>
      <Experience> </Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Socials></Socials>
      {/* <Title></Title>
      <About></About>
      <Experience> </Experience>
      <Projects></Projects>
      <Contact></Contact> */}
    </div>
    
  );
}

export default App;
