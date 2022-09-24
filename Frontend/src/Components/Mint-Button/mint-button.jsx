//React
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//Bootstrap
import Button from 'react-bootstrap/Button';

//Constants
import {  MINT } from '../../Utils/Constants/Routes';

// Redux actions
import { getAllVisibleCauses } from '../../redux/actions';

const MintButton = ({collectionContractAddress}) => {
  //Dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllVisibleCauses());
<<<<<<< HEAD
  }, [ dispatch, collectionContractAddress ]);
  const causes = useSelector(state => state.allVisibleCauses);
  const cause = causes.filter(contract => (contract.address === collectionContractAddress))[0];
  const now = new Date();

  const validaLive = () => {
    return now >= new Date(cause?.presale_mint_start).getTime();
  }
  // const {state} = causes[id - 1];

  return(   
    <NavLink className={!validaLive() ? "hide" : ""} to={`${MINT}/${collectionContractAddress}`}>
=======
  }, [ dispatch, id ]);
  const causes = useSelector(state => state.allVisibleCauses);
  // const {state} = causes[id - 1];

  return(   
    <NavLink className={"state" === "Soon" ? "hide" : ""} to={`${MINT}/${id}`}>
>>>>>>> miting_develop
      <Button className="generalButton" variant="primary">Mint NFT</Button>
    </NavLink>
  )
}

export default MintButton;