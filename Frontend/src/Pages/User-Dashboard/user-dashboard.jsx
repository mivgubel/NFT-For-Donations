import s from './user-dashboard.module.css';

//Bootstap
import { Button, Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { COLLECTION } from '../../Utils/Constants/Routes';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyCollection } from '../../redux/actions';

export default function UserDashboard() {
  const {container, firstcard, secondCard,dashboardContainer, table, buttonContainer, nftImage, button, collectionContainer} = s;
  const COLUMNS = ["Title", "Image", "Cost", "Yield", "Causes Profit", "User Profit" ];
  const dispatch = useDispatch();
  const wallet = useSelector(state => state.user.address);
  useEffect(()=> {
    if (wallet) {
      getMyCollection(wallet);
    }
  }, [dispatch]);
  const userCollection = useSelector(state => state.userCollection);
  return(
    <div className={container}>
      <Card className={collectionContainer}>
        <h1>My collection</h1>
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
            {userCollection.map((collection, index) => (
            <tr key={`${index}-tr`}>
              <td key={`${index}-count`}>{index + 1}</td>
              <td key={`${index}-title`}>{collection?.name}</td>
              <td key={`${index}-image`}><img className={nftImage} alt={collection?.name} src={collection.image}/></td>
              <td className={buttonContainer} key={`${index}-actions`}>
                <br/>
                <NavLink key={`${index}-detailsLink`} className="nav-link" to={`${COLLECTION}/${collection.address}`} >
                  <Button  className={button} key={`${index}-detailsButton`} variant="secondary">
                    View All
                  </Button>
                </NavLink>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <div className={dashboardContainer}>
        <Card className={firstcard} >
          <div>
            <h3> Your Solidarity Causes Support</h3>
            <div>
              <h1>7</h1>
              <h3>Total Colections</h3>
              <h1>7</h1>
              <h3>Total NFT Minted</h3>
            </div>
          </div>
          <div>
            <h1>Projections</h1>
            <br/>
            <div>
              <p>Total investment: $1000</p>
              <hr/>
              <p>Actual Average Yield: 5%</p>
              <hr/>
              <p>Actual Average Yield destined to help : 4%</p>
              <hr/>
              <p>Actual Average Yield profit for user: 1%</p>
            </div>
          </div>
        </Card >
        <Card className={secondCard}>
          <h2>Profits</h2>
          <hr/>
          <p>Actual Total Profit: $100</p>
          <hr/>
          <p>Actual Total Profit to help: $80</p>
          <hr/>
          <p>Actual Total Profit for user: $20</p>
        </Card>
    </div>   
    </div>


  )
}