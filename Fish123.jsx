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

function Fish123() {
  return (
    <div>
  


      <article>
    
    <h1>About</h1>
    Fish
    
    <div class="text">
      <ul >
          <li >
      <Link to="/Fishabout" style={{textDecoration: 'none'}}>  <AiOutlineFileText size='90px'/></Link>
    
      </li>
      <li>
      <Link to="/Fishimage" style={{textDecoration: 'none'}}>  <AiOutlineFileImage size='90px'/></Link>
        </li>
         <li>
         <Link to="/Fishvideo" style={{textDecoration: 'none'}}>  <BiFilm size='90px'/></Link>
         </li>  
         </ul>
         <ul>
           <li >About</li>
           <li>images</li>
           <li>video</li>
         </ul>
         </div>



         <Link to="/Birds" style={{textDecoration: 'none'}}> 
     <button style={{backgroundcolor: 'aqua',margin:'30px', padding: '10px', float: 'right'}}> privious page</button></Link>

    
         </article>
         </div>
  

 
  )
}

export default Fish123
