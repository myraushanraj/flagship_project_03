import Reveal from "react-awesome-reveal"
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const Section2 = ()=>{
    return(
        <section className='container no-bottom'>
        <div className="row">
            <div className="col-md-6 mb30">
            <h1 className="heading-mt-200 col-white">Ecommerce</h1>
            <p className="lead col-white">
            Product, service and hypermarket all at one super app. Dedicated tracking dashboard along with AI tracking for better buyer and seller recommendations.
              </p>
            </div>
            <div className="col-md-6 mb30">
                <span className="box-url">
                    <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
              <img src="./img/misc/Intern-Student.png" className="img-fluid" alt=""/>
          </Reveal>
                </span>
            </div>                                               
        </div>

        <div className="row">
           
            <div className="col-md-6 mb30 heading-mt-mobile">
                <span className="box-url">
                    <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
              <img src="./img/misc/Neural-Networks.png" className="img-fluid" alt=""/>
          </Reveal>
                </span>
            </div> 
            <div className="col-md-6 mb30">
            <p className="lead heading-mt-200 col-white">
            Let’s Chat, book a session and ignite your entrepreneurial journey today.  </p>
            </div>                                              
        </div>
      </section>
    )
}

export default Section2;