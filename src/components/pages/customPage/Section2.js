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
            <div className="col-lg-6 col-sm-6 col-6 mb30">
            <h1 className="col-white">Successfully Incubated Business  <br />13+ </h1>
            </div>
            <div className="col-lg-6 col-sm-6 col-6 mb30">
                <span className="box-url">
                   
                    <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
              <img src="./img/misc/Incubation.png" className="img-fluid" alt=""/>
          </Reveal>
                </span>
            </div>                                               
        </div>

        <div className="row">
            <div className="col-lg-6 col-sm-6 col-6 mb30">
            <h1 className="col-white">Touching The AI Dimension Of Business  </h1>
            <p className="lead col-white">
            Exclusive AI deployment for acing every step of the business with flagship.
              </p>
            </div>
            <div className="col-lg-6 col-sm-6 col-6 mb30">
                <span className="box-url">
                   
                    <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
              <img src="./img/misc/AI-dimension.png" className="img-fluid" alt=""/>
          </Reveal>
                </span>
            </div>                                               
        </div>

        <div className="row">
            <div className="col-lg-6 col-sm-6 col-6 mb30">
            <h1 className="col-white">Practical Business Launch Platform </h1>
            <p className="lead col-white">
            Exhilarating 3-month program + 3 months of live industry internship for igniting entrepreneurship.
              </p>
            </div>
            <div className="col-lg-6 col-sm-6 col-6 mb30">
                <span className="box-url">
                   
                    <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
              <img src="./img/misc/AI-dimension.png" className="img-fluid" alt=""/>
          </Reveal>
                </span>
            </div>                                               
        </div>

        <div className="row">
            <div className="col-lg-6 col-sm-6 col-6 mb30">
            <h1 className="col-white">Exclusive Networking</h1>
            <p className="lead col-white">
            Connecting founders exclusively with segmented investors through Cognitive Learning Matching.
              </p>
            </div>
            <div className="col-lg-6 col-sm-6 col-6 mb30">
                <span className="box-url">
                    <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
              <img src="./img/misc/Networking-Form.png" className="img-fluid" alt=""/>
          </Reveal>
                </span>
            </div>                                               
        </div>

    </section>
    )
}

export default Section2;