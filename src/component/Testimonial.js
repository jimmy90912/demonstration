import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import img from "../assets/services/testimonial.png";
function Testimonial(props) {
  return (
    <section id="Testimonial">
      <Image src={img} fluid></Image>
      <div className="describe">
        <p style={{fontSize:'3.9vw', fontWeight:'bold'}}>title</p>
      </div>
      <Carousel className="carousel2">
        <Carousel.Item>
          <div className="textcenter">
            <div>
              <h2 style={{fontSize:'3.5vw'}}>
                
              </h2>
              <h3 style={{fontSize:'1.5vw'}}>
                
              </h3>
              <p style={{fontSize:'2.3vw'}}>
                
                
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="textcenter">
            <div>
              <h2 style={{fontSize:'3.5vw'}}>
                
              </h2>
              <h3 style={{fontSize:'1.5vw'}}>
                
              </h3>
              <p style={{fontSize:'2.3vw'}}>
                
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="textcenter">
            <div>
              <h2 style={{fontSize:'3.5vw'}}></h2>
              <h3 style={{fontSize:'1.5vw'}}></h3>
              <p style={{fontSize:'2.3vw'}}>
                
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export default Testimonial;
