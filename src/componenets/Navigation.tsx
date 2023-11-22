import { FaFolder, FaUserCircle, FaReadme, FaBriefcase } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { useContext } from "react";
import { SectionContext } from "../store/section-context";

const Navigation = () => {
  const SectionCtx = useContext(SectionContext);

  return (
    <div className="h-1/2 border-t border-gray-600 pt-3">
      <nav>
        <ul className="font-spaceMonoReg sm:flex sm:flex-row flex flex-col gap-3 pt-1 rounded-md md:bg-inherit justify-between">
          <li
            className="hover:text-white cursor-pointer pb-2 sm:pr-0 pr-5 flex gap-2 items-center uppercase relative group"
            onClick={() => SectionCtx.handleClick(SectionCtx.navRefs.projects)}
          >
            <span>
              <FaFolder className="group-hover:text-orange-200" />
            </span>
            <a>Projects</a>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-200 origin-bottom transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
          </li>
          <li
            className="hover:text-white cursor-pointer pb-2 sm:pr-0 pr-5 flex gap-2 items-center uppercase relative group"
            onClick={() => SectionCtx.handleClick(SectionCtx.navRefs.aboutMe)}
          >
            <span>
              <FaUserCircle className="group-hover:text-cyan-500" />
            </span>
            <a>About me</a>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 origin-bottom transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
          </li>
          <li
            className="hover:text-white cursor-pointer pb-2 sm:pr-0 pr-5 flex gap-2 items-center uppercase relative group"
            onClick={() =>
              SectionCtx.handleClick(SectionCtx.navRefs.experience)
            }
          >
            <span>
              <FaBriefcase className="group-hover:text-green-600" />
            </span>
            <a>Experience</a>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 origin-bottom transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
          </li>
          <li
            className="hover:text-white cursor-pointer pb-2 sm:pr-0 pr-5 flex gap-2 items-center uppercase relative group"
            onClick={() => SectionCtx.handleClick(SectionCtx.navRefs.now)}
          >
            <span>
              <AiFillFire className="group-hover:text-orange-500" />
            </span>
            <a>Now</a>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 origin-bottom transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
          </li>
          <li
            className="hover:text-white cursor-pointer pb-2 sm:pr-0 pr-5 flex gap-2 items-center uppercase relative group"
            onClick={() => SectionCtx.handleClick(SectionCtx.navRefs.contact)}
          >
            <span>
              <FaReadme className="group-hover:text-blue-300" />
            </span>
            <a>Contact</a>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-300 origin-bottom transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:scale-x-100"></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
