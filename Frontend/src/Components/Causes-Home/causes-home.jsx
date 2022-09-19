//React
import React, {useState, useEffect } from 'react';

//web3
import {ethers} from 'ethers';

//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


//style
import s from './causes-home.module.css';

//Constants
import { CAUSES, CAUSE_SUB_PATH, HOME, ROUTES_WITH_SEARCH, USER_DASHBOARD } from '../../Utils/Constants/Routes';
import WalletConnectBtn from '../Wallet-Connect-btn/wallet-connect-btn';
import { NavLink } from 'react-router-dom';
import { ABOUT_IMAGE, LOGO } from '../../Utils/Constants/Images';

import Button from 'react-bootstrap/Button';
import CauseCard from '../Card/card';
import { Indexed } from 'ethers/lib/utils';
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