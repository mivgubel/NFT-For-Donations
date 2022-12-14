import axios from "axios";
import { ethers } from "ethers";
//TODO CAMBIAR POR FUNCIONALIDAD DE BACK
import { CAUSES_INFO } from "../../Utils/Constants/causes";

const HOST = "http://localhost";

//Constants for reducer
export const GET_ALL_CAUSES = 'GET_ALL_CAUSES';
export const GET_ALL_VISIBLE_CAUSES = 'GET_ALL_VISIBLE_CAUSES';
export const HIDE_CAUSE = 'HIDE_CAUSE';
export const CHANGE_ERROR = 'CHANGE_ERROR';
export const GET_ACTUAL_RED = 'GET_ACTUAL_RED';
export const GET_USER_BALANCE = 'GET_USER_BALANCE';
export const SET_SPINNER_STATUS = 'SET_SPINNER_STATUS';
export const GET_USER_COLLECTION = 'GET_USER_COLLECTION';
export const GET_USER_NFTS_COLLECTION = 'GET_USER_NFTS_COLLECTION';

//ETHEREUM
export const ETHEREUM = 'Ethereum';
export const ETHEREUM_MAIN_TOKEN = 'ETH';
export const ETHEREUM_CHAINID = '1';
//POLIGON
export const POLYGON = 'Polygon';
export const POLYGON_MAIN_TOKEN = 'MATIC';
export const POLYGON_CHAINID = '137';

//OPTIMISM
export const OPTIMISM = 'Optimism';
export const OPTIMISM_MAIN_TOKEN = 'OPTIMISM';
export const OPTIMISM_CHAINID = '10';

//Constants
export const INVALID_NETWORK = 'INVALID NETWORK';

export const connectWallet = () => {
    window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    .then( result => {
      setConnectWalletSpinnerStatus(true);
      // setUserBalance(result.toString());
      getActualRed(window.ethereum.networkVersion);
    })
    setConnectWalletSpinnerStatus(false);

}
export const getAllVisibleCauses =  () => {
  return async (dispatch) => {
    try {
      const causes = await axios.get("https://solidarityback.herokuapp.com/");
      //TODO AGREGAR FILTADO PARA CAUSAS VISIBLES Y NO VISIBLES
      const response = causes.data.contracts.sort( (a, b) =>  {
        return new Date(a.public_mint_start).getTime() - new Date(b.public_mint_start).getTime();
      });
      return dispatch({
        type: GET_ALL_VISIBLE_CAUSES,
        payload: response
      });

    } catch(error) {
      console.log(error.message);
    }
  }
}

export const getAllCollectionsWithNfts =  (userWallet) => {
  try {
    const causesRoute = `https://solidarityback.herokuapp.com/`;
    const userNftRoute = `https://solidarityback.herokuapp.com/user/${userWallet}`;
    return async  (dispatch) => {
      let causes = await axios.get(causesRoute);
      causes = causes?.data?.contracts;
      let userNft = await axios.get(userNftRoute);
      userNft = userNft?.data?.nfts;
      let causesArr = [];
      for (let i = 0; i < causes.length; i++) {
        const nfts = userNft.filter(nft => causes[i].address === nft.contract_address);
        let causeObj = {
            address : causes[i].address,
            name : causes[i].name,
            mint_price : causes[i].mint_price,
            symbol : causes[i].symbol,
            public_mint_start : causes[i].public_mint_start,
            nfts 
        }
        if(nfts && nfts.length > 0) {
          causesArr.push(causeObj);
        }
      }
        dispatch({
          type: GET_USER_NFTS_COLLECTION,
          payload : causesArr
        });
      
    }
  } catch (error) {
    console.log(error)
  }
}

export const getAllCauses = () => {
  return async (dispatch) => {
    try {
      const causes = await axios.get("https://solidarityback.herokuapp.com/");
      const response = causes.data.contracts;
      dispatch({
        type: GET_ALL_CAUSES,
        payload: response
      });

    } catch(error) {
      console.log(error.message);
    }
  }
}

export const hideCause = (causeId) => { 
  //Mapea y oculta causas
  return async (dispatch) => {
    try {
      const response = CAUSES_INFO.map((cause) => {
        if (cause.id === causeId) {
          cause.show = !cause.show;
        }
        return cause;
      });

      dispatch({
        type: HIDE_CAUSE,
        payload: response
      });
    } catch(error) {
      console.log(error.message);
    }
  }
}

export const postCollection =  (data) => { 
  //Mapea y oculta causas
  return  (dispatch) => {
    let payload = {
      errorClass : "",
      errorMessage : {}
    };
    axios.post("https://solidarityback.herokuapp.com/adminDashboard",data).then(function(response){
      console.log("respon: ",response.data);
      payload = {
        errorClass : "alert alert-success",
        errorMessage : JSON.stringify(response.data)
      }
      dispatch({
        type: HIDE_CAUSE,
        payload
      });
    }).catch(function (error){
      console.log(error);
      payload = {
        errorClass : "alert alert-danger",
        errorMessage : JSON.stringify(error)
      }
      dispatch({
        type: HIDE_CAUSE,
        payload
      });
    });
  }
}


export const getActualRed = (chainId) => {
  let payload = {
    network : "",
    token : "",
    chainId
  }
    switch(chainId) {
      //Ethereum
      // case ETHEREUM_CHAINID:
      //   payload.network = ETHEREUM;
      //   payload.token = ETHEREUM_MAIN_TOKEN;
      //   break;
      //Polygon
      case POLYGON_CHAINID:
        payload.network = POLYGON;
        payload.token = POLYGON_MAIN_TOKEN;
        break;
      //Optimism
      // case '10':
      //   payload.network = OPTIMISM;
      //   payload.token = OPTIMISM_MAIN_TOKEN;
      //   break;
      default:
        payload.network = INVALID_NETWORK;
        break;
    }
  return  (dispatch) => {
    dispatch({
      type: GET_ACTUAL_RED,
      payload
    });
  }
}

export const setUserBalance = (payload) => {
  return  (dispatch) => {
    dispatch({
        type: GET_USER_BALANCE,
        payload
      });      
  }
}

export const setConnectWalletSpinnerStatus = (status) => {
  return  (dispatch) => {
    dispatch({
      type: SET_SPINNER_STATUS,
      payload : status
    });
  }
}

export const getAdminWallets = () => {
  return [
    //Guillermo
    "0x76d9995e68a44b786a665e5631d06fbbda047ee2".toLowerCase(),
    //Erik
    "0x0e88AC34917a6BF5E36bFdc2C6C658E58078A1e6".toLowerCase(),
    //Mike
    "0x105f83C74aD66776e317ABa4AeC1FB392cCa7c37".toLowerCase()
  ];
}

export const getMyCollection = (userWallet) => { 
  try {
    const route = `https://solidarityback.herokuapp.com/user/${userWallet}`;
      return async  (dispatch) => {
        const collections = await axios.get(route);
        dispatch({
          type: GET_USER_COLLECTION,
          payload : collections?.data.nfts
        });
      }
    
  } catch(error) {
    console.log(error)
  }

}