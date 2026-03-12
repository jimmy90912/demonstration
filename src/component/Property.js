import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
var img1=require('../assets/room/2/2.1.jpeg')
var img2=require('../assets/room/2/2.6.jpeg')
var img3=require('../assets/room/2/2.3.jpeg')
var img4=require('../assets/room/2/2.4.jpeg')
var img5=require('../assets/room/2/2.5.jpeg')
var imgset=[{id:1, src:img1,alt:'1'},
{id:2, src:img2,alt:'2'},
{id:3, src:img3,alt:'3'},
{id:4, src:img4,alt:'4'},
{id:5, src:img5,alt:'5'}
]
class Property extends React.Component{
  



  render(){
    return(
      <section id='property'>
        
        
        <Carousel style={{zIndex:'2'}}>
          {imgset.map(props=>{return(
            <Carousel.Item key={props.id}>
              
              <Image src={props.src} className='carimg' />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          )})}
          
      
        </Carousel>
        <div className='circle1'></div>
        <div className='circle2'></div>
        
      </section>
    )
  }
}

export default Property