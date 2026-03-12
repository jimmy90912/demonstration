import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


import Card from 'react-bootstrap/Card';



class Listpro extends React.Component{
  render(){
    return(
      <section id='listpro'>
        <Container fuild>
        <p className='mid-title'>PROPERTIES</p>
        <Row>
          {this.props.arr.map(item=>{return(
            <Col lg={4} key={item.id}>
              <Card className='card'>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                <Card.Title style={{fontWeight:'bold'}}>{item.name}</Card.Title>
                  
                  <Row style={{color:'gray'}}>
                    <Col lg={6}>
                      
                      <div>{item.add}</div>
                     <div>{item.bath}</div>
      
                   

                    </Col>
                    <Col lg={6}>
                      <div>{item.bedroom}</div>
                      <div> {item.bed}</div>
                   
      

                    </Col>
                  </Row> 
                  <p>{item.loc}</p>
                </Card.Body>
              </Card> 

            </Col>
          )})}
          
        </Row>
      </Container>
      </section>

    )
  }
}
export default Listpro