import React from 'react'
import {AiOutlineFileText,AiOutlineFileImage } from "react-icons/ai";
import { BiFilm } from "react-icons/bi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
function mammalab() {
  return (
    <div>
      <div>
      <nav>
      <ul>
        <li style={{marginTop: '90px'}}>
      <Link to="/Aniabout" style={{textDecoration: 'none'}}>  <AiOutlineFileText size='20px'/>Mammal about</Link></li>
      <li>
      <Link to="/Aniimage" style={{textDecoration: 'none'}}> <AiOutlineFileImage size='20px'/>Mammal images </Link>
        </li>
         <li>
         <Link to="/Animalvideo" style={{textDecoration: 'none'}}>  <BiFilm size='20px'/>Mammal video</Link>
        </li>
        </ul>
      
        </nav>
        </div>
    </div>
  )
}

export default mammalab
