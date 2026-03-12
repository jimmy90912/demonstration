import React from 'react'
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
const ess=[{name1:'Air conditioning',name2:'Cooking basics'},
{name1:'Dedicated workspace',name2:'Dishes and silverware'},
{name1:'Hair dryer',name2:'Dishes and silverware'},
{name1:'Dedicated workspace',name2:'Heating'},
{name1:'Kitchen',name2:'TV'},
{name1:'Washing machine',name2:'Wifi'},
{name1:'Bath',name2:'Conditioner'},
{name1:'Hot water',name2:'Shampoo'},
{name1:'Refrigerator',name2:'Shower gel'},
]
class Offer extends React.Component{

   // find if the element is in the windowview
   componentDidMount(){window.addEventListener('scroll',this.show)}

   show=()=>{
            const area = document.getElementById('offer').getBoundingClientRect();
        if (area.top <= window.innerHeight) {
          document.getElementById('offer').classList.add('moveleft');
        }
    }
 
   componentWillUnmount() {
     window.removeEventListener('scroll', this.show);
   }


  render(){
    return(
      <section id='offer'>
        <Container>
          <p className='mid-title' >ESSENTIALS</p>
          <Row>
            
            {ess.map(each=>{return(<Row><Col lg={{span:2,offset:3}}>{each.name1}</Col>
            <Col lg={{span:2,offset:3}}>{each.name2}</Col>
              </Row>)})}
            
          </Row>
        </Container>
      </section>
      
      
    )
  }
}
export default Offer