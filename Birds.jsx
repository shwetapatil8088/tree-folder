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

function Mammal() {
  return (
    <div>
      <article>
    
    <h1>About</h1>
    Birds
    
    <div class="text">
      <ul >
          <li >
      <Link to="/Birdsabout" style={{textDecoration: 'none'}}>  <AiOutlineFileText size='90px'/></Link>
    
      </li>
      <li>
      <Link to="/Birdsimage" style={{textDecoration: 'none'}}>  <AiOutlineFileImage size='90px'/></Link>
        </li>
         <li>
         <Link to="/Birdsvideo" style={{textDecoration: 'none'}}>  <BiFilm size='90px'/></Link>
         </li>  
         </ul>
         <ul>
           <li >About</li>
           <li>images</li>
           <li>video</li>
         </ul>
         </div>


         <Link to="/Mammal" style={{textDecoration: 'none'}}> 
     <button style={{backgroundcolor: 'aqua',margin:'30px', padding: '10px', float: 'right'}}> privious page</button></Link>

     <Link to="/Fish123" style={{textDecoration: 'none'}}> 
     <button style={{backgroundcolor: 'aqua',margin:'30px', padding: '10px', paddingRight:'20px', paddingLeft:'20px',float: 'right'}}> next</button></Link>
         </article>
         </div>
  )
}

export default Mammal
