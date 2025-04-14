import about4 from "/assets/img/about/4.jpg";
import shape12 from "/assets/img/shape/12.png";
import { Link } from "react-router-dom";

const FaqV2 = () => {
  return (
    <>
      <div className="faq-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="thumb-style-one">
                <img src={about4} alt="Image Not Found" />
                <div className="chat-card">
                  <p>{`Can't find what you're looking for?`}</p>
                  <h5>Let's discuss your project</h5>
                  <Link to="#">
                    <i className="fab fa-facebook-messenger" />
                  </Link>
                  <img src={shape12} alt="Image Not Found" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="faq-style-one-items">
                <h4 className="sub-title">FAQ</h4>
                <h2>Frequently Asked Questions</h2>
                <div className="accordion mt-30" id="faqAccordion">
                  <div className="accordion-item accordion-style-one">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Can I see your work samples?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes! You can check out my portfolio showcasing various
                          frontend projects built with modern technologies like
                          React, Next.js, and JavaScript. Feel free to contact
                          me for specific examples.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item accordion-style-one">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What are your rates?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          My pricing varies depending on the project's
                          complexity and requirements. Basic static websites
                          start at $150, React/Next.js projects at $250, and
                          full-stack solutions at $500. Contact me for a custom
                          quote!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item accordion-style-one">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How do you prefer to communicate?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          I communicate via email, WhatsApp, and Zoom calls. I
                          ensure regular updates and feedback sessions to keep
                          the project aligned with your expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item accordion-style-one">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How long does a project take to complete?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Timelines vary based on project complexity. Simple
                          websites take 1-2 weeks, while advanced projects
                          (React, API integrations) may take 3-6 weeks. I'll
                          provide an estimated timeline before starting.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item accordion-style-one">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Do you offer ongoing support?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes! I offer maintenance plans to ensure your website
                          stays updated, secure, and optimized. Support includes
                          bug fixes, minor updates, and performance monitoring.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item accordion-style-one">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        How do I get started?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Just reach out through my contact page or send me a
                          message! We'll discuss your project details, pricing,
                          and timeline, and I'll guide you through the next
                          steps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqV2;
