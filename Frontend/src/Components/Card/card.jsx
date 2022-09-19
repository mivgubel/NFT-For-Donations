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
import s from './card.module.css';
import { NavLink } from 'react-router-dom';
import { CAUSES } from '../../Utils/Constants/Routes';

//Constants

const CauseCard = ({id, image, title, subtitle, state}) => {

  const validaLive = (state) => {
    return state === 'Live';
  }

  return(   
    <div className={s.container}>
      <div className={s.imgDiv}>
        <img className={s.img} src={image} alt={title}/>
        <p className={validaLive(state) ? s.stateLive : s.stateSoon}>{state}</p>
      </div>
      <NavLink className={s.title} to={`${CAUSES}/${id}`}>{title}</NavLink>
      <h6 className={s.subtitle}>{subtitle}</h6>
    </div>
  )
}

export default CauseCard;