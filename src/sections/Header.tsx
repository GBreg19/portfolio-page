import React from "react";
import Navigation from "../componenets/Navigation";
import Intro from "../componenets/Intro";
import Card from "../layout/Card";

const Header: React.FC = () => {
  return (
    <Card className="flex sm:flex-col-reverse flex-col gap-10 border-none">
      <Navigation />
      <Intro/>
    </Card>
  );
};

export default Header;
