import SocialMedia from "./SocialMedia";

const Footer: React.FC = () => {
  return (
    <footer className="py-5 text-center">
      <p className="text-md mt-2 opacity-50">
        simme.jakobsson@gmail.com
        <SocialMedia />
      </p>
    </footer>
  );
};

export default Footer;
