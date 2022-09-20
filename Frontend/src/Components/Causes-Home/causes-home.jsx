//React
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//style
import s from './causes-home.module.css';

//Components
import CauseCard from '../Card/card';

//Constants
import { getAllCauses } from '../../redux/actions';

const CausesHome = () => {
  const {container, subContainer, title, cardsContainer} = s;

  //Dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllCauses());
  }, [ dispatch ]);
  const cards = useSelector(state => state.allCauses);

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