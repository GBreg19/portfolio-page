import { useContext } from "react";
import Card from "../layout/Card";
import { SectionContext } from "../store/section-context";

const Experience = () => {
  const SectionCtx = useContext(SectionContext);
  return (
    <Card>
      <section
        className="mb-5 flex flex-col gap-5 justify-between"
        ref={SectionCtx.navRefs.experience}
      >
        <h1 className="font-spaceMonoBoldIta text-3xl text-white">
          Working Experience
        </h1>
        <div className="flex flex-col ">
          <h1 className="font-spaceMonoBold text-xl text-white mb-1">
            Nari Solutions
          </h1>
          <h2 className="font-spaceMonoIta">
            Frontend Developer Intern - Nov 2023 - Present
          </h2>
        </div>
      </section>
    </Card>
  );
};

export default Experience;
