/* 
* https://docs.nftport.xyz/docs/nftport/b3A6Njg1NTI0MzI-list-all-your-deployed-collection-contracts
*
* Este Servicio se llama cuando se carga la pagina principal y retorna una lista de los
* contratos de colecciones de NFTs que se han desplegado.
*/
require("dotenv").config();
const axios = require("axios").default;

const getCollections = (req, res) => {
    var options = {
        method: 'GET',
        url: 'https://api.nftport.xyz/v0/me/contracts/collections',
        params: {chain: 'polygon'},
        headers: {'Content-Type': 'application/json', Authorization: process.env.API_KEY}
      };
      
      axios.request(options).then(function (response) {
        res.json(response.data);
      }).catch(function (e) {
        res.status(500).json({error: e});
      });
}

module.exports = getCollections;
