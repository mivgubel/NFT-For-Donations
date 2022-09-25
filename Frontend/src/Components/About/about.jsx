//React
import React from 'react';
import { NavLink } from 'react-router-dom';

//style
import s from './about.module.css';

//Constants
import { ABOUT_IMAGE } from '../../Utils/Constants/Images';

//Bootstrap
import Button from 'react-bootstrap/Button';
import { CAUSES } from '../../Utils/Constants/Routes';

const About = () => {
  const {container, subContainer, description, aboutImage} = s;
  return(   
    <div className={container}>
      <div className={subContainer}>
        <h1 className="bigTitle">About Solidarity</h1>
        <p className={description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque itaque aperiam explicabo? Voluptas, dolores! Dolor hic veniam ad sit voluptatum voluptatibus quos est libero placeat! Expedita velit reiciendis voluptatibus ab?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque itaque aperiam explicabo? Voluptas, dolores! Dolor hic veniam ad sit voluptatum voluptatibus quos est libero placeat! Expedita velit reiciendis voluptatibus ab?</p>
        <NavLink className="nav-link" to={CAUSES}>
          <Button className="generalButton" variant="primary">Call to action</Button>
        </NavLink>
      </div>
      <img className={aboutImage} src={ABOUT_IMAGE} alt="Bailarines" />
    </div>
  )
}

export default About;