import React from 'react'
import About from '../component/About'
import Services from '../component/Services'

import Award from '../component/Award'
import Location from '../component/Location'
import Carousels from '../component/Caroucels'
import Testimonial from '../component/Testimonial'
// the home page, showing the information and layout.
const title='About '
const img=require('../assets/room/1/1.6.png')
const des='Welcome'
const thisloc=<iframe src="" width="100%" height="500px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>

var img1=require('../assets/template/template5.png')
var img2=require('../assets/template/template4.png')
var img3=require('../assets/template/template3.png')
var img4=require('../assets/template/template2.png')
var img5=require('../assets/template/template1.png')
var imgset=[{id:1, src:img1,alt:'1'},
{id:2, src:img2,alt:'2'},
{id:3, src:img3,alt:'3'},
{id:4, src:img4,alt:'4'},
{id:5, src:img5,alt:'5'}
]
const cartitle='WELCOME';
const cardes='title 2'
const cardes2='title 3'

class Home extends React.Component{
  render(){
    return(
      <section id='home'>
        <Carousels imgset={imgset} title={cartitle} des={cardes} des2={cardes2}/>
       
        <About title={title} img={img} des={des}/>
        <Award/>
        <Services/>
        <Testimonial></Testimonial>
        <Location loc={thisloc}/>
      </section>
    )
  }
}
export default Home