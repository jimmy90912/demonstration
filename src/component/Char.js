import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';


function Char(props) {

  

    return(
      <section id='char' >
        <Container fluid>
          <Row>
            <Col lg={7}>
              <div className='charcontent' >
                <p className='title'>{props.title}</p>
          
                <p style={{fontSize:'1.3rem'}}>{props.des1}</p>
               
              </div>
            </Col>
            <Col lg={5}>
              <Image src={props.img} fluid style={{height:'50vh'}}/>
            </Col>
          </Row>

        </Container>
        
        
        
      
      </section>
      
    )
  
}

export default Char