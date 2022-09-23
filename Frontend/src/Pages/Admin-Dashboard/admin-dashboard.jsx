import React from "react";
import s from "./admin-dashboard.module.css";
import axios from "axios";
import { useState } from "react";

export default function AdminDashboard() {
  const [nameCollection, setNameCollection] = useState("");
  const [symbol, setSymbol] = useState("");
  const [maxSupply, setMaxSupply] = useState(0);
  const [mintPrice, setMintPrice] = useState(0);
  const [fechaLanzamiento, setFechaLanzamiento] = useState("");
  const [baseUri, setBaseUri] = useState(""); 
  const [msg, setMsg] = useState("");
  const [className, setClassName] = useState("");
  //const [isActive, setIsActive] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    let data = {
      name: nameCollection,
      simbol: symbol,
      maxSupply: maxSupply,
      price: mintPrice,
      fechaLanzamiento: fechaLanzamiento+":00-05:00",
      baseUri: baseUri
    }
    
   // axios.post();
   axios.post("https://solidarityback.herokuapp.com/adminDashboard",data).then(function(response){
      console.log("respon: ",response.data);
      setClassName("alert alert-success");
      setMsg(JSON.stringify(response.data));
   }).catch(function (error){
    console.log(error);
      setClassName("alert alert-danger");
      setMsg(JSON.stringify(error));
   });
  }



	return (
		<div className="container">
      <br />
      <div id="msg" className={className}>{msg}</div>
      <form onSubmit={submitForm} >
  <div className="mb-3">
    <label for="name" className="form-label">Collection Name:</label>
    <input type="text" className="form-control" id="name" value={nameCollection} onChange={(e)=>setNameCollection(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="symbol" className="form-label">Symbol:</label>
    <input type="text" className="form-control" id="symbol" value={symbol} onChange={(e)=>setSymbol(e.target.value)} />
  </div>
  <div className="mb-3">
    <label for="supply" className="form-label">Max Supply:</label>
    <input type="number" className="form-control" id="supply" value={maxSupply} onChange={(e)=>setMaxSupply(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="price" className="form-label">Mint Price:</label>
    <input type="number" className="form-control" id="price" value={mintPrice} onChange={(e)=>setMintPrice(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="fecha" className="form-label">Fecha de Lanzamiento:</label>
    <input type="datetime-local" className="form-control" id="fecha" value={fechaLanzamiento} onChange={(e)=>setFechaLanzamiento(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="uri" className="form-label">Base Uri:</label>
    <input type="text" className="form-control" id="uri" value={baseUri} onChange={(e)=>setBaseUri(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" id="sumit">Submit</button>
</form>
		</div>
	);
}
