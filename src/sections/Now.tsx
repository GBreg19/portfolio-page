import { useContext } from "react";
import Card from "../layout/Card";
import { SectionContext } from "../store/section-context";

const Now = () => {
  const SectionCtx = useContext(SectionContext);
  return (
    <Card>
      <section ref={SectionCtx.navRefs.now}>
        <span className="flex items-center gap-5">
          <h1 className="font-spaceMonoBoldIta text-white text-3xl">Now</h1>
          <p className="font-vtReg bg-slate-700 px-2 rounded-md text-sm tracking-widest text-white">
            Last updated: November 20th
          </p>
        </span>
        <h2 className="my-5 font-spaceMonoMedIta font-semibold">
          Currently I'm:
        </h2>
        <ul className="list-disc pl-5 flex flex-col gap-2 leading-7">
          <li className="font-spaceMonoReg">
            Diving into TypeScript to enrich JavaScript with static typing,
            providing early error detection, enhanced code organization, and
            superior tooling support.
          </li>
          <li className="font-spaceMonoReg">
            Focusing on the Express.js module that facilitates database
            connections, learning the essentials to integrate databases with my
            projects.
          </li>
          <li className="font-spaceMonoReg">
            Exploring myself with Firebase to incorporate a suite of tools and
            services into my projects, such as real-time databases,
            authentication, hosting, cloud functions, storage, and more.
          </li>
          <li className="font-spaceMonoReg">
            Integrating React-Query into my projects
          </li>
          <li className="font-spaceMonoReg">
            In the process of learning popular CSS frameworks to simplify
            styling in my projects and enhance overall design efficiency
          </li>
          <li className="font-spaceMonoReg">
            Exploring various state management tools to identify the most
            effective solution for handling state in my projects.
          </li>
        </ul>
      </section>
    </Card>
  );
};

export default Now;
