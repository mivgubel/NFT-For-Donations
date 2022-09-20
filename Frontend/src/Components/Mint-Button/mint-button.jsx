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
import { getAllCauses } from '../../redux/actions';

const MintButton = ({id}) => {
  //Dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllCauses());
  }, [ dispatch, id ]);
  const causes = useSelector(state => state.allCauses);
  const {state} = causes[id - 1];

  return(   
    <NavLink className={state === "Soon" ? "hide" : ""} to={`${MINT}/${id}`}>
      <Button className="generalButton" variant="primary">Mint Collection</Button>
    </NavLink>
  )
}

export default MintButton;