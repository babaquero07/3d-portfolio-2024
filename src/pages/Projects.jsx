import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  const [t, _] = useTranslation("global");

  const myProjects = projects.map((project) => {
    return {
      ...project,
      description: t(`pages.projects.projectsDescriptions.${project.id}`),
    };
  });

  return (
    <section className="max-container">
      <h1 className="head-text">{t("pages.projects.title")}</h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>{t("pages.projects.description")}</p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {myProjects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.id}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  className="w-1/2 h-1/2 object-contain"
                  src={project.iconUrl}
                  alt={project.icon}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-12 font-poppins">
                <Link
                  className="font-semibold text-blue-600"
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("pages.projects.cta")}
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
