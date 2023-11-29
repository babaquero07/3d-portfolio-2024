import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useTranslation } from "react-i18next";

import { skills, experiences } from "../constants";

import CTA from "../components/CTA";
import Footer from "../components/Footer";

const About = () => {
  const [t, _] = useTranslation("global");

  const workExperiences = experiences.map((experience, index) => {
    return {
      ...experience,
      date: t(`pages.about.workExperience.${experience.id}.date`),
      points: t(`pages.about.workExperience.${experience.id}.responsabilites`, {
        returnObjects: true,
      }),
    };
  });

  return (
    <>
      <section className="max-container">
        <h1
          className="head-text"
          dangerouslySetInnerHTML={{ __html: t("pages.about.title") }}
        ></h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>{t("pages.about.profileDescription")}</p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">{t("pages.about.skillsTitle")}</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div
                className="block-container w-20 h-20"
                key={`skill-${skill.name}`}
              >
                <div className="btn-back roundend-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center flex-col">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                  <p className="text-center mt-2">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">
            {t("pages.about.workExperienceTitle")}
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>{t("pages.about.workExperienceSubText")}</p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {workExperiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        className="text-black-500/50 font-normal pl-1 text-sm"
                        key={`experience-point-${index + 1}`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <hr className="border-slate-200" />
        <CTA />
      </section>
      <hr className="border-slate-200 mb-6" />
      <Footer />
    </>
  );
};

export default About;
