//React
import React, {useState} from 'react';

//web3
import {ethers} from 'ethers';

//bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


//style
import s from './wallet-connect-btn.module.css';

//Constants
import { CAUSE_SUB_PATH, ROUTES_WITH_SEARCH } from '../../Utils/Constants/Routes';

const WalletConnectBtn = () => {
  //States
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnectButtonText] = useState('Connect Wallet');
  const [red, setRed] = useState(null);
  const [token, setToken] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      .then( result => {
        accountChangedHandler(result[0]);
        actualChainWallet(window.ethereum.networkVersion);
        setConnectButtonText('Disconnect');
      })
    } else {
      setErrorMessage('Install MetaMask');
    }
  }

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  }

  const getUserBalance = (address) => {
    window.ethereum.request({method: 'eth_getBalance', params : [address, 'latest']})
    .then(balance => {
      setUserBalance(ethers.utils.formatEther(balance).slice(0,8));
    })
  }

  // const chainChangedHandler = () => {
  //   window.location.reload();
  // }

  const actualChainWallet = (chainId) => {
    switch(chainId) {
      //Ethereum
      case '1':
        setRed('Ethereum');
        setToken('ETH');
        break;
      //Polygon
      case '137':
        setRed('Polygon');
        setToken('Matic');
        break;
      //Optimism
      case '10':
        setRed('Optimism');
        setToken('ETH');
        break;
      default:
        setRed('Red No Valida');
        break;
    }
  }

  //Re-render when you change wallet
  window.ethereum.on('accountsChanged', accountChangedHandler);
  
  return(  
          <Button 
          className={s.center}
          variant="light"
          onClick={connectWalletHandler}>
              <p className={red ? s.hide : s.center}>{connButtonText}</p>
              <p className={red !== "Red No Valida" && userBalance ? s.center : s.hide}>{userBalance + ' ' + token}</p>
              <p className={red === "Red No Valida" && userBalance ? s.center : s.hide}>{ red }</p>
          </Button>
          )
}

export default WalletConnectBtn;