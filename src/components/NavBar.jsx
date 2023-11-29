import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ChangeLanguageOption = ({ i8n }) => {
  return (
    <select
      className="bg-transparent rounded-md leading-tight focus:outline-none focus:border-blue-500 text-[18px] font-medium cursor-pointer"
      name="language"
      id="language"
      onChange={({ target }) => i8n.changeLanguage(target.value)}
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
};

const NavBar = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">AB</p>
      </NavLink>

      <nav className="flex text-lg md:gap-6 gap-2 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          {t("components.navbar.links.about")}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          {t("components.navbar.links.projects")}
        </NavLink>

        <ChangeLanguageOption i8n={i18n} />
      </nav>
    </header>
  );
};

export default NavBar;
