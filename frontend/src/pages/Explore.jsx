import { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import { getDestinations } from "../services/api";

function Explore() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDestinations() {
      try {
        const data = await getDestinations();

        setDestinations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadDestinations();
  }, []);

  if (loading) {
    return (
      <main className="page-container">
        <h2>Loading destinations...</h2>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page-container">
        <h2>Unable to load destinations</h2>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="page-container">
      <div className="section-heading">
        <span>DESTINATION DISCOVERY</span>
        <h1>Explore destinations</h1>
        <p>Find places that match your travel personality.</p>
      </div>

      <div className="destination-grid">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>
    </main>
  );
}

export default Explore;