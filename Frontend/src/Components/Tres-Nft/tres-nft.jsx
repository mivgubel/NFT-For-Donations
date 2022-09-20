//React
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { COLLECTION, COLLECTION_ELEMENT } from '../../Utils/Constants/Routes';

//style
import s from './tres-nft.module.css';

//Constants

const TresNft = ({causes, id}) => {
  const {collectionImage, container} = s;
  return(   
    <div className={container}>
        {
          causes.map( (cause, index) => {
            const collection = cause.collection;
            return(
              <NavLink className="nav-link" to={`${COLLECTION}/${id}/${COLLECTION_ELEMENT}/${index + 1}`} >
                <img className={collectionImage} key={index} src={collection[index].image} alt={`Img ${index + 1}`}/>
              </NavLink>
            );
          })
        }
    </div>
  )
}

export default TresNft;