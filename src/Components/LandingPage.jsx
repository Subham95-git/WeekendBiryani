import React from "react";
import "./style/LandingPage.css";
import Navigation from "./Navigation";
import { Accordion, Row, Card, Button, Col } from "react-bootstrap";
import { BsCart2 } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { GiRotaryPhone, GiPhone } from "react-icons/gi";

import sayan from '../Resources/sayan.jpeg';
import gautam from '../Resources/gautam.jpeg'

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
              <Accordion.Header><MdRestaurantMenu/>&nbsp;Menu</Accordion.Header>
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

                      <Card.Link className="button">
                        <Button variant="warning">
                          <BsCart2 /> &nbsp;Order Now
                        </Button>
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Row>
                <br/>
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

                      <Card.Link className="button">
                        <Button variant="warning">
                          <BsCart2 /> &nbsp;Order Now
                        </Button>
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><GiRotaryPhone/>&nbsp;Contact us</Accordion.Header>
              <Accordion.Body>
              <Row>
                <Col>
                <Card border="info">
                <Card.Body>
                <Card.Img variant="top" src={sayan} />
                <br/>
                      <Card.Title >
                      সায়ন বৈরাগ্য
                      </Card.Title>
                      <Card.Text>
                        <GiPhone/> &nbsp; +91 9614278503
                      </Card.Text>

                      
                    </Card.Body>
                </Card>
                </Col>
                <br/>
                <Col>
                <Card border="info">
                <Card.Body>
                <Card.Img variant="top" src={gautam} />
                <br/>
                      <Card.Title >
                      গৌতম চক্রবর্তী
                      </Card.Title>
                      <Card.Text>
                        <GiPhone/> &nbsp; +91 8388075911
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
