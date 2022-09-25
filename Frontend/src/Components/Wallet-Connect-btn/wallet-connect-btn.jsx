//React
import React, {useEffect, useState} from 'react';

//web3
import {ethers} from 'ethers';

//bootstrap
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

//style
import s from './wallet-connect-btn.module.css';
import { connectWallet, getActualRed, getUserBalance, setConnectWalletSpinnerStatus, setUserBalance } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const WalletConnectBtn = () => {
  const {buttonStyle} = s;

  //States
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnectButtonText] = useState('Connect Wallet');

  //redux
  const dispatch = useDispatch();
  const red = useSelector(state => state?.chain.network);
  const token = useSelector(state => state?.chain.token);
  const state = useSelector(state => state);
  const userBalance = useSelector(state => state.user.userBalance);
  const spinner = useSelector(state => state.connectWalletSpinner);
  useEffect(()=> {
    connectWalletHandler();
  }, [dispatch, red]);

  const connectWalletHandler = () => {
    dispatch(setConnectWalletSpinnerStatus(true));
    if (red) {
      setConnectButtonText('Connect Wallet');
      setUserBalance({});
      dispatch(setConnectWalletSpinnerStatus(false));
      return;
    }
    if (window.ethereum) {
      window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      .then( result => {
        getUserBalance(result[0]);
        dispatch(setConnectWalletSpinnerStatus(true));
        dispatch(getActualRed(window.ethereum.networkVersion));
      })
      dispatch(setConnectWalletSpinnerStatus(false));
    } else {
      setErrorMessage('Install MetaMask');
      dispatch(setConnectWalletSpinnerStatus(false));
    }
  }

  const accountChangedHandler = (newAccount) => {
    getUserBalance(newAccount[0]);
  }

  const getUserBalance = (address) => {
    let payload = {
      userBalance : 0,
      address
    }
    window.ethereum.request({method: 'eth_getBalance', params : [address, 'latest']})
    .then(balance => {
      payload.userBalance = ethers.utils.formatEther(balance).slice(0,6);
      dispatch(setConnectWalletSpinnerStatus(false));
      dispatch(setUserBalance(payload));
    })
    
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