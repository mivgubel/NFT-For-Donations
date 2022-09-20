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
import { getAllCauses } from '../../redux/actions'


export default function Cause() {
  const { descriptionStyle, buttonContainer, container } = s;
  const { id } = useParams();

  //Dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllCauses());
  }, [ dispatch, id ]);
  const causes = useSelector(state => state.allCauses);
  const { image, title, description } = causes[id - 1];

  return(   
    <div className={container}>
      <img src={image} alt={title}/>
      <p className="title">{title}</p>
      <p className={descriptionStyle}>{description}</p>
      <p className="title">Collection</p>
      <TresNft id={id} causes={causes}/>
      <div className={buttonContainer}>
        <NavLink className="nav-link" to={`${COLLECTION}/${id}`}>
          <Button className="generalButton" variant="primary">Full Collection</Button>
        </NavLink>
        <MintButton id={id}/>
        <NavLink className="nav-link" to={CAUSES}>
          <Button className="generalButton" variant="primary">All Causes</Button>
        </NavLink>
      </div>
    </div>
  )
}