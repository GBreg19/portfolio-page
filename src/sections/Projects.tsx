import { useContext } from "react";
import DummyData from "../data/DummyData";
import ProjectItem from "../componenets/ProjectItem";
import Card from "../layout/Card";
import { SectionContext } from "../store/section-context";

const projects = DummyData();

const Projects = () => {
  const SectionCtx = useContext(SectionContext);

  return (
    <Card>
      <section ref={SectionCtx.navRefs.projects}>
        <h1 className="font-spaceMonoBoldIta text-white text-3xl mb-5">
          Projects
        </h1>
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
