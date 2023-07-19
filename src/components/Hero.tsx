import heroImg from '../assets/heroImg.svg';
import reactLogo from '../assets/reactLogo.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2>
            Portafolio React <img src={reactLogo} alt="reactLogo" />
          </h2>
          <h5>
            Todos mis proyectos realizados con la tecnología React desde el más
            básico hasta el más complejo en los cuales se puede revisar su
            código y una demostración del mismo.
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
