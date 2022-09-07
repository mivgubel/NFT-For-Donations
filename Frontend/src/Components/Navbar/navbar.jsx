//React
import React, {useState} from 'react';

//web3
import {ethers} from 'ethers';

//bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


//style
import s from './navbar.module.css';

const NavbarProject = () => {
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
      setUserBalance(ethers.utils.formatEther(balance));
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
        setRed('Red No Valida.');
        break;
    }
  }
  //Re-render when you change wallet
  window.ethereum.on('accountsChanged', accountChangedHandler);

  return(   
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Dashboard</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="top-menu ms-auto">
              <ul className="navbar-nav align-items-center">
                  <li className="nav-item pointer">
                      <i id="change-theme" className="bx bx-moon theme-font"></i>
                  </li>
              </ul>
          </div>
          <p>{'Account: ' + defaultAccount}</p>
          <p>{'Balance: ' + userBalance + ' ' + token}</p>
          <p>{'Chain: ' + red}</p>
          <Button 
          variant="outline-success"
          onClick={connectWalletHandler}
          >{connButtonText}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarProject;