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

const MintButton = ({id}) => {
  //Dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllVisibleCauses());
  }, [ dispatch, id ]);
  const causes = useSelector(state => state.allVisibleCauses);
  // const {state} = causes[id - 1];

  return(   
    <NavLink className={"state" === "Soon" ? "hide" : ""} to={`${MINT}/${id}`}>
      <Button className="generalButton" variant="primary">Mint NFT</Button>
    </NavLink>
  )
}

export default MintButton;