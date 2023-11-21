import { FaFolder, FaUserCircle, FaReadme } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { useContext } from "react";
import { SectionContext } from "../store/section-context";

const Navigation = () => {
  const SectionCtx = useContext(SectionContext);

  return (
    <div className="basis-4/12 h-1/2">
      <nav>
        <ul className="font-spaceMonoReg flex md:flex-col bg-slate-950 px-5 pt-1 rounded-md md:bg-inherit gap-3 flex-wrap justify-between">
          <li
            className="hover:text-white cursor-pointer border-r-gray-400 hover:border-r-2 pb-2 sm:pr-0 pr-5 flex gap-2 items-center group duration-75 transition ease-in-out"
            onClick={() => SectionCtx.handleClick(SectionCtx.navRefs.projects)}
          >
            <span>
              <FaFolder className="group-hover:text-orange-200" />
            </span>
            <a>Projects</a>
          </li>
          <li
            className="hover:text-white cursor-pointer border-r-gray-400 hover:border-r-2 pb-2 sm:pr-0 pr-5 flex gap-2 items-center group duration-75 transition ease-in-out"
            onClick={() => SectionCtx.handleClick(SectionCtx.navRefs.aboutMe)}
          >
            <span>
              <FaUserCircle className="group-hover:text-cyan-500" />
            </span>
            <a>About me</a>
          </li>
          <li
            className="hover:text-white cursor-pointer border-r-gray-400 hover:border-r-2 pb-2 sm:pr-0 pr-5 flex gap-2 items-center group duration-75 transition ease-in-out"
            onClick={() =>
              SectionCtx.handleClick(SectionCtx.navRefs.experience)
            }
          >
            <span>
              <FaUserCircle className="group-hover:text-green-600" />
            </span>
            <a>Experience</a>
          </li>
          <li
            className="hover:text-white cursor-pointer border-r-gray-400 hover:border-r-2 pb-2 sm:pr-0 pr-5 flex gap-2 items-center group duration-75 transition ease-in-out"
            onClick={() => SectionCtx.handleClick(SectionCtx.navRefs.now)}
          >
            <span>
              <AiFillFire className="group-hover:text-orange-500" />
            </span>
            <a>Now</a>
          </li>
          <li
            className="hover:text-white cursor-pointer border-r-gray-400 hover:border-r-2 pb-2 sm:pr-0 pr-5 flex gap-2 items-center group duration-75 transition ease-in-out"
            onClick={() => SectionCtx.handleClick(SectionCtx.navRefs.contact)}
          >
            <span>
              <FaReadme className="group-hover:text-blue-300" />
            </span>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
