
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact  component={Home}/>
        <Route path='/aboutme' component={AboutMe}/>
        <Route path='/experience' component={Experience}/>
        <Route path='/projects' component={Projects}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
