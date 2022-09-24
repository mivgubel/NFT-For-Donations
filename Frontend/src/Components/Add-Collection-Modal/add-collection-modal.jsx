//React
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
//style
import s from './add-collection-modal.module.css';

//Constants


//Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from "axios";
import { FloatingLabel, Form } from 'react-bootstrap';
import { postCollection } from '../../redux/actions';
import Swal from 'sweetalert2';

const AddCollectionModal = () => {
  const {container} = s;
  const [show, setShow] = useState(false);
  const [nameCollection, setNameCollection] = useState("");
  const [symbol, setSymbol] = useState("");
  const [maxSupply, setMaxSupply] = useState(0);
  const [mintPrice, setMintPrice] = useState(0);
  const [fechaLanzamiento, setFechaLanzamiento] = useState("");
  const [baseUri, setBaseUri] = useState(""); 
  const [msg, setMsg] = useState("");
  const [className, setClassName] = useState("");
  //const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const wallet = useSelector(state => state.user.address);
  useEffect(()=> {
    
  }, [dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = (e) => {
    e.preventDefault();
    let data = {
      name: nameCollection,
      simbol: symbol,
      maxSupply: maxSupply,
      price: mintPrice,
      fechaLanzamiento: fechaLanzamiento+":00-05:00",
      baseUri: baseUri,
      wallet
    }
    // postCollection(data);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure to create this collection?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, create it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        cleanForm();
        axios.post("https://solidarityback.herokuapp.com/adminDashboard",data).then(function(response){
        setClassName("alert alert-success");
        setMsg(JSON.stringify(response.data));
        handleClose();
        Swal.fire(
          'Created!',
          'The Collection had been created successfully.',
          'success'
        )
      }).catch(function (error){
        console.log(error);
          setClassName("alert alert-danger");
          setMsg("The collection wasn`t created.");
      });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        handleClose();
        cleanForm();
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'The collection wasnt created',
          'error'
        )
      }
    })
  //  // axios.post();
    
  }

  const cleanForm = () => {
    setNameCollection("");
    setSymbol("");
    setMaxSupply(0);
    setMintPrice(0);
    setFechaLanzamiento("");
    setBaseUri(""); 
    setMsg("");
    setClassName("");
  }

  const validateFilledFields = () => {
    return (
            nameCollection === "" ||
            symbol === "" || 
            maxSupply === 0 ||
            mintPrice === 0 ||
            fechaLanzamiento === ""
          ); 
  }

  return(   
    <div className={container}>
      
      <Button variant="primary" onClick={handleShow}>
        Create New Collection
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Modal.Title>{"Create a new Collection"}</Modal.Title>
      <br />
      <div id="msg" className={className}>{msg}</div>
      <form onSubmit={submitForm} >
          <FloatingLabel
          label="Collection Name:"
          className="mb-3"
          >
            <Form.Control type="text" placeholder="name" id="name" 
              value={nameCollection} onChange={(e)=>setNameCollection(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel
            label="Symbol:"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="SIM" id="symbol" 
              value={symbol} onChange={(e)=>setSymbol(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel
            label="Max Supply:"
            className="mb-3"
          >
            <Form.Control type="number" placeholder="0" id="supply" 
              value={maxSupply} onChange={(e)=>setMaxSupply(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel
            label="Mint Price:"
            className="mb-3"
          >
            <Form.Control type="number" placeholder="0" id="price" 
              value={mintPrice} onChange={(e)=>setMintPrice(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel
            label="Fecha de Lanzamiento:"
            className="mb-3"
          >
            <Form.Control type="datetime-local" placeholder="DD/MM/YYYY" id="fecha" 
              value={fechaLanzamiento} onChange={(e)=>setFechaLanzamiento(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel
            label="Base Uri:"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="DD/MM/YYYY" id="uri" 
              value={baseUri} onChange={(e)=>setBaseUri(e.target.value)} />
          </FloatingLabel>
          <Button type="submit" className="btn btn-primary" id="sumit" disabled={validateFilledFields()}>
            Submit
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
      </form>
    </Modal.Body>

      </Modal>
    </div>
  )
}

export default AddCollectionModal;