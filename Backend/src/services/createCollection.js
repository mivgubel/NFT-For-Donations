/*
* https://docs.nftport.xyz/docs/nftport/ZG9jOjQ0MDgxNDc3-how-to-create-your-nft-collection#step-3-deploy-a-collection-contract
* 
* servicio que crea y despliga un contrato de coleccion de NFTs
*/

const axios = require('axios').default;
require("dotenv").config();
//const getCollection = require("./getCollection.js");

//const permitWallets = ["",""];

const collection = (req,res) => {
      var options = {
        method: 'POST',
        url: 'https://api.nftport.xyz/v0/contracts/collections',
        headers: {'Content-Type': 'application/json', Authorization: process.env.API_KEY},
        data: {
          chain: 'rinkeby',
          name: req.body.name,
          symbol: req.body.simbol,
          max_supply: req.body.maxSupply,
          mint_price: req.body.price,
          tokens_per_mint: 10,
          royalties_share: 500,
          royalties_address: '0x105f83C74aD66776e317ABa4AeC1FB392cCa7c37',
          owner_address: '0x105f83C74aD66776e317ABa4AeC1FB392cCa7c37',
          treasury_address: '0x105f83C74aD66776e317ABa4AeC1FB392cCa7c37',
          public_mint_start_date: req.body.fechaLanzamiento, //formato '2022-02-08T11:30:48+00:00',
          metadata_updatable: true,
          base_uri: "",
          prereveal_token_uri:req.body.baseURI
        }
      };
      
      axios.request(options).then(function (response) {
        res.json(response.data);
       // getCollection(response.data.transaction_hash);
      }).catch(function (err) {
        res.status(500).json({error: err});
      });

    }

    module.exports = collection;
