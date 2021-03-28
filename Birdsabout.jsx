import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function Birdsabout() {
  return (
    <div>
      <article>
    
    <h1>About Birds</h1>
    <h5>Birds are vertebrates (animals with backbones) with wings and feathers. Most birds can fly, using powerful muscles to flap their wings. ... Birds' bodies are covered with a light, tough layer of feathers and they have very light skeletons. Instead of teeth, they have hornlike beaks, or bills.</h5>
    <p>American Expedition is proud to present interesting information, educational facts, and full-color artwork & photos of America's wild birds, including backyard feeder birds like Northern Cardinals, Eastern Bluebirds, American Goldfinches, Ruby Throated Hummingbirds, Chickadees, Blue Jays, Downy Woodpeckers and Nuthatches; Wild Birds (Western Meadowlarks and Northern Mockingbirds), Birds of Prey (Bald Eagles and Great Horned Owls); and birds of the water (Loons, Mallards, Canada Geese, Great Blue Herons, and Wood Ducks).

    </p>
   
    <Link to="/Mammal" style={{textDecoration: 'none'}}> 
     <button style={{backgroundcolor: 'aqua',margin:'30px', padding: '10px', float: 'right'}}> privious page</button></Link>

     <Link to="/Fish123" style={{textDecoration: 'none'}}> 
     <button style={{backgroundcolor: 'aqua',margin:'30px', padding: '10px', paddingRight:'20px', paddingLeft:'20px',float: 'right'}}> next</button></Link>
      
  </article>
    </div>
  )
}

export default Birdsabout
