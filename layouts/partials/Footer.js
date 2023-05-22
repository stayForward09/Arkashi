import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import social from "@config/social.json";
import Social from "@layouts/components/Social";
const Footer = () => {
  const { copyright } = config.params;
  return (
    <footer className="pt-16 pb-16">
      <div className="container text-center">
        <Social source={social} className="profile-social-icons mt-8" />
      </div>
    </footer>
  );
};

export default Footer;
