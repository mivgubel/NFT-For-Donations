//React
import React, {useState, useEffect } from 'react';

//web3
import {ethers} from 'ethers';


//style
import s from './causes-home.module.css';

import CauseCard from '../Card/card';
import { CAUSES_INFO } from '../../Utils/Constants/causes';

const CausesHome = () => {
  const cards = CAUSES_INFO;
  const allCards = cards.map( (e, index) => 
    <CauseCard key={index} id={e.id} image={e.image} title={e.title} subtitle={e.subtitle} state={e.state}/>
  )
  return(   
    <div className={s.container}>
      <div className={s.subContainer}>
        <h1 className={s.title}>Causes onboard</h1>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
        <div className={s.cards} >
          {allCards}
        </div>
      </div>
    </div>
  )
}

export default CausesHome;