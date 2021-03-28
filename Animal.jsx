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
import { BorderAll } from '@material-ui/icons';

function animal() {
  return (
    
    <article>
      
      <h1>Animals</h1>
      <p>Animals (also called Metazoa) are multicellular eukaryotic organisms that form the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and grow from a hollow sphere of cells, the blastula, during embryonic development.
        </p>
        <h3>
        Types of Animals
     </h3>

     <div class="text">
<ul >
          <li >
      <Link to="/Mammal" style={{textDecoration: 'none'}}>  <AiOutlineFileText size='90px'/></Link>
    
      </li>
      <li>
      <Link to="/Birds" style={{textDecoration: 'none'}}>  <AiOutlineFileText size='90px'/></Link>
        </li>
         <li>
         <Link to="/Fish123" style={{textDecoration: 'none'}}>  <AiOutlineFileText size='90px'/></Link>
         </li>  
         </ul>
         <ul>      
           <li >Mammals</li>
           <li>birds</li>
           <li>fish</li>
         </ul>

</div></article>
     
   
      
  )
}

export default animal
