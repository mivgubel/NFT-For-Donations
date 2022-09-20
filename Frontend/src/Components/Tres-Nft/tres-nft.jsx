//React
import React, {useState, useEffect} from 'react';

//style
import s from './tres-nft.module.css';

//Constants

const TresNft = ({causes}) => {
  return(   
    <div className={s.container}>
        {
          causes.map( (cause, index) => {
            const collection = cause.collection;
            return(<img className={s.collectionImg} key={index} src={collection[index].image} alt={`Img ${index + 1}`}/>)
          })
        }
    </div>
  )
}

export default TresNft;