import React from "react";
import web from "../src/images/web.png";
// import { NavLink } from "react-router-dom";
import Carousel from "./Carousel";
import DemoCarousel from "./CarouselResponsive";
import BookingSection from "./BookingSection";
import HomeAbout from "./HomeAbout";
import Facts from "./Facts";
import Working from "./WorkingSection";

const Home = () => {
  return (
    <>
      <DemoCarousel
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      ></DemoCarousel>
      <BookingSection></BookingSection>
      <HomeAbout></HomeAbout>
      <Facts></Facts>
      <Working></Working>
    </>
  );
};

export default Home;
