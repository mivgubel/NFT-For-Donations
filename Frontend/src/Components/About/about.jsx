//React
import React from 'react';

//style
import s from './about.module.css';

//Constants
import { ABOUT_IMAGE } from '../../Utils/Constants/Images';

//Bootstrap
import Button from 'react-bootstrap/Button';

const About = () => {
  const {container, subContainer, description, aboutImage} = s;
  return(   
    <div className={container}>
      <div className={subContainer}>
        <h1 className="bigTitle">About the title</h1>
        <p className={description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque itaque aperiam explicabo? Voluptas, dolores! Dolor hic veniam ad sit voluptatum voluptatibus quos est libero placeat! Expedita velit reiciendis voluptatibus ab?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque itaque aperiam explicabo? Voluptas, dolores! Dolor hic veniam ad sit voluptatum voluptatibus quos est libero placeat! Expedita velit reiciendis voluptatibus ab?</p>
        <Button className="generalButton" variant="primary">Call to action</Button>
      </div>
      <img className={aboutImage} src={ABOUT_IMAGE} alt="Bailarines" />
    </div>
  )
}

export default About;