/*
****** Servicio para retornar los datos de un NFT en especifico. ******
*
* https://docs.nftport.xyz/docs/nftport/b3A6MjAzNDUzNTM-retrieve-nft-details
*/

require("dotenv").config();
const axios = require("axios").default;

const getNFTDetail = (req, res) => {
    let contractAddress = req.params.contract;
    let tokenId = req.params.tokenID

    var options = {
        method: 'GET',
        url: `https://api.nftport.xyz/v0/nfts/${contractAddress}/${tokenId}`,
        params: {chain: 'polygon'},
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.API_KEY
        }
      };
      console.log("url: ",options.url)
      axios.request(options).then(function (response) {
        res.json(response.data);
      }).catch(function (e) {
        res.status(500).json({error: e});
      });
}

module.exports = getNFTDetail;