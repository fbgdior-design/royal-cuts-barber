import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="hero fade-in"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Royal Cuts</h1>

        <p>Modern Barber Shop Experience</p>

        <a href="#contact">
          <button>Book Appointment</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;