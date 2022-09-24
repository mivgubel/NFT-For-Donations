//React
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from "react";

//Style
import s from "./admin-dashboard.module.css";

//Bootstap
import { Button, Table } from 'react-bootstrap';

// Local Components
import AddCollectionModal from "../../Components/Add-Collection-Modal/add-collection-modal";

//Constants
import { COLLECTION } from '../../Utils/Constants/Routes';

// Redux actions
import { getAllCauses, hideCause } from '../../redux/actions';


export default function AdminDashboard() {
  const { button, container, table, nftImage,buttonContainer} = s;
  const dispatch = useDispatch();
  const causes = useSelector(state => state.allCauses);
  useEffect(()=> {
    dispatch(getAllCauses());
  }, [dispatch]);

  const COLUMNS = ["Title", "Image", "Actions"];
  const [collectionId, setCollectionId] = useState("");

  const showCollection = (causeId) => {
    // dispatch(hideCause(causeId));
    console.log("Ocultando causa con contrato: " + causeId);
  }

	return (
		<div className="container">
      
      <br />
      <div className={container}>
        <p className="bigTitle">Dashboard Admin</p>
        <AddCollectionModal />
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
            {causes.map((cause, index) => (
            <tr key={`${index}-tr`}>
              <td key={`${index}-count`}>{index + 1}</td>
              <td key={`${index}-title`}>{cause?.name}</td>
              <td key={`${index}-image`}><img className={nftImage} alt={cause?.name} src={cause.image}/></td>
              <td className={buttonContainer} key={`${index}-actions`}>
                <Button onClick={() => showCollection(cause.address)} className={button} key={`${index}-showButton`}  variant="primary">
                  {cause.show ? "Hide" : "Show"}
                </Button>
                <br/>
                <NavLink key={`${index}-detailsLink`} className="nav-link" to={`${COLLECTION}/${cause.address}`} >
                  <Button  className={button} key={`${index}-detailsButton`} variant="secondary">
                    View All
                  </Button>
                </NavLink>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
		</div>
	);
}
