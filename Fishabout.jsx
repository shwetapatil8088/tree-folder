import React from 'react'
import Fish from "./Fish123";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
function Fishabout() {
  return (
    <div>
    <article>
  
    <h1>About fish</h1>
    <h2>What is a fish?</h2>
     <h5>The cyprinid fish (8mm) and the whale shark (12m) are some of the smallest and largest fish in the sea.
      At first, this might seem like an easy question to answer, but it is difficult to define what makes a fish a fish because there is so much diversity among animals that we consider to be fishes. There are more than 27,900 species of fishes alive today, living in marine and freshwaters, in environments as hot as 104°F/40°C and as cold as 28°F/-2°C, and ranging in length from 0.3 inches/8 mm to 39 feet/12 m. What characteristics unite such a diverse group of animals?</h5>
      <h4>all fishes ....</h4>
          <p style={{font:'10px'}}>have a brain protected by a braincase and an obvious head region with eyes, teeth, and other sensory organs
          </p>
     
      <h4>Most fishes  ....</h4>
    <p style={{font:'10px'}}>
          are vertebrates with vertebrae protecting the spinal cord
        </p>

        <p style={{font:'10px'}}>
          live in water
        </p>

        <p style={{font:'10px'}}>breathe primarily with gills rather than lungs</p>

      <p style={{font:'10px'}}>have paired limbs, in the form of fins that aid in locomotion</p>

      <p style={{font:'10px'}}>
        are unable to regulate their own internal body temperatures
      </p>

      <p style={{font:'10px'}}>
        are covered with scales that protect their bodies
      </p>

 <Link to="/Fish123" style={{textDecoration: 'none'}}> 
     <button style={{backgroundcolor: 'aqua',margin:'30px', padding: '10px', float: 'right'}}> privious page</button></Link>

     <Link to="/Fishimage" style={{textDecoration: 'none'}}> 
     <button style={{backgroundcolor: 'aqua',margin:'30px', padding: '10px', paddingRight:'20px', paddingLeft:'20px',float: 'right'}}> next</button></Link>





  {/* <button style={{backgroundcolor: 'aqua', margin:'30px',padding: '10px', float: 'right'}}><link to="/Fish">previous page</link></button> */}
     */}
</article>

  </div>
)
}

export default Fishabout
