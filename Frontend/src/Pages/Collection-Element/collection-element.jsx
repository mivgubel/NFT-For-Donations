//React
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//Style
import s from './collection-element.module.css';

//Bootstrap
import Button from 'react-bootstrap/Button';

//Constants
import { COLLECTION } from '../../Utils/Constants/Routes';

//Local Components
import MintButton from '../../Components/Mint-Button/mint-button';

// Redux actions
import { getAllCauses } from '../../redux/actions'

export default function CollectionElement() {
  const {container, nftImage, descriptionStyle, buttonContainer} = s;
  const { id, idElement }= useParams();
   //Dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllCauses());
  }, [ dispatch, id ]);

  const causes = useSelector(state => state.allCauses);
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