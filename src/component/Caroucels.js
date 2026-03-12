import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Link}  from 'react-router-dom';


function Carousels(props) {
  return (
    <section id='carousels'>
        
        
    <Carousel>
      {props.imgset.map(prop=>{return(
        <Carousel.Item key={prop.id}>
          
          <Image src={prop.src} className='carimg' text='' />
          
        </Carousel.Item>
      )})}
      
  
    </Carousel>
    <div id='overlay'>
      <div id='overlay-text'>
        <p style={{fontSize:'1.5vw',color:'rgb(49,109,244)',fontWeight:'bold'}}>{props.title}</p>
        <p style={{fontSize:'3vw'}}>{props.des}</p>
        <p style={{fontSize:'3vw'}}>{props.des2}</p>
        <Link to="/Contact">
          <Button variant="primary" className='responsive-btn'>Contact Us</Button>
        </Link>
      </div>
    </div>
    
  </section>
  );
}
export default Carousels;