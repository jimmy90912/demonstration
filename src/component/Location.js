import React from 'react'

import Container from 'react-bootstrap/Container';
class Location extends React.Component{
  render(){
    return(
      <section id='location'>
          <Container fluid>
        <div className='google'>
        
         {this.props.loc}
        </div>
      </Container>
      </section>
      
      
    )
  }
}
export default Location
