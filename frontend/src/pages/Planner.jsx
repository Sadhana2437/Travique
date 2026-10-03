import { Sparkles } from "lucide-react";

function Planner() {
  return (
    <main className="page-container">
      <div className="section-heading">
        <span><Sparkles size={16} /> AI TRIP PLANNER</span>
        <h1>Your journey, your way.</h1>
        <p>Tell us about your dream trip and build a personalized itinerary.</p>
      </div>

      <div className="form-card">
        <h2>Plan your trip</h2>

        <label>Destination</label>
        <input placeholder="Where do you want to go?" />

        <label>Budget (₹)</label>
        <input type="number" placeholder="Enter your budget" />

        <label>Duration</label>
        <select defaultValue="">
          <option value="" disabled>Select duration</option>
          <option>1–2 Days</option>
          <option>3–5 Days</option>
          <option>6–10 Days</option>
        </select>

        <label>Travel interests</label>
        <select defaultValue="">
          <option value="" disabled>Select your interest</option>
          <option>Adventure</option>
          <option>Nature</option>
          <option>Culture</option>
          <option>Food</option>
          <option>Spirituality</option>
        </select>

        <button className="primary-button" type="button">
          Generate My Trip
        </button>
      </div>
    </main>
  );
}

export default Planner;