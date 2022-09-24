//React
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//style
import s from './causes-home.module.css';

//Components
import CauseCard from '../Card/card';

//Constants
import { getAllVisibleCauses } from '../../redux/actions';

const CausesHome = () => {
  const {container, subContainer, title, cardsContainer} = s;

  //Dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllVisibleCauses());
  }, [ dispatch ]);
  const cards = useSelector(state => state.allVisibleCauses);
  const allCards = cards.map( ({address, image, name, max_supply, presale_mint_start}, index) => 
    <CauseCard key={index} collectionContractAddress={address} image={image} name={name} max_supply={max_supply} presale_mint_start={presale_mint_start}/>
  );

  return(   
    <div className={container}>
      <div className={subContainer}>
        <h1 className={title}>Causes onboard</h1>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
        <div className={cardsContainer} >
          {allCards.slice(0,3)}
        </div>
      </div>
    </div>
  )
}

export default CausesHome;