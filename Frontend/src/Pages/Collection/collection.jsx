//React
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//Style
import s from './collection.module.css';

//Bootstrap
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

//Constants
import { COLLECTION, COLLECTION_ELEMENT } from '../../Utils/Constants/Routes';

// Redux actions
import { getAllCauses } from '../../redux/actions'

export default function Collection() {
  const { container, table, nftImage} = s;
  const { id }= useParams();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllCauses());
  }, [ dispatch, id ]);
  const causes = useSelector(state => state.allCauses);
  const cause = causes[id - 1];
  const { collection } = cause;
  const COLUMNS = ["NFT", "Quantity Total", "Quantity Minted"];
  return(   
    <div className={container}>
      <p className="bigTitle">{cause.title}</p>
      <Table className={table} responsive>
      <thead>
        <tr>
          <th key={`${0}-column`}>#</th>
          {COLUMNS.map((column, index) => (
            <th key={`${index}-column`}>{column}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {collection.map((collectionNft, index) => (
        <tr key={`${index}-tr`}>
          <td key={`${index}-count`}>{index + 1}</td>
          <td key={`${index}-image`}><img className={nftImage} alt={collectionNft.nftTitle} src={collectionNft.image}/></td>
          <td key={`${index}-quantity`}>{collectionNft.quantity}</td>
          <td key={`${index}-minted`}>{collectionNft.minted}</td>
          <td key={`${index}-details`}>
            <NavLink key={`${index}-detailsLink`} className="nav-link" to={`${COLLECTION}/${id}/${COLLECTION_ELEMENT}/${index + 1}`} >
              <Button key={`${index}-detailsButton`} className="generalButton" variant="primary">More Details</Button>
            </NavLink>  
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}