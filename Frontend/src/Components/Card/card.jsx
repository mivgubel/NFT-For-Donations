//React
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CAUSES } from '../../Utils/Constants/Routes';

//style
import s from './card.module.css';

const CauseCard = ({id, image, title, subtitle, state}) => {
  const {container, imageContainer, imageStyle, stateLive, stateSoon, titleStyle, subtitleStyle} = s;

  const validaLive = (state) => {
    return state === 'Live';
  }

  return(   
    <div className={container}>
      <div className={imageContainer}>
        <img className={imageStyle} src={image} alt={title}/>
        <p className={validaLive(state) ? stateLive : stateSoon}>{state}</p>
      </div>
      <NavLink className={titleStyle} to={`${CAUSES}/${id}`}>{title}</NavLink>
      <h6 className={subtitleStyle}>{subtitle}</h6>
    </div>
  )
}

export default CauseCard;