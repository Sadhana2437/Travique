import { useState } from "react";
import { generateTrip } from "../services/api";

function Planner() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState(10000);
  const [travelStyle, setTravelStyle] = useState("Balanced");

  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setTrip(null);

      const result = await generateTrip({
        destination,
        days: Number(days),
        budget: Number(budget),
        travel_style: travelStyle,
      });

      setTrip(result);
    } catch (err) {
      console.error(err);
      setError("Unable to generate your trip. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="planner-page">
      <section className="planner-header">
        <p className="eyebrow">YOUR JOURNEY, YOUR WAY</p>
        <h1>Plan Your Perfect Trip</h1>
        <p>
          Tell us what you love, and Travique will create a
          personalized starting itinerary.
        </p>
      </section>

      <form className="planner-form" onSubmit={handleSubmit}>
        <label>Destination</label>

        <input
          type="text"
          placeholder="e.g. Puri, Goa, Darjeeling"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <label>Number of Days</label>

        <input
          type="number"
          min="1"
          max="14"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
        />

        <label>Total Budget (₹)</label>

        <input
          type="number"
          min="1"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />

        <label>Travel Style</label>

        <select
          value={travelStyle}
          onChange={(e) => setTravelStyle(e.target.value)}
        >
          <option value="Balanced">Balanced</option>
          <option value="Adventure">Adventure</option>
          <option value="Relaxation">Relaxation</option>
          <option value="Culture">Culture</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Creating Your Itinerary..." : "Generate My Trip"}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {trip && (
        <section className="itinerary-section">
          <h2>Your {trip.days}-Day Trip to {trip.destination}</h2>

          <p>
            Total Budget: ₹{trip.total_budget.toLocaleString("en-IN")}
          </p>

          {trip.itinerary.map((day) => (
            <article className="itinerary-card" key={day.day}>
              <h3>{day.title}</h3>

              <ul>
                {day.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>

              <p>
                Estimated daily budget: ₹
                {day.estimated_budget.toLocaleString("en-IN")}
              </p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default Planner;