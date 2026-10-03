import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            <Sparkles size={16} />
            Your journey, reimagined
          </span>

          <h1>
            Don't just travel.
            <br />
            <span>Experience the extraordinary.</span>
          </h1>

          <p>
            Discover hidden destinations, explore local
            experiences, and plan personalized journeys
            with Travique.
          </p>

          <div className="hero-buttons">
            <Link to="/explore" className="primary-button">
              Explore Destinations
              <ArrowRight size={18} />
            </Link>

            <Link to="/planner" className="secondary-button">
              Plan My Trip
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span>EXPLORE INDIA</span>
          <h2>Find your next escape.</h2>
          <p>
            From peaceful mountains to vibrant coastal towns,
            your next experience begins here.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Discover</h3>
            <p>Explore destinations beyond the usual tourist routes.</p>
          </div>

          <div className="feature-card">
            <h3>Plan</h3>
            <p>Build trips around your interests and budget.</p>
          </div>

          <div className="feature-card">
            <h3>Experience</h3>
            <p>Connect with local services and authentic experiences.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;