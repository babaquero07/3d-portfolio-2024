import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = (currentStage, translations) => {
  const {
    greeting,
    about,
    learnMore,
    projects,
    seeProjects,
    contact,
    ctaContact,
  } = translations;

  const content = {
    1: (
      <h1
        dangerouslySetInnerHTML={{ __html: greeting }}
        className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"
      ></h1>
    ),
    2: <InfoBox text={about} link="/about" btnText={learnMore} />,
    3: <InfoBox text={projects} link="/projects" btnText={seeProjects} />,
    4: <InfoBox text={contact} link="/contact" btnText={ctaContact} />,
  };
  return content[currentStage];
};

const HomeInfo = ({ currentStage }) => {
  const [t, _] = useTranslation("global");

  const translations = {
    greeting: t("components.homeInfo.greeting"),
    about: t("components.homeInfo.about"),
    learnMore: t("components.homeInfo.learnMore"),
    projects: t("components.homeInfo.projects"),
    seeProjects: t("components.homeInfo.seeProjects"),
    contact: t("components.homeInfo.contact"),
    ctaContact: t("components.homeInfo.cta_contact"),
  };

  return renderContent(currentStage, translations) || null;
};

export default HomeInfo;
