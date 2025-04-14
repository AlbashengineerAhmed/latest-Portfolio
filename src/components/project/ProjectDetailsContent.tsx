import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productdetails from "../../assets/jsonData/portfolio/PortfolioData.json";

const ProjectDetailsContent = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const projectData = productdetails.find(
    (project) => project.id === Number(id)
  );

  // Redirect if project not found
  if (!projectData) {
    return <h2>Project not found</h2>;
  }

  const {
    thumbFull,
    client,
    date,
    service,
    address,
    description,
    background,
    challenges,
    solution,
    images,
  } = projectData;

  // Image Scroll Animation
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find current project index
  const currentIndex = productdetails.findIndex(
    (project) => project.id === Number(id)
  );

  // Get previous and next projects
  const prevProject =
    currentIndex > 0 ? productdetails[currentIndex - 1] : null;
  const nextProject =
    currentIndex < productdetails.length - 1
      ? productdetails[currentIndex + 1]
      : null;

  return (
    <>
      {/* Background Move */}
      <div className="banner-animation-zoom overflow-hidden">
        <div className="container">
          <div className="image-move-bg">
            <div
              className="animation-zoom-banner"
              id="js-hero"
              style={{ width: `${100 + scroll / 18}%` }}
            >
              <img
                src={`/assets/img/projects/${thumbFull}`}
                alt={projectData.title}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="project-details-items default-padding">
        <div className="container">
          <div className="top-info">
            <div className="row">
              <div className="col-xl-4 col-lg-5 left-info mb-xs-40 mb-md-50">
                <div className="project-single-info">
                  <ul>
                    <li>
                      Client <span>{client}</span>
                    </li>
                    <li>
                      Date <span>{date}</span>
                    </li>
                    <li>
                      Service <span>{service}</span>
                    </li>
                    <li>
                      Address <span>{address}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right-info col-xl-8 col-lg-7 pl-50 pl-md-15 pl-xs-15 mt-md-10">
                <h2>Description</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {images?.length > 0 && (
        <div className="project-details-items default-padding-bottom">
          <div className="container">
            <div className="project-thumb mt-md--25 mt-xs--25">
              <div className="row">
                {images.map((img, index) => (
                  <div key={index} className="col-md-6">
                    <img
                      src={`/assets/img/projects/${img}`}
                      alt="Project Screenshot"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="project-details-items default-padding bg-gray">
        <div className="container">
          <div className="item-grid-container">
            <div className="single-grid">
              <div className="item-grid-colum">
                <div className="left-info">
                  <h2>Background</h2>
                </div>
                <div className="right-info">
                  <p>{background}</p>
                </div>
              </div>
            </div>
            <div className="single-grid">
              <div className="item-grid-colum">
                <div className="left-info">
                  <h2>The Challenges</h2>
                </div>
                <div className="right-info">
                  <ul className="list-style-one">
                    {challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="single-grid">
              <div className="item-grid-colum">
                <div className="left-info">
                  <h2>The Solution</h2>
                </div>
                <div className="right-info">
                  <ul className="list-style-one">
                    {solution.map((sol, index) => (
                      <li key={index}>{sol}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="project-pagination default-padding-bottom bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-paginvation-items mt-xs--25 mt-md--25">
                {/* Previous Project Button */}
                {prevProject ? (
                  <div className="project-previous">
                    <Link to={`/project-details/${prevProject.id}`}>
                      <div className="icon">
                        <i className="fas fa-angle-double-left" />
                      </div>
                      <div className="nav-title">
                        Previous Project <h5>{prevProject.title}</h5>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="project-previous disabled">
                    <span>
                      <div className="icon">
                        <i className="fas fa-angle-double-left" />
                      </div>
                      <div className="nav-title">No Previous Project</div>
                    </span>
                  </div>
                )}

                {/* All Projects Button */}
                <div className="project-all">
                  <Link to="/portfolio">
                    <i className="fas fa-th-large" />
                  </Link>
                </div>

                {/* Next Project Button */}
                {nextProject ? (
                  <div className="project-next">
                    <Link to={`/project-details/${nextProject.id}`}>
                      <div className="nav-title">
                        Next Project <h5>{nextProject.title}</h5>
                      </div>
                      <div className="icon">
                        <i className="fas fa-angle-double-right" />
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="project-next disabled">
                    <span>
                      <div className="nav-title">No Next Project</div>
                      <div className="icon">
                        <i className="fas fa-angle-double-right" />
                      </div>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
