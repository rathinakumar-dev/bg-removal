import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import BgRemoval from "../components/BgRemoval";
import Testimonials from "../components/Testimonials";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgRemoval />
      <Testimonials />
      <Upload />
    </div>
  );
};

export default Home;
