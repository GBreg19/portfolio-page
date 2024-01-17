import { useContext } from "react";
import Card from "../layout/Card";
import { SectionContext } from "../store/section-context";


const Contact = () => {
  const SectionCtx = useContext(SectionContext);
  return (
    <Card className="border-none mb-10">
      <section ref={SectionCtx.navRefs.contact}>
        <h1 className="font-spaceMonoBoldIta text-3xl text-white mb-3">Get in touch</h1>
        <p className="font-spaceMonoReg">You can connect with me through different online platforms such as <a href="https://www.linkedin.com/in/gbreg19/" target="_blank" className="text-blue-500">LikedIn</a>, <a href="https://github.com/GBreg19" target="_blank" className="text-gray-300">GitHub</a>, or send me an email on giorgi.bregvadze.1998@gmail.com</p>
      </section>
    </Card>
  );
};

export default Contact;
