import { useContext } from "react";
import DummyData from "@/utils/data";
import ProjectItem from "@/componenets/project-item";
import Card from "@/componenets/layout/card";
import { SectionContext } from "@/store/section-context";

const projects = DummyData();

const Projects = () => {
  const SectionCtx = useContext(SectionContext);

  return (
    <Card>
      <section ref={SectionCtx.navRefs.projects}>
        <h1 className="font-spaceMonoBoldIta text-white text-3xl mb-5">
          My Work
        </h1>
        <p className="font-spaceMonoReg text-gray-400 mb-5">
          Public and professional projects that reflect my current level of
          experience. In the near future, I will also be contributing to several
          larger-scale projects.
        </p>
        <ul className="flex flex-col gap-5">
          {projects
            .slice()
            .reverse()
            .map((item) => {
              return <ProjectItem key={item.id} itemData={item} />;
            })}
        </ul>
      </section>
    </Card>
  );
};

export default Projects;
