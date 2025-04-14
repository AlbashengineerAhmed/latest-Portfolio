import about3 from "/assets/img/about/3.jpg";
import shape12 from "/assets/img/shape/12.png";
import { Link } from "react-router-dom";

const FaqV1 = () => {
  return (
    <>
      <div className="faq-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="thumb-style-one">
                <img src={about3} alt="Image Not Found" />
                <div className="chat-card">
                  <p>{`Can't find what you're looking for?`}</p>
                  <h5>Let's chat about your project</h5>
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
                        Can I see examples of your past work?
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
                          Absolutely! You can check out my portfolio showcasing
                          various frontend projects built with modern
                          technologies like React, Next.js, and JavaScript. Feel
                          free to reach out for specific project demos.
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
                        What technologies do you specialize in?
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
                          I specialize in modern frontend technologies,
                          including JavaScript, TypeScript, React.js, Next.js,
                          Redux, Tailwind CSS, and more. I also integrate APIs,
                          optimize website performance, and ensure responsive
                          UI/UX.
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
                        How do you handle project revisions?
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
                          I offer a set number of free revisions based on the
                          project scope. If additional changes are needed after
                          project delivery, I provide maintenance plans or
                          hourly-based revisions for further updates.
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
                        Do you provide ongoing support after project completion?
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
                          Yes! I offer maintenance plans to keep your website up
                          to date, fix bugs, and implement minor feature
                          updates. You can choose monthly support for continuous
                          improvements.
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
                        How long does it take to complete a project?
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
                          Project timelines depend on complexity. A simple
                          website can take 1-2 weeks, while a more advanced
                          project (React/Next.js, APIs, complex UI) may take 3-6
                          weeks. I always provide an estimated timeline before
                          starting.
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
                        What is your preferred communication method?
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
                          I communicate via email, WhatsApp, and Zoom calls. We
                          can schedule regular updates and feedback sessions to
                          ensure smooth collaboration throughout the project.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item accordion-style-one">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        How do I get started?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Getting started is easy! Just reach out through my
                          contact page or send me a message. We’ll discuss your
                          project details, requirements, and pricing, and I'll
                          guide you through the next steps.
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

export default FaqV1;
