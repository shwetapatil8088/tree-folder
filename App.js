import logo from './logo.svg';
import Page1 from "./Page1";
import Animal from "./Animal";
import Mammal from "./Mammal";
import Aniabout from "./Aniabout";
import Aniimmage from "./Aniimmage";
// import Anivideo from "./Anivideo";
import Birds from "./Birds";
import Birdsabout from "./Birdsabout";
import Birdsimage from "./Birdsimage"
import BirdsVideo from "./BirdsVideo";
import Fish123 from "./Fish123";
import Fishabout from "./Fishabout";
import Fishimage from "./Fishimage";
import Fishvideo from "./Fishvideo";
import { BiFilm } from "react-icons/bi";
// import Myjs from "./Myjs";
// import TreeList from "./TreeList";
import {AiOutlineFileText,AiOutlineFileImage } from 
"react-icons/ai";
import Animalvideo from "./Animalvideo";
// import Navbar from "./Navbar";


// import { FaGithub } from 'react-icons/fa';
import './page1.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { BorderAll } from '@material-ui/icons';



function App() {
  return (
    <Router>
    <div>
      <header>
         <ul>
         <li>
            <Link to="/Animal" style={{textDecoration: 'none'}}>Animal</Link>
          </li> 
          <Link to="/Animal" style={{textDecoration: 'none'}}>Animal</Link>
          <li>
            <Link to="/Mammal" style={{textDecoration: 'none'}}>mammal</Link>
          </li>
        
          <li>
            <Link to="/Aniabout" style={{textDecoration: 'none' }}>Home</Link>
          </li> 
          <li>
            <Link to="/Aniimmage" style={{textDecoration: 'none'}}>animal image</Link>
          </li>
          <li>
            <Link to="/Animalvideo" style={{textDecoration: 'none'}}>animal video</Link>
          </li> 
          <li>
            <Link to="/Birds" style={{textDecoration: 'none'}}>birds</Link>
          </li>
           <li>
            <Link to="/Birdsabout" style={{textDecoration: 'none'}}>birdsabout</Link>
          </li> 
          <li>
            <Link to="/Birdsimage" style={{textDecoration: 'none'}}>birdsimage</Link>
          </li>
          <li>
            <Link to="/BirdsVideo" style={{textDecoration: 'none'}}>birdsvideo</Link>
          </li>
          <li>
            <Link to="/Fish123" style={{textDecoration: 'none'}}>fish</Link>
          </li>
          <li>
            <Link to="/Fishabout" style={{textDecoration: 'none'}}>fish about</Link>
          </li>
          <li>
            <Link to="/Fishimage" style={{textDecoration: 'none'}}>fish image</Link>
          </li>
          <li>
            <Link to="/Fishvideo" style={{textDecoration: 'none'}}>Fishvideo</Link>
          </li>
           </ul>
          </header>
          <header>
  <h2>Animal</h2>
</header>

       <nav>
   
        <ul id="myUL">
        <li><span class="fa fa-folder">Animals</span>
       
        </li>
        </ul>
        </nav>
      <Switch>
        <Route path="/Aniabout">
          <Aniabout />
        </Route>
        <Route path="/Aniimmage">
          <Aniimmage />
        </Route>
        <Route path="/Animal">
          <Animal />
        </Route>
         <Route path="/Animalvideo">
          <Animalvideo />
        </Route> 
        <Route path="/Mammal">
          <Mammal />
        </Route>
         
        <Route path="/Birds">
          < Birds />
        </Route>
        <Route path="/Birdsabout">
          <Birdsabout />
          </Route> 
          <Route path="/Birdsimage">
          <Birdsimage />
          </Route>
           <Route path="/BirdsVideo">
          <BirdsVideo/>
           </Route> 
          <Route path="/Fish123">
          <Fish123 />
          </Route> 
          <Route path="/Fishabout">
          <Fishabout />
          </Route>
          <Route path="/Fishimage">
          <Fishimage />
          </Route> 
          <Route path="/Fishvideo">
          <Fishvideo />
          </Route>
          {/* <Route path="/Myjs">
          <Myjs />
          </Route>   */}
          {/* <Route path="/TreeList">
          <TreeList />
          </Route>  */}
          </Switch>
          </div>
          </Router>
);
}
export default App;
