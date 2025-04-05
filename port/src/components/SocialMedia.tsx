import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialMedia: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4">
      <a
        href="https://www.linkedin.com/in/simon-jakobsson-871252144/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="text-blue-600 hover:text-blue-800"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://github.com/Znarvl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="text-gray-800 hover:text-black"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
};

export default SocialMedia;