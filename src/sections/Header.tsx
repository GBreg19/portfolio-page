import React from "react";
import Navigation from "@/componenets/navigation";
import Intro from "@/componenets/intro";
import Card from "@/componenets/layout/card";

const Header: React.FC = () => {
  return (
    <Card className="flex sm:flex-col-reverse flex-col gap-10 border-none">
      <Navigation />
      <Intro/>
    </Card>
  );
};

export default Header;
