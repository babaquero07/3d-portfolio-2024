import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { socialLinks } from "../constants";

const Footer = () => {
  const [t, _] = useTranslation("global");

  return (
    <footer className="footer font-poppins">
      <div className="footer-container">
        <p
          dangerouslySetInnerHTML={{ __html: t("components.footer.text") }}
        ></p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
