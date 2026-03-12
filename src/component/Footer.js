import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
class Footer extends React.Component{
  render(){
    return(
      <section id='footer'>
        
        <Container>
          <Row>
           
            <Col lg={4} ><p id='box-title'></p></Col>
            <Col lg={4} className='d-flex flex-column align-items-left justify-content-top'>
            <div className='footeritem'> <p style={{fontSize:'1.2rem', fontWeight:'bold'}}>RESOURCE</p>
              </div>
              <Link to='/' className='nolink'>
              <div className='footeritem'> Home
              </div>
              </Link>
              <Link to='/Service1' className='nolink'>
              <div className='footeritem'>  Service
              </div>
              </Link>
              <Link to='/Renovation' className='nolink'>
              <div className='footeritem'>  Renovation
              </div>
              </Link>
              <Link to='/Import' className='nolink'>
              <div className='footeritem'>  Service
              </div>
              </Link>
              <Link to='/Explore' className='nolink'>
              <div className='footeritem'> Explor 
              </div>
              </Link>
              <Link to='/Contact' className='nolink'>
              <div className='footeritem'> Contact Us
              </div>
              </Link>
              
            </Col>
            
            <Col lg={4} className='d-flex flex-column align-items-left justify-content-top'>
              
            <div className='footeritem'> <p style={{fontSize:'1.2rem', fontWeight:'bold'}}>CONTACT US</p>
              </div>

              <div className='footeritem'>
              </div>
              
              <div className='footeritem'>
              </div>
              <div className='footeritem'>
              </div>
              </Col>
          </Row>
          <hr/>
          <Row><p id='text-middle'></p></Row>
        </Container>
      </section>
      
    )
  }
}

export default Footer