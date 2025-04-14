import TailwindCSS from "/assets/img/icon/tailwindcss.png";
import Javascript from "/assets/img/icon/javascript.png";
import ReactJS from "/assets/img/icon/react.png"
import TypScript from "/assets/img/icon/typescript.png";
import next from "/assets/img/icon/nextjs.png";
import redux from "/assets/img/icon/redux.png";
import CountUp from 'react-countup'
import ReactWOW from "react-wow"


const FactV1 = () => {
    return (
      <>
        <div className="fun-factor-area default-padding overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="site-heading text-center">
                  <h4 className="sub-title">Top Skills</h4>
                  <h2 className="title">See my expertise</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="fun-fact-style-two-items text-center">
              {/* Single item */}
              <ReactWOW animation="fadeInUp">
                <div className="funfact-style-two-item">
                  <div className="icon">
                    <img src={TypScript} alt="Image Not Found" />
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <CountUp end={80} enableScrollSpy={true} />
                      </div>
                      <div className="operator">%</div>
                    </div>
                    <span className="medium">TypScript</span>
                  </div>
                </div>
              </ReactWOW>

              {/* Single item */}
              <ReactWOW animation="fadeInUp" delay="100ms">
                <div className="funfact-style-two-item">
                  <div className="icon">
                    <img src={ReactJS} alt="Image Not Found" />
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <CountUp end={95} enableScrollSpy={true} />
                      </div>
                      <div className="operator">%</div>
                    </div>
                    <span className="medium">ReactJS</span>
                  </div>
                </div>
              </ReactWOW>

              {/* Single item */}
              <ReactWOW animation="fadeInUp" delay="200ms">
                <div className="funfact-style-two-item">
                  <div className="icon">
                    <img src={TailwindCSS} alt="Image Not Found" />
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <CountUp end={80} enableScrollSpy={true} />
                      </div>
                      <div className="operator">%</div>
                    </div>
                    <span className="medium">Tailwind CSS</span>
                  </div>
                </div>
              </ReactWOW>

              {/* Single item */}
              <ReactWOW animation="fadeInUp" delay="300ms">
                <div className="funfact-style-two-item wow fadeInUp">
                  <div className="icon">
                    <img src={Javascript} alt="Image Not Found" />
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <CountUp end={95} enableScrollSpy={true} />
                      </div>
                      <div className="operator">%</div>
                    </div>
                    <span className="medium">JavaScript</span>
                  </div>
                </div>
              </ReactWOW>

              {/* Single item */}
              <ReactWOW animation="fadeInUp" delay="400ms">
                <div className="funfact-style-two-item">
                  <div className="icon">
                    <img src={redux} alt="Image Not Found" />
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <CountUp end={80} enableScrollSpy={true} />
                      </div>
                      <div className="operator">%</div>
                    </div>
                    <span className="medium">Redux</span>
                  </div>
                </div>
              </ReactWOW>

              {/* Single item */}
              <ReactWOW animation="fadeInUp" delay="500ms">
                <div className="funfact-style-two-item">
                  <div className="icon">
                    <img src={next} alt="Image Not Found" />
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <CountUp end={90} enableScrollSpy={true} />
                      </div>
                      <div className="operator">%</div>
                    </div>
                    <span className="medium">NEXT JS</span>
                  </div>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </>
    );
};

export default FactV1;