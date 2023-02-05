import React from 'react';
import Expertise from './Expertise/Expertise';
import Hero from './Hero/Hero';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <Expertise></Expertise>
          <Portfolio></Portfolio>
          <Skills></Skills>
        </div>
    );
};

export default Home; 