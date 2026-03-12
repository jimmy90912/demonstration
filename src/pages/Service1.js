import React from 'react'
import About from '../component/About'
import Location from '../component/Location'
import Listpro from '../component/Listpro'
import Listpro2 from '../component/Listpro2'
import Offer from '../component/Offer'
const title=''
const des=''
const img=require('')

const title2='SHORT-TERM RENTAL'
const des2=''
const img22=require('')


const loc=<iframe src="" width="100%" height="500px" style={{border:0}} title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

var img1=require('')
var img2=require('')
var img3=require('')
var img4=require('')
var img5=require('')
var img6=require('')
var img7=require('')
const props=[{id:1,img:img1,name:'',bedroom:'Bedrooms 1',bed:'Bed 1',bath:'Bathrooms 1',add:'Additional areas 1'},
{id:2,img:img2,name:'',bedroom:'Bedrooms 1',bed:'Bed 1',bath:'Bathrooms 1',add:'Additional areas 2'},
{id:3,img:img3,name:'',bedroom:'Bedrooms 1',bed:'Bed 1',bath:'Bathrooms 1',add:'Additional areas 1'},
{id:4,img:img4,name:'',bedroom:'Bedrooms 1',bed:'Bed 1',bath:'Bathrooms 1',add:'Additional areas 1'},
{id:5,img:img5,name:'',bedroom:'Bedrooms 1',bed:'Bed 1',bath:'Bathrooms 2',add:'Additional areas 2'},
{id:6,img:img6,name:'',bedroom:'Bedrooms 1',bed:'Bed 1',bath:'Bathrooms 1',add:'Additional areas 1'},
{id:7,img:img7,name:'',bedroom:'Bedrooms 1',bed:'Bed 1',bath:'Bathrooms 1',add:'Additional areas 1'},
]

var img8=require('../assets/short rent/1.jpg')
var img9=require('../assets/short rent/1.jpg')
var img10=require('../assets/short rent/1.webp')
var img11=require('../assets/short rent/1.jpg')
var img12=require('../assets/short rent/1.jpg')
var img13=require('../assets/short rent/1.jpeg')
var img14=require('../assets/short rent/1.jpeg')
var img15=require('../assets/short rent/1.jpeg')
var img16=require('../assets/short rent/1.jpg')
var img17=require('../assets/short rent/1.jpg')
const propsforrent=[{id:1,img:img8,name:'',bedroom:'Bedrooms 1',bed:'Bed 1',bath:'Bathrooms 1',add:'Additional areas 3',loc:''},
{id:2,img:img9,name:'',bedroom:'Bedrooms 1',bed:'Bed 3',bath:'Bathrooms 1',add:'Additional areas 3', loc:''},
{id:3,img:img10,name:'',bedroom:'Bedrooms 1',bed:'Bed 2',bath:'Bathrooms 1',add:'Additional areas 3',loc:''},
{id:4,img:img11,name:'',bedroom:'Bedrooms 1',bed:'Bed 2',bath:'Bathrooms 1',add:'Additional areas 3', loc:''},
{id:5,img:img12,name:'',bedroom:'Bedrooms 1',bed:'Bed 1',bath:'Bathrooms 1',add:'Additional areas 3',loc:''},
{id:6,img:img13,name:'',bed:'Bed 2',bath:'Bathrooms 1',add:'Additional areas 1', loc:''},
{id:7,img:img14,name:'',bedroom:'Bedrooms 3',bed:'Bed 3',bath:'Bathrooms 1',add:'Additional areas 1', loc:''},
{id:8,img:img15,name:'',bedroom:'Bedrooms 1',bed:'Bed 1',bath:'Bathrooms 1',add:'Additional areas 5', loc:''},
{id:9,img:img16,name:'',bedroom:'Bedrooms 1',bed:'Bed 2',bath:'Bathrooms 1',add:'Additional areas 3', loc:''},
{id:10,img:img17,name:'',bedroom:'Bedrooms 1',bed:'Bed 2',bath:'Bathrooms 1',add:'Additional areas 3', loc:''},
]
class Service1 extends React.Component{
  render(){
    return(
      <section id='service1'>
        
        <body>
          <About title={title} des={des} img={img}/>
          <Offer/>
          <Listpro arr={props}/>
          <About title={title2} des={des2} img={img22}/>
          <Listpro2 arr={propsforrent}/>
          <Location loc={loc}/>
        </body>
        
      </section>
    )
  }
}
export default Service1