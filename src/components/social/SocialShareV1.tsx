import { Link } from "react-router-dom";

const SocialShareV1 = () => {
  return (
    <>
      <li>
        <Link to="https://www.linkedin.com/in/ahmedmohamedabdelhamidali" target="_blank">
          <i className="fab fa-linkedin-in" />
        </Link>
      </li>
      <li>
        <a
          href="mailto:albashengineerahmed@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope" />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/01009480722"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/AlbashengineerAhmed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
      </li>
    </>
  );
};

export default SocialShareV1;
