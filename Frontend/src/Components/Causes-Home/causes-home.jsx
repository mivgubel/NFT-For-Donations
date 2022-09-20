//React
import React from 'react';

//style
import s from './causes-home.module.css';

//Components
import CauseCard from '../Card/card';

//Constants
import { CAUSES_INFO } from '../../Utils/Constants/causes';

const CausesHome = () => {
  const {container, subContainer, title, cardsContainer} = s;
  const cards = CAUSES_INFO;
  const allCards = cards.map( ({id, image, title, subtitle, state}, index) => 
    <CauseCard key={index} id={id} image={image} title={title} subtitle={subtitle} state={state}/>
  );
  return(   
    <div className={container}>
      <div className={subContainer}>
        <h1 className={title}>Causes onboard</h1>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
        <div className={cardsContainer} >
          {allCards}
        </div>
      </div>
    </div>
  )
}

export default CausesHome;