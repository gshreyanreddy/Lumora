import Hero from './Hero';
import Features from './Features';
import About from './About';
import Why from './Why';
import How from './How';
import End from './End';
import Integration from './Integration';

const Landing = () => {
  return (
    <div>
          <Hero />
          <About />
          <Features />
          <Why />
          <How/>
          <Integration />
          <End />
    </div>
  );
};

export default Landing;