import heroImg from '../assets/heroImg.svg';
import reactLogo from '../assets/reactLogo.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2>
            React - Proyectos <img src={reactLogo} alt="reactLogo" />
          </h2>
          <h5>
            Portafolio de proyectos realizados con la tecnología React desde
            básicos hasta más complejo en los cuales se puede revisar su código
            y un live demo del mismo.
          </h5>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="heroImg" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
