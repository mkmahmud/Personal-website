import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Expertise from './Expertise/Expertise';
import Hero from './Hero/Hero';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <Expertise></Expertise>
          <About></About>
          <Portfolio></Portfolio>
          <Skills></Skills>
          <Experience></Experience>
          <Testimonial></Testimonial>
          <Contact></Contact>
        </div>
    );
};

export default Home;  