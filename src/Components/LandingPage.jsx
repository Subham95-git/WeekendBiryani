import React from "react";
import "./style/LandingPage.css";
import Navigation from "./Navigation";
import { Accordion, Row, Card, Button, Col, Badge  } from "react-bootstrap";
import { BsCart2 } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { GiRotaryPhone, GiPhone } from "react-icons/gi";

import {  Link } from 'react-router-dom';

import sayan from "../Resources/sayan.jpeg";
import gautam from "../Resources/gautam.jpeg";
import ashoke from "../Resources/ashoke.jpeg";
import satadol from "../Resources/satadol.jpeg"

export default function LandingPage() {

    

  return (
    <>
    
      <Row>
        <div className="bodystyle">
          <Navigation />
          <div>
            <center>
              <br />
              <h4>
                "দু টাকাতে দিনটা শুরু, ষোলো আনায় হচ্ছে শেষ। &nbsp; &nbsp;&nbsp;
                তোমার বন্ধুত্বের বিরিয়ানিতে, আমি আলু হয়ে নিরুদ্দেশ।"
              </h4>
            </center>
          </div>
        </div>
      </Row>
      <br />
      <Row>
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <MdRestaurantMenu />
                &nbsp;Menu
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQa36-XZ5YVffaYGZ4iGYqNDg2xyV4e-lIQ&usqp=CAU"
                    />
                    <Card.Body>
                      <Card.Title>Naan Paratha</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Piece
                      </Card.Subtitle>
                      <Card.Text></Card.Text>

                      <Row>
                        
                        <Col>
                          <Card.Link className="button">
                          <Link to='/order'>
                            <Button variant="warning">
                              <BsCart2 /> &nbsp;Order
                            </Button>
                            </Link>
                          </Card.Link>
                        </Col>
                        <Col><Badge bg="secondary">Price: {"\u20B9"} 8</Badge></Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
                <br />
                <Row>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://graphicrecipes.com/wp-content/uploads/2021/03/111-2-1024x630.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Chilly Chicken</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Piece
                      </Card.Subtitle>
                      <Card.Text></Card.Text>
                      <Row>
                        
                        <Col>
                          <Card.Link className="button">
                          <Link to='/order'>
                            <Button variant="warning" >
                              <BsCart2 /> &nbsp;Order
                            </Button>
                            </Link>
                          </Card.Link>
                        </Col>
                        <Col><Badge bg="secondary">Price: {"\u20B9"} 15</Badge></Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <GiRotaryPhone />
                &nbsp;Contact us
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <Card border="info">
                      <Card.Body>
                        <Card.Img variant="top" src={sayan} />
                        <br />
                        <Card.Title>সায়ন বৈরাগ্য</Card.Title>
                        <Card.Text>
                          <GiPhone /> &nbsp; 9614278503 <br/>
                          <GiPhone /> &nbsp; 6296803703
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <br />
                  <Col>
                    <Card border="info">
                      <Card.Body>
                        <Card.Img variant="top" src={gautam} />
                        <br />
                        <Card.Title>গৌতম চক্রবর্তী</Card.Title>
                        <Card.Text>
                        <GiPhone /> &nbsp; 8388075911 <br/>
                          <GiPhone /> &nbsp; 8436594584
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col>
                    <Card border="info">
                      <Card.Body>
                        <Card.Img variant="top" src={ashoke} />
                        <br />
                        <Card.Title>অশোক চক্রবর্তী</Card.Title>
                        <Card.Text>
                          <GiPhone /> &nbsp; 9474531892 <br/>
                          <GiPhone /> &nbsp; 6295857432
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <br />
                  <Col>
                    <Card border="info">
                      <Card.Body>
                        <Card.Img variant="top" src={satadol} />
                        <br />
                        <Card.Title>শতদল দত্ত</Card.Title>
                        <Card.Text>
                        <GiPhone /> &nbsp; 7872444837 <br/>
                          <GiPhone /> &nbsp; 6294114387
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Row>
      
      
      
    </>
  );
}
