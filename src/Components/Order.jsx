import React, {useState, useEffect} from "react";
import { Form, Alert } from "react-bootstrap";
import './style/Order.css'
import {Button, Badge} from "react-bootstrap";
import Navigation from "./Navigation";
import axios from 'axios';

export default function Order() {

  const [plate, updatePlate] = useState(0);
  const [name, updateName] = useState('');
  const [mobile, updateMobile] = useState(0);
  const [area, updateArea] = useState('');
  const [savemessage, updateSavemessage] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() =>{
    updatePlate(0);
    setShow(false);
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

  let namechangehandler = (e)=>{
    updateName(e.target.value);
  }

  let mobilechangehandler = (e)=>{
    updateMobile(e.target.value);
  }

  let areachangehandler = (e)=>{
    updateArea(e.target.value);
  }

  let buttonclickhandler = (e)=>{
    console.log(name+" "+mobile+" "+area+" "+plate);
    const url = "http://localhost:8080/v1/saveorder?name="+name+"&mobile="+mobile+"&village="+area+"&menu=Biryani&plate="+plate;

    console.log(url);
    axios.post(url)
    .then((response)=>{
      console.log(response.data);
      if(response.data === 'Order saved...'){
        updateSavemessage('Hi '+name+', we have saved your order...');
      }
    })
    .then(()=>{
      setShow(true)
    });
  }

  return (
    <div className="formContainer">
      <Navigation />


      {show === true && 
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{savemessage}</Alert.Heading>
      </Alert>
      }

      <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Name"  onChange={namechangehandler}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mobile:</Form.Label>
          <Form.Control type="number" placeholder="Mobile"  onChange={mobilechangehandler}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Area:</Form.Label>
          <Form.Select aria-label="Default select example" onClick={areachangehandler}>
  <option>Select Area</option>
  <option value="chb">Chanak-Bamunpara</option>
  <option value="chs">Chanak-Sakrapara</option>
  <option value="chkk">Cahank-Kachari-Kestopur</option>
  <option value="chmm">Cahank-Matalsal-Mathgobindopur</option>
  <option value="jys">Jaypur-Salanda</option>
  <option value="ksg">Kasemnagar-Gatista</option>
  <option value="pl">Paligram</option>
</Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Plate Count:</Form.Label><br/>
          <Badge bg="danger" onClick={plusHandler}>+</Badge><Badge bg="danger">{plate}</Badge><Badge bg="danger" onClick={minusHandler}>-</Badge>
        </Form.Group>
        <Button variant="warning" onClick={buttonclickhandler}>Order</Button>
      </Form>
      
    </div>
  );
}
