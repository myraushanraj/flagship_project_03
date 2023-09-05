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

const Section2 = () => {
  return (
    <section className='container no-bottom'>
      <div className="row">
        <div className="col-md-6 mb30">
          <h1 className="heading-mt-200 col-white">Our Offerings</h1>
          {/* <p className="lead col-white">
            Product, service and hypermarket all at one super app. Dedicated tracking dashboard along with AI tracking for better buyer and seller recommendations.
              </p> */}
        </div>
        <div className="col-md-6 mb30">
          <div className="row">
            <div className="col-md-6 mb30">
              <span className="box-url">
                <div>
                  <img src="./img/misc/Fastrack-Program.png" className="img-fluid-size" alt=""/>
                </div>
                <h2 className="col-white">Fastrack Program: </h2>
                <p className="lead col-white">
                  Modules developed by industry titans,with real world case studies, CXO guest lectures.
                </p>
              </span>
            </div>
            <div className="col-md-6 mb30">
              <span className="box-url">
              <div>
                  <img src="./img/misc/Incubation-Program.png" className="img-fluid-size" alt=""/>
                </div>
                <h2 className="col-white">Flagship Incubator: </h2>
                <p className="lead col-white">
                  Helping students to brainstorm killer ideas, launch and raise funds for ventures.
                </p>
              </span>
            </div>
            <div className="col-md-6 mb30">
              <span className="box-url">
              <div>
                  <img src="./img/misc/Neural-Networks.png" className="img-fluid-size" alt=""/>
                </div>
                <h2 className="col-white">Neural <br />Network :</h2>
                <p className="lead col-white">
                  AI tools to help you put in the greater sphere of business.
                </p>
              </span>
            </div>
            <div className="col-md-6 mb30">
              <span className="box-url">
              <div>
                  <img src="./img/misc/Intern-Student.png" className="img-fluid-size" alt=""/>
                </div>
                <h2 className="col-white">Ecommerce: </h2>
                <p className="lead col-white">
                  Business launch platform making everyone out there the next Jeff Bezos, and Mark Zuckerberg.
                </p>
              </span>
            </div>
          </div>
        </div>


      </div>


    </section>
  )
}

export default Section2;