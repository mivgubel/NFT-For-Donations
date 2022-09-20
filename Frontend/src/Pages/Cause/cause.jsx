//React
import { NavLink, useParams } from 'react-router-dom';

//Style
import s from './cause.module.css';

//Bootstrap
import Button from 'react-bootstrap/Button';
import { CAUSES, COLLECTION } from '../../Utils/Constants/Routes';
import TresNft from '../../Components/Tres-Nft/tres-nft';
import MintButton from '../../Components/Mint-Button/mint-button';

//constants
import { CAUSES_INFO } from '../../Utils/Constants/causes';

export default function Cause() {
  const causes = CAUSES_INFO;
  const { descriptionStyle, buttonContainer, container } = s;
  const { id }= useParams();
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