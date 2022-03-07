import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import './style/Order.css'
import {Button, Badge} from "react-bootstrap";
import Navigation from "./Navigation";

export default function Order() {

  const [plate, updatePlate] = useState(0);

  useEffect(() =>{
    updatePlate(0);
  },[])

  let plusHandler = ()=>{
    updatePlate(plate+1);
  }

  let minusHandler = ()=>{
    if(plate>0){
      updatePlate(plate-1);
    }
    else{
      updatePlate(0);
    }
    
  }

  return (
    <div className="formContainer">
      <Navigation />
      <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>নাম:</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>মোবাইল:</Form.Label>
          <Form.Control type="number" placeholder="Mobile"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>কত প্লেট:</Form.Label><br/>
          <Badge bg="danger" onClick={plusHandler}>+</Badge><Badge bg="danger">{plate}</Badge><Badge bg="danger" onClick={minusHandler}>-</Badge>
        </Form.Group>
        <Button variant="warning">Order</Button>
      </Form>
      
    </div>
  );
}
