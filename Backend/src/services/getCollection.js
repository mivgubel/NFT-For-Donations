/* 
* https://docs.nftport.xyz/docs/nftport/b3A6Njg1NTI0MTU-retrieve-a-deployed-contract
*
* obtener un contrato desplegado, nos regresa la cadena, la address del contrato
* y el transaction hash.
*
** https://docs.nftport.xyz/docs/nftport/b3A6MjAzNDUzNTQ-retrieve-contract-nf-ts
*
* https://docs.nftport.xyz/docs/nftport/b3A6Njg1NTI0MzE-get-contract-abi
*
* nos regresa el ABI el contrato, se le envia la address del contrato
*
* Servicio que nos regresa los NFTs de una coleccion.
*/
require("dotenv").config();
const axios = require("axios").default;

// Validar con NFTs minteados.

const getCollection =  (req, res) => {
  let contractAddress = req.params.contractAddress;
  var options = {
    method: 'GET',
    url: 'https://api.nftport.xyz/v0/nfts/'+contractAddress,
    params: {
      chain: 'polygon',
      page_number: '1',
      page_size: '1',
      include: 'default',
      refresh_metadata: 'false'
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.API_KEY
    }
  };

  axios.request(options).then(function (response) {
    res.json(response.data);
  }).catch(function (e) {
    res.status(500).json({error: e});
  });
}

module.exports = getCollection;