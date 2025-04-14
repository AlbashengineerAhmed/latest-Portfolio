import { useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Isotope from "isotope-layout";
import PortfolioData from "../../assets/jsonData/portfolio/PortfolioData.json";

interface IsotopeGalleryProps {
  visibleImagesCount: number;
  onLoadMore: () => void;
  enableLoadMore: boolean;
}

const IsotopeGallery = ({
  visibleImagesCount,
  onLoadMore,
  enableLoadMore,
}: IsotopeGalleryProps) => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isProjectsPage = location.pathname === "/projects";
  const totalVisible = isProjectsPage
    ? PortfolioData.length
    : visibleImagesCount;

  useEffect(() => {
    if (galleryRef.current) {
      const iso = new Isotope(galleryRef.current, {
        itemSelector: ".gallery-item",
        layoutMode: "masonry",
      });

      setTimeout(() => {
        iso.layout();
      }, 500);

      return () => {
        iso.destroy();
      };
    }
  }, [totalVisible]);

  const handleLoadMore = () => {
    const nextCount = visibleImagesCount + 3;

    if (nextCount >= 9 && !isProjectsPage) {
      navigate("/projects", { state: { initialCount: nextCount } });
    } else {
      onLoadMore();
    }
  };

  return (
    <>
      <div
        id="gallery-masonary"
        className="gallery-items colums-3"
        ref={galleryRef}
      >
        {PortfolioData.slice(0, totalVisible).map((portfolio) => (
          <div className="gallery-item" key={portfolio.id}>
            <div className="gallery-style-one">
              <img
                src={`/assets/img/projects/${portfolio.thumb}`}
                alt="Thumb"
              />
              <div className="info">
                <div className="overlay">
                  <div className="content">
                    <ul className="pf-tags">
                      {portfolio.tags.map((data, index) => (
                        <li key={index}>
                          <Link to="#">{data}</Link>
                        </li>
                      ))}
                    </ul>
                    <div className="portfolio-links mt-2">
                      {portfolio.demo && (
                        <a
                          href={portfolio.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-1 mx-2 rounded-5 text-white transition bg-gradient"
                        >
                          Demo
                        </a>
                      )}
                      {portfolio.github && (
                        <a
                          href={portfolio.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-1 mx-2 rounded-5 text-white transition bg-gradient"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="icon">
                    <Link to={`/project-details/${portfolio.id}`}>
                      <i className="fas fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <h4>
                  <Link to={`/project-details/${portfolio.id}`}>
                    {portfolio.title}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hide button on /projects */}
      {!isProjectsPage &&
        enableLoadMore &&
        visibleImagesCount < PortfolioData.length && (
          <div className="text-center mt-4">
            <button onClick={handleLoadMore}>Load More</button>
          </div>
        )}
    </>
  );
};

export default IsotopeGallery;
