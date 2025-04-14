import ReactWOW from "react-wow";
import shape15 from "/assets/img/shape/15.png";
import { Link } from "react-router-dom";

interface DataType {
  sectionClass?: string;
  hasTitle?: React.ReactNode;
}

const PriceV1 = ({ sectionClass, hasTitle }: DataType) => {
  return (
    <>
      <div
        id="pricing"
        className={`pricing-style-one-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="shape-right-top">
          <img src={shape15} alt="Image Not Found" />
        </div>

        {hasTitle && (
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="site-heading text-center">
                  <h4 className="sub-title">Pricing</h4>
                  <h2 className="title">
                    Flexible pricing plans tailored for your needs
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          <div className="row">
            {/* Vanilla JavaScript Development */}
            <div className="col-lg-6 pricing-one-single mb-5">
              <ReactWOW animation="fadeInUp" delay="100ms">
                <div className="pricing-style-one">
                  <div className="pricing-top">
                    <div className="right">
                      <i className="fab fa-js" />
                    </div>
                    <div className="left">
                      <h4>Vanilla JavaScript Development</h4>
                      <p>
                        Custom static websites using HTML, CSS, and JavaScript
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="price">
                      <h2>
                        <sup>$</sup>150
                      </h2>
                    </div>
                    <ul>
                      <li>Up to 5 static pages</li>
                      <li>Custom UI/UX design</li>
                      <li>Fully responsive</li>
                      <li>SEO optimized</li>
                      <li>1 month free bug fixes</li>
                    </ul>
                    <div className="button mt-30">
                      <Link className="btn-style-regular" to="/contact">
                        <span>Order Now</span>
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>

            {/* React/Next.js Development */}
            <div className="col-lg-6 pricing-one-single mb-5">
              <ReactWOW animation="fadeInUp" delay="200ms">
                <div className="pricing-style-one">
                  <div className="pricing-top">
                    <div className="right">
                      <i className="fab fa-react" />
                    </div>
                    <div className="left">
                      <h4>React/Next.js Development</h4>
                      <p>Interactive and scalable frontend applications</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="price">
                      <h2>
                        <sup>$</sup>250
                      </h2>
                    </div>
                    <ul>
                      <li>Dynamic components</li>
                      <li>State management (Redux/Zustand)</li>
                      <li>Optimized for performance</li>
                      <li>Fully responsive</li>
                      <li>1 minor update request included</li>
                    </ul>
                    <div className="button mt-30">
                      <Link
                        className="btn-style-regular btn-border"
                        to="/contact"
                      >
                        <span>Order Now</span>
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>

            {/* Full-Stack Development */}
            <div className="col-lg-6 pricing-one-single mb-5">
              <ReactWOW animation="fadeInUp" delay="300ms">
                <div className="pricing-style-one">
                  <div className="pricing-top">
                    <div className="right">
                      <i className="fas fa-server" />
                    </div>
                    <div className="left">
                      <h4>Full-Stack Development</h4>
                      <p>Complete web solutions with backend & frontend</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="price">
                      <h2>
                        <sup>$</sup>500
                      </h2>
                    </div>
                    <ul>
                      <li>MERN/Next.js with Express.js backend</li>
                      <li>API integrations</li>
                      <li>Database setup (MongoDB/PostgreSQL)</li>
                      <li>Authentication & security</li>
                      <li>Performance tuning advice</li>
                    </ul>
                    <div className="button mt-30">
                      <Link
                        className="btn-style-regular btn-border"
                        to="/contact"
                      >
                        <span>Order Now</span>
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>

            {/* Hosting & Maintenance */}
            <div className="col-lg-6 pricing-one-single">
              <ReactWOW animation="fadeInUp" delay="400ms">
                <div className="pricing-style-one">
                  <div className="pricing-top">
                    <div className="right">
                      <i className="fas fa-cloud" />
                    </div>
                    <div className="left">
                      <h4>Hosting & Maintenance</h4>
                      <p>Keep your site live, updated, and secure</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="price">
                      <h2>
                        <sup>$</sup>50
                      </h2>
                    </div>
                    <ul>
                      <li>Host setup (Hostinger, Vercel, Netlify)</li>
                      <li>Automated backups & recovery</li>
                      <li>24/7 uptime monitoring</li>
                      <li>Performance & security checks</li>
                      <li>Priority bug fixes</li>
                      <li>SSL certificate setup</li>
                      <li>Domain & email configuration</li>
                    </ul>
                    <div className="button mt-30">
                      <Link className="btn-style-regular" to="/contact">
                        <span>Order Now</span>
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceV1;
