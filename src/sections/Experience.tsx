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
        <div className="flex flex-col">
          <h1 className="font-spaceMonoBold text-xl text-white mb-1">
            Nari Solutions
          </h1>
          <span className="flex  items-center gap-5">
            <h2 className="font-spaceMonoIta">Junior Frontend Developer</h2>
            <p className="font-vtReg bg-slate-700 px-2 rounded-md text-sm tracking-wide text-white">
              Nov 2023 - Present
            </p>
          </span>
        </div>
      </section>
    </Card>
  );
};

export default Experience;
