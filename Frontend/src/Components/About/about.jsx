//React
import React from 'react';

//style
import s from './about.module.css';

//Constants
import { ABOUT_IMAGE } from '../../Utils/Constants/Images';

//Bootstrap
import {Button, Col} from 'react-bootstrap';

const About = () => {
  const {container, subContainer, description, aboutImage} = s;
  return(   
    <div className={container}>
      <Col>
      <div className={subContainer}>
        
        <h1 className="bigTitle"> You can be solidarity</h1>
        <p className={description}>Solidarity is a project that supports social causes, mainly non-poverty and environmental conservation.
        It is a donation platform, through a collection of NFTs.
        </p>
        <p className={description}>
The project aims to help social causes and at the same time sponsor it with a monthly recurring income, derived from the return of the original donation.
Promoting transparency through the use of blockchain.</p>
        <Button className="generalButton lg"  variant="primary">Find a cause</Button>
      </div>
      </Col>
      <Col>
        <img className={aboutImage} src={ABOUT_IMAGE} alt="Bailarines" />
      </Col>
    </div>
  )
}

export default About;