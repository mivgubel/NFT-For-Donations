const axios = require('axios').default;
import * as dotenv from "dotenv";
dotenv.config();
axios.defa

export default class Collection {
    static async createCollection(req, res, next){
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
          public_mint_start: req.body.fechaLanzamiento, //formato '2022-02-08T11:30:48+00:00',
          metadata_updatable: true,
          base_uri: req.body.baseURI,
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error("Error MSG:",error);
      });
    }
}

/* var options = {
            method: 'POST',
            url: 'https://api.nftport.xyz/v0/contracts/collections',
            headers: {'Content-Type': 'application/json', Authorization: process.env.API_KEY},
            data: {
              chain: 'rinkeby',
              name: req.body.name,
              symbol: req.body.simbol,
              max_supply: req.body.maxSupply,
              mint_price: req.body.price,
              tokens_per_mint: 10, //maximo numero de NFTs que se permite mintear por operacion
              royalties_share: 500, // porcentaje de royalti por tx
              royalties_address: '0x105f83C74aD66776e317ABa4AeC1FB392cCa7c37',
              owner_address: '0x105f83C74aD66776e317ABa4AeC1FB392cCa7c37',
              treasury_address: '0x105f83C74aD66776e317ABa4AeC1FB392cCa7c37',
              public_mint_start: req.body.fechaLanzamiento, // format '2022-09-13T11:30:48+00:00'
              metadata_updatable: true,
              base_uri: 'ipfs://bafkreigwujtqinlx3hnv64uwch7lso5o73i73jgdqoq7hnzhnt7wc37inq/',
             // prereveal_token_uri: 'ipfs://bafkreiatlcaldkfsaaxt6i55r34bvvpgodeu3qrra5oo3bit56bjawblxq'
            }
          };

          axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
          */
