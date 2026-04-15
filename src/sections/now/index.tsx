import { useContext } from "react";
import Card from "@/componenets/layout/card";
import { SectionContext } from "@/store/section-context";

const Now = () => {
  const SectionCtx = useContext(SectionContext);
  return (
    <Card>
      <section
        ref={SectionCtx.navRefs.now}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <h1 className="font-spaceMonoBoldIta text-3xl text-white">Now</h1>
          <p className="font-vtReg w-fit bg-slate-700 px-2 py-1 rounded-md text-sm tracking-widest text-white">
            Last updated: April 2026
          </p>
        </div>

        <p className="font-spaceMonoReg text-lg leading-7 text-gray-300">
          Day to day I ship frontend apps with{" "}
          <span className="text-white">React</span> and the usual ecosystem —
          TypeScript, data fetching libraries, component kits, and whatever the
          product needs. One active project also sits in a{" "}
          <span className="text-white">Tauri</span> desktop shell, so I am
          comfortable straddling web UI and native-adjacent workflows.
        </p>

        <div>
          <h2 className="font-spaceMonoBold text-white text-lg mb-3">
            Stretching beyond the browser
          </h2>
          <ul className="list-disc pl-5 flex flex-col gap-3 font-spaceMonoReg leading-7 text-gray-300">
            <li>
              Picking up <span className="text-white">Node.js</span> and{" "}
              <span className="text-white">Express</span> — routing, middleware,
              and how a small API actually talks to a React client.
            </li>
            <li>
              Getting into <span className="text-white">AI-assisted automation</span>{" "}
              — using models and tooling to speed up repetitive work, prototype
              faster, and wire smarter workflows (without pretending the machine
              does the thinking for me).
            </li>
          </ul>
        </div>
      </section>
    </Card>
  );
};

export default Now;
