const axios = require('axios').default;
const dotenv = require("dotenv").config();

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
          base_uri: req.body.baseURI
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error("Error MSG:",error);
      });

    }

    module.exports = collection;