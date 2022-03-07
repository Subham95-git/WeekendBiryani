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
                      src="https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU="
                    />
                    <Card.Body>
                      <Card.Title>Chicken Biryani</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Full Plate
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
                        <Col><Badge bg="secondary">Price: {"\u20B9"} 90</Badge></Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
                <br />
                <Row>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-510078,msid-67438684/food-eat-biryani-gettyimage.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Chicken Biryani</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Half Plate
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
                        <Col><Badge bg="secondary">Price: {"\u20B9"} 50</Badge></Col>
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
