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
  const { descriptionStyle, buttonContainer, container, collectionImage } = s;
  const { collectionContractAddress } = useParams();

  //Dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllVisibleCauses());
  }, [ dispatch, collectionContractAddress ]);
  const causes = useSelector(state => state.allVisibleCauses);
  const cause = causes.filter(contract => (contract.address === collectionContractAddress))[0];
  // const {  name, address } = cause;
                              //trees of hope                                     Education for all                                 Matic for Grandparents
  const imagesContracts = ["0x51710b84b3be56201b87bdf052c07ee9d334ddce", "0x2ead43c1d40ee4f642e9a558e781fd88e39b3209", "0x8c34e57d808a1c8a99a1a7fcc4d1ca6557c5e384"];
  const descriptions = [`Solidarity's first collection of NFTs is called "Trees of hope".
  Trees are major players in the life of the planet and nature, they symbolize growth and development.
  These oil paintings are drawn from the perspective of children, who imagine and capture love and hope in trees, which will endure in time in a better world.`, `We want children to be able to access school, have a decent education, school creation programs.
  One of the goals is to improve teaching and bring education to rural communities.  The actions undertaken are focused on the rights of boys and girls to a decent education, including education programs with projects focused on the creation of schools, allocation of scholarships, organization of volunteers.`, `Dignified aging.  Help elderly people in a state of poverty and abandonment.
  Programs that serve elderly people in a state of abandonment.  The services include the delivery of a weekly pantry, support in medical devices and home repair, as well as economic scholarships.`];
  return(   
    <div className={container}>
      {/* <img src={image} alt={title}/> */}
      <p className="title">{cause?.name}</p>
      <p className={descriptionStyle}>{descriptions[imagesContracts.indexOf(collectionContractAddress)]}</p>
      <p className="title">Collection</p>
      <img className={collectionImage} src={`../../../causa${imagesContracts.indexOf(collectionContractAddress) + 1}.png`} alt='nft'/>
      {/* <TresNft key={collectionContractAddress} id={collectionContractAddress} causes={causes}/> */}
      <div className={buttonContainer}>
        {/* <NavLink className="nav-link" to={`${COLLECTION}/${collectionContractAddress}`}>
          <Button className="generalButton" variant="primary">Full Collection</Button>
        </NavLink> */}
        <MintButton collectionContractAddress={collectionContractAddress}/>
        <NavLink className="nav-link" to={CAUSES}>
          <Button className="generalButton" variant="primary">All Causes</Button>
        </NavLink>
      </div>
    </div>
  )
}