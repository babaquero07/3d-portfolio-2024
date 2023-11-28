import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CTA = () => {
  const [t, _] = useTranslation("global");

  return (
    <section className="cta flex justify-center items-center">
      <Link to="/contact" className="btn">
        {t("pages.about.cta")}
      </Link>
    </section>
  );
};

export default CTA;
