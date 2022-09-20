//React
import { NavLink, useParams } from 'react-router-dom';

//Style
import s from './collection-element.module.css';

//Bootstrap
import Button from 'react-bootstrap/Button';

//Constants
import { COLLECTION } from '../../Utils/Constants/Routes';
import { CAUSES_INFO } from '../../Utils/Constants/causes';

//Local Components
import MintButton from '../../Components/Mint-Button/mint-button';

export default function CollectionElement() {
  const {container, nftImage, descriptionStyle, buttonContainer} = s;
  const { id, idElement }= useParams();
  const causes = CAUSES_INFO;
  const cause = causes[id - 1];
  const {title} = cause;
  const { image, nftTitle, description } = cause.collection[idElement - 1];

  return(   
    <div className={container}>
      <img className={nftImage} src={image} alt={nftTitle}/>
      <p className="title">{nftTitle} - {title} </p>
      <p className={descriptionStyle}>{description}</p>
      <div className={buttonContainer}>
        <NavLink className="nav-link" to={`${COLLECTION}/${id}`} >
          <Button className="generalButton" variant="primary">Full Collection</Button>
        </NavLink>
        <MintButton id={id}/>
      </div>
    </div>
  );
}