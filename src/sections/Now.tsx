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
          <p className="font-vtReg bg-slate-700 px-2 rounded-md text-sm tracking-widest text-white">Last updated: July 26th</p>
        </span>
        <h2 className="my-5 font-spaceMonoMedIta font-semibold">Currently I'm working on:</h2>
        <ul className="list-disc pl-5 flex flex-col gap-2 leading-7">
          <li className="font-spaceMonoReg">
            I'm honing my expertise in TypeScript to build robust and scalable
            applications
          </li>
          <li className="font-spaceMonoReg">
            Unlock the full potential of web development by delving into Next.js
            and its advanced features.
          </li>
          <li className="font-spaceMonoReg">
            Mastering unit testing for React apps, putting bugs to the test and
            code quality to new heights
          </li>
          <li className="font-spaceMonoReg">
            Building React apps for my portfolio to expertise my skills to an
            expert level in React hooks, React Router, and Redux Toolkit
          </li>
          <li className="font-spaceMonoReg">Taking my first steps into freelancing</li>
        </ul>
      </section>
    </Card>
  );
};

export default Now;
