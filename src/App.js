import './App.css';
import Title from './components/title.jsx'
import About from './components/about.jsx'
import Education from './components/education.jsx'
import Navigation from './components/navbar.jsx'

function App() {
  return (
    <div> 
      <div>
        <Navigation></Navigation>
      </div>
      <Title></Title>
      <About></About>
      <Education> </Education>
    </div>
    
  );
}

export default App;
