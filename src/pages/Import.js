import React from 'react';
import About from '../component/About';
import Feature from '../component/Feature';
import img1 from '../assets/services/service3.png';
import cardimg1 from '../assets/icons/speed.png';
import cardimg2 from '../assets/icons/safe.png';
import cardimg3 from '../assets/icons/customer.png';
import cardimg4 from '../assets/icons/change.png';
import charimg from '../assets/services/handshake.png';
import Char from '../component/Char.js';
import Location from '../component/Location.js';

const thisloc=<iframe src="" width="100%" height="500px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>

const title='service';
const des=''


const cardtitle1='title';
const carddes1='';
const cardtitle2='title';
const carddes2='';
const cardtitle3='title';
const carddes3='';
const cardtitle4='title';
const carddes4='';

const chartitle='title';
const des1=''

export default function Import(){
  return (
    <div>
      <About img={img1} title={title} des={des}/>
      <Feature title={title} des={des} cardtitle1={cardtitle1} cardimg1={cardimg1}
      carddes1={carddes1} cardtitle2={cardtitle2} carddes2={carddes2} cardimg2={cardimg2}
      cardtitle3={cardtitle3} cardimg3={cardimg3} carddes3={carddes3} cardtitle4={cardtitle4}
      cardimg4={cardimg4}
      carddes4={carddes4}
      ></Feature>
      <Char title={chartitle} img={charimg} des1={des1} ></Char>
      <Location loc={thisloc}></Location>
    </div>
  )
}