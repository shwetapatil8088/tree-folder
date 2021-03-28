import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function Aniimmage() {
  return (
    <div>
      <article>
    <img src="ma1.jpg">
        </img>
         
        <img src="ma2.jpg" style={{width:'100',cursor:'pointer', padding :'10px'}} ></img>
      
        <img src="ma3.jpg" style={{width:'100',cursor:'pointer',padding :'10px'}} ></img>
     
        <img src="ma4.jpg" style={{width:'100',cursor:'pointer',padding :'10px'}}></img> 
        
        <img src="ma5.jpg" style={{width:'100',cursor:'pointer',padding :'10px'}} ></img>
       
        <img src="ma6.jpg" style={{width:'100',cursor:'pointer',padding :'10px'}} ></img>
        
    
        <img src="ma7.jpg" style={{width:'100',cursor:'pointer',padding :'10px'}}></img>
        <img src="ma2.jpg" style={{width:'100',cursor:'pointer', padding :'10px'}} ></img>
        <img src="ma8.jpg" style={{width:'100',cursor:'pointer',padding :'10px'}}>
      </img>
       <img src="ma9.jpg" style={{width:'100',cursor:'pointer'}}></img>


     <ul>
       <Link to="/Mammal" style={{textDecoration: 'none'}}> 
     <button style={{backgroundcolor: 'aqua',margin:'30px', padding: '10px', float: 'right'}}> privious page</button></Link>

     <Link to="/Fish123" style={{textDecoration: 'none'}}> 
     <button style={{backgroundcolor: 'aqua',margin:'30px', padding: '10px', paddingRight:'20px', paddingLeft:'20px',float: 'right'}}> next</button></Link>
      
     </ul>

          </article>
          </div>
 )
}

export default Aniimmage
