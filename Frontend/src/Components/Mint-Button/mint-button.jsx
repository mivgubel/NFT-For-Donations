//React
import React from 'react';
import { NavLink } from 'react-router-dom';

//Bootstrap
import Button from 'react-bootstrap/Button';

//Constants
import { CAUSES_INFO } from '../../Utils/Constants/causes';
import {  MINT } from '../../Utils/Constants/Routes';

const MintButton = ({id}) => {
  const causes = CAUSES_INFO;
  const {state} = causes[id - 1];

  return(   
    <NavLink className={state === "Soon" ? "hide" : ""} to={`${MINT}/${id}`}>
      <Button className="generalButton" variant="primary">Mint Collection</Button>
    </NavLink>
  )
}

export default MintButton;