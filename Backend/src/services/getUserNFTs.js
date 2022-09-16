/*
* https://docs.nftport.xyz/docs/nftport/b3A6NjExMTc5ODY-retrieve-contracts-owned-by-an-account
* Regresa un lista de contratos en los que el usuario minteo NFTs
*
* https://docs.nftport.xyz/docs/nftport/b3A6MjE0MDYzNzM-retrieve-nf-ts-owned-by-an-account
* regresa los NFTs que le pertenecen a un wallet
* 
***** Servicio para Obtener los NFTs que un usuario a minteado, para mostralos en su perfil. *****
*/

require("dotenv").config();
const axios = require("axios").default;

const getUserNFTsForProfile = (req, res) => {
  let address = req.params.walletAddress;
  var options = {
      method: 'GET',
      url: 'https://api.nftport.xyz/v0/accounts/'+address,
      params: {chain: 'polygon'},
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.API_KEY
      }
  };
    
    axios.request(options).then(function (response) {
      res.json(response.data);
    }).catch(function (e) {
      res.status(500).json({error : e})
    });

}

module.exports = getUserNFTsForProfile;