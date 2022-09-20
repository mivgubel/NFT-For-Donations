//React
import React, {useState} from 'react';

//web3
import {ethers} from 'ethers';

//bootstrap
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

//style
import s from './wallet-connect-btn.module.css';

const WalletConnectBtn = () => {
  const {buttonStyle} = s;

  //States
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnectButtonText] = useState('Connect Wallet');
  const [red, setRed] = useState(null);
  const [token, setToken] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const connectWalletHandler = () => {
    if (red) {
      setRed(null);
      setConnectButtonText('Connect Wallet');
      setUserBalance(null);
      setSpinner(false);
      return;
    }
    if (window.ethereum) {
      window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      .then( result => {
        setSpinner(true);
        accountChangedHandler(result[0]);
        actualChainWallet(window.ethereum.networkVersion);
        setConnectButtonText('Disconnect');
      })
    } else {
      setErrorMessage('Install MetaMask');
      setSpinner(false);
    }
  }

  const accountChangedHandler = (newAccount) => {
    getUserBalance(newAccount.toString());
  }

  const getUserBalance = (address) => {
    window.ethereum.request({method: 'eth_getBalance', params : [address, 'latest']})
    .then(balance => {
      setUserBalance(ethers.utils.formatEther(balance).slice(0,8));
      setDefaultAccount(address);
      setSpinner(false);
    })
  }


  const actualChainWallet = (chainId) => {
    localStorage.setItem("chain", chainId);
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
          className={buttonStyle}
          variant="light"
          onClick={connectWalletHandler}>
              <div className={spinner ? "" : "hide"} >
                <Spinner animation="border" variant="info" />
              </div>
              <p className={red ? "hide" : ""}>{connButtonText}</p>
              <p className={red !== "Red No Valida" && userBalance ? "" : "hide"}>{userBalance + ' ' + token}</p>
              <p className={red === "Red No Valida" && userBalance ? "" : "hide"}>{ red }</p>
          </Button>
          )
}

export default WalletConnectBtn;