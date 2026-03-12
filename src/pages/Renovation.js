import React from 'react'
import Carousels from '../component/Caroucels';
import About from '../component/About.js';
import img from '../assets/services/reno4.png';
import Char from '../component/Char.js';
import Feature from '../component/Feature.js';
import cardimg1 from '../assets/icons/brain.png';
import cardimg2 from '../assets/icons/tool.png';
import cardimg3 from '../assets/icons/communication.png';
import cardimg4 from '../assets/icons/design.png';
import charimg from '../assets/services/handshake.png';

import Location from '../component/Location.js';

const thisloc=<iframe src="" width="100%" height="500px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>

var img1=require('../assets/services/reno1.png')

var img2=require('../assets/services/reno2.png')
var img3=require('../assets/services/reno3.png')

var imgset=[{id:1, src:img1,alt:'1'},
{id:2, src:img2,alt:'2'},
{id:3, src:img3,alt:'3'},
]

const cartitle='WELCOME';
const cardes='title1';
const cardes2='title2';
const title='titel3';
const des='';

const title3='title';
const des3=''

const cardtitle1='title';
const carddes1='';
const cardtitle2='title2';
const carddes2='';
const cardtitle3='title3';
const carddes3='';
const cardtitle4='title4';
const carddes4='';
const chartitle='title5';
const des1=''


class Service2 extends React.Component{
  render(){
    return(
      <section id='service2'>
        <Carousels imgset={imgset} title={cartitle} des={cardes} des2={cardes2}/>
        <About img={img} title={title} des={des}></About>
        <Feature title={title3} des={des3} cardtitle1={cardtitle1} cardimg1={cardimg1}
      carddes1={carddes1} cardtitle2={cardtitle2} carddes2={carddes2} cardimg2={cardimg2}
      cardtitle3={cardtitle3} cardimg3={cardimg3} carddes3={carddes3} cardtitle4={cardtitle4}
      cardimg4={cardimg4}
      carddes4={carddes4}
      ></Feature>
      <Char title={chartitle} img={charimg} des1={des1} ></Char>
      <Location loc={thisloc}></Location>
      </section>
      
    )
  }
}
export default Service2