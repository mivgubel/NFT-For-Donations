//React
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { COLLECTION, COLLECTION_ELEMENT } from '../../Utils/Constants/Routes';

//style
import s from './tres-nft.module.css';

//Constants

const TresNft = ({causes, contractAddress}) => {
  const {collectionImage, container} = s;
  const causasImage = ['../../../causa1.png'];
  return(   
    <div className={container}>
        {
          causes.map( (cause, index) => {
            const collection = cause.collection;
            return(
              // <NavLink key={index} className="nav-link" to={`${COLLECTION}/${contractAddress}/${COLLECTION_ELEMENT}/${index + 1}`} >
                // <img className={collectionImage} key={index} src={collection[index].image} alt={`Img ${index + 1}`}/>
                <img className={collectionImage} key={index} src={collection[index].image} alt={`Img ${index + 1}`}/>
              // </NavLink>
            );
          })
        }
    </div>
  )
}

export default TresNft;