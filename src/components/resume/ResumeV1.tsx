import ReactWOW from "react-wow";

interface DataType {
  sectionClass?: string;
}

const ResumeV1 = ({ sectionClass }: DataType) => {
  return (
    <>
      <div
        id="resume"
        className={`timeline-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="time-line-style-one-box">
            <div className="row guttex-xl">
              <div className="col-lg-6">
                <h2 className="glow-text">My Expertise</h2>
                <div className="time-style-one-items">
                  {/* Work Experience */}
                  <ReactWOW animation="fadeInUp">
                    <div className="timeline-style-one-item glass-card glow-effect">
                      <div className="timeline-header">
                        <div className="left">
                          <h4>Front-End Developer</h4>
                          <p>Bites ERP Platform</p>
                        </div>
                        <div className="right">
                          <span>06/2025 – Present</span>
                        </div>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Developed features for a large-scale ERP system integrated with a social media platform. Built reusable components using Next.js, React, TypeScript, Material-UI, and Tailwind.
                        </p>
                      </div>
                    </div>
                  </ReactWOW>

                  <ReactWOW animation="fadeInUp">
                    <div className="timeline-style-one-item glass-card glow-effect">
                      <div className="timeline-header">
                        <div className="left">
                          <h4>Freelance Front-End Developer</h4>
                          <p>Self-employed / Remote</p>
                        </div>
                        <div className="right">
                          <span>08/2023 – 05/2025</span>
                        </div>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Developed modern web apps with React.js, Next.js, and Tailwind CSS, focusing on performance and responsive design. Integrated authentication, dashboards, and real-time data.
                        </p>
                      </div>
                    </div>
                  </ReactWOW>
                </div>
              </div>

              <div className="col-lg-6">
                <h2 className="glow-text">Education & Certifications</h2>
                <div className="time-style-one-items">
                  {/* Education */}
                  <ReactWOW animation="fadeInUp">
                    <div className="timeline-style-one-item glass-card glow-effect">
                      <div className="timeline-header">
                        <div className="left">
                          <h4>Bachelor of Computer Science</h4>
                          <p>Faculty of Computer and Artificial Intelligence</p>
                        </div>
                        <div className="right">
                          <span>2023</span>
                        </div>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Graduated with a 3.4 GPA, specializing in software
                          development and artificial intelligence.
                        </p>
                      </div>
                    </div>
                  </ReactWOW>

                  {/* Certifications */}
                  <ReactWOW animation="fadeInUp">
                    <div className="timeline-style-one-item glass-card glow-effect">
                      <div className="timeline-header">
                        <div className="left">
                          <h4>Front-End Developer</h4>
                          <p>IBM</p>
                        </div>
                        <div className="right">
                          <span>2023</span>
                        </div>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Completed a 9-course program covering HTML, CSS,
                          JavaScript, React, UI/UX design, GitHub, and RESTful
                          APIs.
                        </p>
                      </div>
                    </div>
                  </ReactWOW>

                  <ReactWOW animation="fadeInUp">
                    <div className="timeline-style-one-item glass-card glow-effect">
                      <div className="timeline-header">
                        <div className="left">
                          <h4>Front-End Developer</h4>
                          <p>Meta</p>
                        </div>
                        <div className="right">
                          <span>2023</span>
                        </div>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Gained hands-on experience in JavaScript, HTML/CSS,
                          React, version control, and UX/UI design.
                        </p>
                      </div>
                    </div>
                  </ReactWOW>

                  <ReactWOW animation="fadeInUp">
                    <div className="timeline-style-one-item glass-card glow-effect">
                      <div className="timeline-header">
                        <div className="left">
                          <h4>Full Stack Web Development</h4>
                          <p>Route IT Training Center</p>
                        </div>
                        <div className="right">
                          <span>2022</span>
                        </div>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Certified in MERN stack (MongoDB, Express, React,
                          Node.js), showcasing expertise through real-world
                          projects.
                        </p>
                      </div>
                    </div>
                  </ReactWOW>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeV1;
