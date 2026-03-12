import React from "react";
import { Container, Col, Row,Card } from "react-bootstrap";


export default function Feature(props) {
  return (
    <section id="feature">
      <Container>
        <Row>
          <Col style={{paddingRight:'10vw'}}>
            <h2 className="title" style={{marginBottom:'5vh'}}>{props.title}</h2>
            <p style={{fontSize:'1.3rem'}}>{props.des}</p>
           
          </Col>
        
          <Col>
            <Row>
              <Col>
                <Card className="impcard">
                  <Card.Img variant="top" src={props.cardimg1} />
                  <Card.Body >
                    <Card.Title>{props.cardtitle1}</Card.Title>
                    <Card.Text>{props.carddes1}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="impcard">
                  <Card.Img variant="top" src={props.cardimg2} />
                  <Card.Body>
                    <Card.Title>{props.cardtitle2}</Card.Title>
                    <Card.Text>{props.carddes2}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="impcard">
                  <Card.Img variant="top" src={props.cardimg3} />
                  <Card.Body>
                    <Card.Title>{props.cardtitle3}</Card.Title>
                    <Card.Text>{props.carddes3}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="impcard">
                  <Card.Img variant="top" src={props.cardimg4} />
                  <Card.Body>
                    <Card.Title>{props.cardtitle4}</Card.Title>
                    <Card.Text>{props.carddes4}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
