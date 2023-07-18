import heroImg from '../assets/heroImg.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>React Proyectos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            corrupti aperiam, laborum totam perferendis odio nostrum veritatis
            sint commodi quas placeat dolor quae aut quam deserunt, eos vero
            aspernatur? Maxime.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="heroImg" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
