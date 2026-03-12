import React from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
// this is the about component and can be reused!
class About extends React.Component{
  render(){
    return(
      <section id='about' >
       <div className='about'>
        {/* <Container  fluid> */}
        
        
        <div id='content'>
          {/* use a grid layout to organize the title and content */}
          <Row>
          <Col lg={5}><Image src={this.props.img} style={{ width: '100%'}}rounded />
          </Col>
          <Col lg={7}>
            <div className='title' style={{justifyContent:'left', paddingLeft:'5vw'}}>
              {this.props.title}
            
              <p style={{fontSize:'1rem', color:'grey',marginTop:'2vh'}}>
                {this.props.des}
              </p>
              <Link to="/Contact">
                <Button variant="primary" >Contact Us</Button>
              </Link>
              
            </div>
          </Col>
            
          </Row>
          
        </div>
        {/* </Container> */}
        </div>
      </section>

    )
  }
}

export default About