//React
import React, {useState, useEffect } from 'react';


//style
import s from './about.module.css';

//Constants
import { ABOUT_IMAGE, LOGO } from '../../Utils/Constants/Images';

//Bootstrap
import Button from 'react-bootstrap/Button';

const About = () => {

  return(   
    <div className={s.container}>
      <div className={s.subContainer}>
        <h1 className={s.title}>About the title</h1>
        <p className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque itaque aperiam explicabo? Voluptas, dolores! Dolor hic veniam ad sit voluptatum voluptatibus quos est libero placeat! Expedita velit reiciendis voluptatibus ab?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque itaque aperiam explicabo? Voluptas, dolores! Dolor hic veniam ad sit voluptatum voluptatibus quos est libero placeat! Expedita velit reiciendis voluptatibus ab?</p>
        <Button className={s.btn} variant="primary">Call to action</Button>
      </div>
      <img className={s.img} src={ABOUT_IMAGE} alt="Bailarines" />
    </div>
  )
}

export default About;