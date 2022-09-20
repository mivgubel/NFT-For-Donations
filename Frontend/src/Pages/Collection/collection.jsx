import s from './collection.module.css';
import Table from 'react-bootstrap/Table';
import { NavLink, useParams } from 'react-router-dom';
import { CAUSES_INFO } from '../../Utils/Constants/causes';

import Button from 'react-bootstrap/Button';
import { COLLECTION, COLLECTION_ELEMENT } from '../../Utils/Constants/Routes';

export default function Collection() {
  const { id }= useParams();
  const causes = CAUSES_INFO;
  const cause = causes[id - 1];
  const {collection} = cause;
  console.log(cause)
  const COLUMNS = ["NFT", "Quantity Total", "Quantity Minted"];
  return(   
    <div className={s.container}>
      <p className="bigTitle">{cause.title}</p>
      <Table className={s.table} responsive>
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
          <td key={`${index}-image`}><img className={s.nftImage} src={collectionNft.image}/></td>
          <td key={`${index}-quantity`}>{collectionNft.quantity}</td>
          <td key={`${index}-minted`}>{collectionNft.minted}</td>
          <td key={`${index}-details`}>
            <NavLink key={`${index}-detailsLink`} className="nav-link" to={`${COLLECTION}/${id}/${COLLECTION_ELEMENT}/${index + 1}`} >
              <Button key={`${index}-detailsButton`} className="generalBtn" variant="primary">More Details</Button>
            </NavLink>  
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}