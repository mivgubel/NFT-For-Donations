//React
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//Style
import s from './cause.module.css';

//Bootstrap
import Button from 'react-bootstrap/Button';
import { CAUSES, COLLECTION } from '../../Utils/Constants/Routes';
import TresNft from '../../Components/Tres-Nft/tres-nft';
import MintButton from '../../Components/Mint-Button/mint-button';

// Redux actions
import { getAllVisibleCauses } from '../../redux/actions'


export default function Cause() {
  const { descriptionStyle, buttonContainer, container } = s;
  const { collectionContractAddress } = useParams();

  //Dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllVisibleCauses());
  }, [ dispatch, collectionContractAddress ]);
  const causes = useSelector(state => state.allVisibleCauses);
  const cause = causes.filter(contract => (contract.address === collectionContractAddress))[0];
  // const {  name, address } = cause;
  return(   
    <div className={container}>
      {/* <img src={image} alt={title}/> */}
      <p className="title">{cause?.name}</p>
      <p className={descriptionStyle}>{"description"}</p>
      <p className="title">Collection</p>
      <TresNft key={collectionContractAddress} id={collectionContractAddress} causes={causes}/>
      <div className={buttonContainer}>
        <NavLink className="nav-link" to={`${COLLECTION}/${collectionContractAddress}`}>
          <Button className="generalButton" variant="primary">Full Collection</Button>
        </NavLink>
        <MintButton id={collectionContractAddress}/>
        <NavLink className="nav-link" to={CAUSES}>
          <Button className="generalButton" variant="primary">All Causes</Button>
        </NavLink>
      </div>
    </div>
  )
}