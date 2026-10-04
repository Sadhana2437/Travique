import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDestinationById } from "../services/api";

function DestinationDetails() {
  const { id } = useParams();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDestination() {
      try {
        setLoading(true);
        setError("");

        const data = await getDestinationById(id);
        setDestination(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load destination details.");
      } finally {
        setLoading(false);
      }
    }

    loadDestination();
  }, [id]);

  if (loading) {
    return <p className="status-message">Loading destination...</p>;
  }

  if (error || !destination) {
    return (
      <main className="details-page">
        <h2>{error || "Destination not found."}</h2>
        <Link to="/explore">Back to Explore</Link>
      </main>
    );
  }

  return (
    <main className="details-page">
      <Link to="/explore" className="back-link">
        ← Back to Explore
      </Link>

      <section className="details-hero">
        <div className="details-content">
          <p className="eyebrow">
            {destination.category || "DESTINATION"}
          </p>

          <h1>{destination.name || destination.title}</h1>

          <p className="details-location">
            {destination.state || destination.location || ""}
          </p>

          <p className="details-description">
            {destination.description ||
              "Discover this beautiful destination with Travique."}
          </p>

          <div className="details-info">
            {destination.budget && (
              <div>
                <span>Estimated Budget</span>
                <strong>{destination.budget}</strong>
              </div>
            )}

            {destination.best_time && (
              <div>
                <span>Best Time to Visit</span>
                <strong>{destination.best_time}</strong>
              </div>
            )}
          </div>

          <Link to="/planner" className="planner-link">
            Plan a Trip Here
          </Link>
        </div>
      </section>
    </main>
  );
}

export default DestinationDetails;