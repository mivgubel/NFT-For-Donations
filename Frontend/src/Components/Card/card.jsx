//React
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CAUSES } from '../../Utils/Constants/Routes';

//style
import s from './card.module.css';

const CauseCard = ({collectionContractAddress, image, name, max_supply, presale_mint_start}) => {
  const {container, imageContainer, imageStyle, stateLive, stateSoon, titleStyle, subtitleStyle} = s;
  const now = new Date();
  const validaLive = () => {
    return now >= new Date(presale_mint_start).getTime();
  }

  return(   
    <div className={container}>
      <NavLink className={titleStyle} to={`${CAUSES}/${collectionContractAddress}`}>
      <div className={imageContainer}>
        <img className={imageStyle} src={image} alt={name}/>
        <p className={validaLive() ? stateLive : stateSoon}>{validaLive() ? "Live" : "Soon"}</p>
      </div>
      
        <p>{name}</p>
      
      <h6 className={subtitleStyle}>Total Supply : {max_supply} NFTs</h6>
      </NavLink>
    </div>
  )
}

export default CauseCard;