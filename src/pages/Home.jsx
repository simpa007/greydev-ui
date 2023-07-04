import React from "react";
import Hero from "../component/Hero";
import Courses from "../component/Courses";
import Faq from "../component/Faq";
import Testimonials from "../component/Testimonials";
import About from "../component/About";
import Footer from "../component/Footer";
import Blog from "../component/Blog";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      {/* <Faq /> */}
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
}
