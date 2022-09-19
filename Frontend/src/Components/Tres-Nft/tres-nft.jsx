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
import s from './tres-nft.module.css';
import { NavLink } from 'react-router-dom';
import { CAUSES } from '../../Utils/Constants/Routes';

//Constants

const TresNft = ({causes}) => {

  return(   
    <div className={s.container}>
        {
          causes.map( (cause, index) => {
            const {collection} = cause;
            return(<img className={s.collectionImg} key={index} src={collection[index]} alt={`Img ${index}`}/>)
          })
        }
    </div>
  )
}

export default TresNft;