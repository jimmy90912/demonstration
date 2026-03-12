import React from 'react';
import img from '../assets/services/handshake.png';
import About from '../component/About';
import Location from '../component/Location';
import ContactForm from '../component/Form';
const thisloc=<iframe src=""></iframe>

const title= 'Get In Touch';


function Des(){
   return (<div><p>
   
  </p>
  <p></p>
  </div>)
  

}


export default function Contact(){
  return(
    <div>
      <About title={title} img={img} des={<Des/>}/>
      {/* <ContactForm/> */}
      <Location loc={thisloc}/>
      
    </div>
  )
}