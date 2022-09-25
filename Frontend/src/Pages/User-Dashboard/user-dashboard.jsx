import s from './user-dashboard.module.css';

//Bootstap
import { Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCollectionsWithNfts, getMyCollection } from '../../redux/actions';

export default function UserDashboard() {
  const {container, firstcard, secondCard,dashboardContainer, table, nftImage, collectionContainer} = s;
  const COLUMNS = ["Title", "Image", "Nfts minted", "Cost", "Yield", "Causes Profit", "User Profit" ];
  const investmentYield = 0.04;

  const [profit, setprofit] = useState({
    nftQuantity : 0,
    totalInvestment : 0,
    totalProfit : 0
  });
  //Redux
  const dispatch = useDispatch();
  const wallet = useSelector(state => state.user.address);
  const userCollectionNft = useSelector(state => state.userNftInCollection);

  const getDaysSinceMint = ( mintDate ) => {
    const daysBetweenDates = (new Date().getTime() - new Date(mintDate).getTime())/ (1000 * 60 * 60 * 24) - 20;
    const years = daysBetweenDates / 365;
    if (daysBetweenDates <= 0) {
      return 0;
    } else {
      return years;
    }
  }

  const getProfit = (mintPrice , dateFromMint, units) => {
    return Math.round(mintPrice * investmentYield / 2 * getDaysSinceMint(dateFromMint) * units * 100000) / 100000
  }

  const getProfitDate = () => {
    let nftQuantity = 0;
    let totalInvestment = 0;
    let totalProfit = 0;
    userCollectionNft.map(collection => {
      totalProfit += getProfit(collection.mint_price, collection.public_mint_start, collection.nfts.length);
      nftQuantity += collection.nfts.length;
      totalInvestment += collection.mint_price * collection.nfts.length;
    });
    setprofit({nftQuantity, totalProfit, totalInvestment});
  }


  useEffect(()=> {
    if (wallet) {
      dispatch(getAllCollectionsWithNfts(wallet));
      dispatch(getMyCollection(wallet));
      getProfitDate();
    }
  }, [wallet, dispatch, userCollectionNft]);

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
            {userCollectionNft.map((collection, index) => (
            <tr key={`${index}-tr`}>
              <td key={`${index}-count`}>{index + 1}</td>
              <td key={`${index}-title`}>{collection?.name}</td>
              <td key={`${index}-image`}><img className={nftImage} alt={collection?.name} src={collection.file_url}/></td>
              <td key={`${index}-nfts`}>{collection?.nfts.length}</td>
              <td key={`${index}-cost`}>{collection?.mint_price} MATIC</td>
              <td key={`${index}-yield`}>{investmentYield * 100 }%</td>
              <td key={`${index}-cause-profit`}>{getProfit(collection?.mint_price, collection?.public_mint_start,  collection?.nfts.length)} MATIC</td>
              <td key={`${index}-user-profit`}>{getProfit(collection?.mint_price, collection?.public_mint_start,  collection?.nfts.length)} MATIC</td>
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
              <h1>{userCollectionNft.length}</h1>
              <h3>Total Collections</h3>
              <h1>{profit.nftQuantity}</h1>
              <h3>Total NFT Minted</h3>
            </div>
          </div>
          <div>
            <h1>Projections</h1>
            <br/>
            <div>
              <p>Total investment:</p>
              <b>{profit.totalInvestment} MATIC</b>
              <hr/>
              <p>Actual Average Yield:</p>
              <b>{investmentYield * 100}%</b>
              <hr/>
              <p>Yield destined to help:</p>
              <b>{investmentYield * 100 / 2}%</b>
              <hr/>
              <p>Yield profit for user:</p>
              <b>{investmentYield * 100 / 2}%</b>
            </div>
          </div>
        </Card >
        <Card className={secondCard}>
          <h2>Profits</h2>
          <hr/>
          <p>Actual Total Profit:</p>
          <b> {profit.totalProfit} MATIC</b>
          <hr/>
          <p>Actual Total Profit to help:</p>
          <b>{profit.totalProfit / 2} MATIC</b>
          <hr/>
          <p>Actual Total Profit for user: </p>
          <b>{profit.totalProfit / 2} MATIC</b>
        </Card>
    </div>   
    </div>


  )
}