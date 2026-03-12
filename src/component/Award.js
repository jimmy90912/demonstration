import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import img1 from '../assets/services/handshake.png';

class Award extends React.Component{

  
  render(){
    return(
      <section id='award' >
        <Container fluid>
          <Row>
            <Col lg={7}>
              <div className='awardcontent' >
                <p className='title'>Why Choose Us</p>
          
                <p ></p>
              </div>
            </Col>
            <Col lg={5}>
              <Image src={img1} fluid style={{height:'50vh'}}/>
            </Col>
          </Row>

        </Container>
        
        
        
      
      </section>
      
    )
  }
}

export default Award