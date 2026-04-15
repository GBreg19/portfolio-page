import { Fragment } from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { PiTerminalLight } from "react-icons/pi";

const Intro = () => {
  return (
    <Fragment>
      <section className="flex flex-col gap-5">
        <h1 className="font-spaceMonoBoldIta font-black text-4xl text-white flex items-center gap-3">
          <PiTerminalLight className="animate-fade" /> Hi, I'm Giorgi
        </h1>
        <p className="font-spaceMonoReg">
          As a front-end developer, I enjoy building intuitive frontend experiences and exploring programming in general, as I grow into new areas such as AI, backend development, and other emerging technologies. This personal space is where I share both the work I build and
          reflections on the subjects that continue to shape me.
        </p>
        <Link
          to="/blog"
          className="group relative mt-1 flex flex-col gap-1.5 rounded-md border border-amber-900/40 bg-gradient-to-br from-amber-950/30 via-transparent to-transparent px-4 py-3 transition-colors hover:border-amber-700/50 hover:from-amber-950/45 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        >
          <span className="font-spaceMonoIta text-[0.65rem] uppercase tracking-[0.35em] text-amber-200/70">
            Field notes
          </span>
          <span className="flex items-center gap-2 font-spaceMonoReg text-sm text-stone-300 group-hover:text-amber-100/95">
            <span className="hidden h-px w-8 bg-amber-600/50 sm:block sm:w-10" aria-hidden />
            Longer reads on many topics — not only programming.
            <span
              className="font-spaceMonoBoldIta text-amber-200/90 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </span>
        </Link>
        <div className="flex gap-5">
          <div className="flex items-center">
            <span>
              <CiLocationOn />
            </span>
            <p className="font-spaceMonoReg ml-2">Tbilisi, Georgia</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
