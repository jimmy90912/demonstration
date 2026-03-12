import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/services/service1.png'
import img2 from '../assets/services/service2.png'
import img3 from '../assets/services/service3.png'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
class Services extends React.Component{

  render(){
    return(
      <section id='services'>
       
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            <Col>
              <h2 className='mid-title'>Our Services</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>        
            <Card className='card'>
              <Card.Img variant="right" src={img1} />
              <Card.Body>
                <Card.Title><p style={{fontWeight:'bold'}}>Service 1</p></Card.Title>
                <Card.Text>
               
                
                </Card.Text>
                <div >
                <Link to="/Service1"><Button variant="primary" >Read More</Button></Link>
                </div>
                
                
              </Card.Body>
            </Card>
            </Col>
            <Col sm={4}>        
            <Card className='card'>
              <Card.Img variant="right" src={img2} />
              <Card.Body>
                <Card.Title><p style={{fontWeight:'bold'}}>Renovation</p></Card.Title>
                <Card.Text>
               
                
                </Card.Text>
                <div className='mid'>
                <Link to="/Renovation"><Button variant="primary" >Read More</Button></Link>
                </div>
                
              </Card.Body>
            </Card>
            </Col>
            <Col sm={4}>        
            <Card className='card'>
              <Card.Img variant="right" src={img3} />
              <Card.Body>
                <Card.Title><p style={{fontWeight:'bold'}}>Services 2</p></Card.Title>
                <Card.Text>
               
                </Card.Text>
                <div className='mid'>
                <Link to="/Import"><Button variant="primary" >Read More</Button></Link>
                </div>
                
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
        

      </section>
    )
  }
}
export default Services

