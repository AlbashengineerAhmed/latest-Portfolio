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
    let iso: Isotope | null = null;

    if (galleryRef.current) {
      // Initialize Isotope with better options for masonry layout
      iso = new Isotope(galleryRef.current, {
        itemSelector: ".gallery-item",
        layoutMode: "masonry",
        masonry: {
          columnWidth: ".gallery-item",
          gutter: 0,
          horizontalOrder: true,
        },
        percentPosition: true,
      });

      // Add imagesLoaded event to recalculate layout after images are loaded
      const imgLoad = () => {
        // Get all images in the gallery
        const images = galleryRef.current?.querySelectorAll('img') || [];
        let loadedImages = 0;

        // If no images, just layout
        if (images.length === 0) {
          iso?.layout();
          return;
        }

        // For each image, check if it's loaded
        images.forEach((img) => {
          if (img.complete) {
            loadedImages++;
            if (loadedImages === images.length) {
              iso?.layout();
            }
          } else {
            img.addEventListener('load', () => {
              loadedImages++;
              if (loadedImages === images.length) {
                iso?.layout();
              }
            });

            // Also handle error case
            img.addEventListener('error', () => {
              loadedImages++;
              if (loadedImages === images.length) {
                iso?.layout();
              }
            });
          }
        });
      };

      // Initial layout
      imgLoad();

      // Also do a fallback layout after a timeout
      setTimeout(() => {
        iso?.layout();
      }, 1000);
    }

    return () => {
      if (iso) {
        iso.destroy();
      }
    };
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
        className="gallery-items colums-3 clearfix"
        ref={galleryRef}
      >
        {PortfolioData.slice(0, totalVisible).map((portfolio) => (
          <div className="gallery-item" key={portfolio.id}>
            <div className="gallery-style-one">
              <div className="image-container">
                <img
                  src={`/assets/img/projects/${portfolio.thumb}`}
                  alt={portfolio.title}
                />
              </div>
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
          <div className="text-center mt-5">
            <button onClick={handleLoadMore}>Load More</button>
          </div>
        )}
    </>
  );
};

export default IsotopeGallery;
