import React from 'react';
import {Image} from 'react-bootstrap';
import img1 from '../assets/services/athens1.png';
import img2 from '../assets/services/athens2.png';
import img3 from '../assets/services/food.png';

class Explore extends React.Component{
  render(){
    return(
      <section id='explore'>
        <div>
          <h2 className='title'>About</h2>
          <Image src={img1} style={{float:'left', width:'25vw',margin:'0vh 5vh 0vh 0vh'}}></Image>
          <p></p>
            <p></p>
        <p></p>
       
        </div>
        <br/>
        <div>
        <h2 className='title'>Planning a trip</h2>
          <Image src={img2} style={{float:'right', width:'25vw',margin:'0vh 0vh 0vh 5vh'}}></Image>
          <p>

          </p>
            <p>

            </p>
        <p>
        </p>
        <p></p>
       
        </div>
        <br/>
        <div>
        <h2 className='title'>title 3</h2>
          <Image src={img3} style={{float:'left', width:'25vw',margin:'0vh 5vh 0vh 0vh'}}></Image>
          <p></p>
            <p></p>
        <p>

        </p>
        <p></p>
       
        </div>
      </section>
      
    )
  }
}
export default Explore;