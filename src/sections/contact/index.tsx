import { useContext } from "react";
import Card from "@/componenets/layout/card";
import { SectionContext } from "@/store/section-context";

const Contact = () => {
  const SectionCtx = useContext(SectionContext);
  return (
    <Card className="border-none mb-10">
      <section ref={SectionCtx.navRefs.contact}>
        <h1 className="font-spaceMonoBoldIta text-3xl text-white mb-3">
          Get in touch
        </h1>
        <p className="font-spaceMonoReg">
          You can connect with me through different online platforms such
          as&nbsp;
          <a
            href="https://www.linkedin.com/in/gbreg19/"
            target="_blank"
            className="text-blue-500"
          >
            LinkedIn
          </a>
          ,&nbsp;
          <a
            href="https://github.com/GBreg19"
            target="_blank"
            className="text-gray-300"
          >
            GitHub
          </a>
          , or send me an email at&nbsp;
          <a href="mailto:gbreg19@duck.com" className="text-blue-500">
            gbreg19@duck.com
          </a>
        </p>
      </section>
    </Card>
  );
};

export default Contact;
