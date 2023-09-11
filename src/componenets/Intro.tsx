import { Fragment } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiCircle } from "react-icons/bi";

const Intro = () => {
  return (
    <Fragment>
      <section className="flex flex-col gap-5 basis-11/12">
        <h1 className="font-spaceMonoBoldIta font-black text-4xl text-white">
          Giorgi Bregvadze
        </h1>
        <p className="font-spaceMonoReg">Front-end developer</p>
        <p className="font-spaceMonoReg leading-7">
          Hey there! I specialize in crafting the front-end components of
          websites, ensuring you enjoy a seamlessly built, beautifully designed,
          user-friendly, and visually appealing web experience. My passion lies
          in creating web interfaces that are not only aesthetically appealing
          but also intuitive and effortless to navigate, guaranteeing an
          enjoyable and memorable journey for every visitor.
        </p>
        <div className="flex gap-5">
          <div className="flex items-center">
            <span>
              <CiLocationOn />
            </span>
            <p className="font-spaceMonoReg ml-2">Tbilisi, Georgia</p>
          </div>
          <div className="flex items-center">
            <span>
              <BiCircle className="text-green-400 bg-green-400 rounded-full" />
            </span>
            <p className="font-spaceMonoReg ml-2">Available for work</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
