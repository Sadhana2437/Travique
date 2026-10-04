import { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import { getDestinations } from "../services/api";

function Explore() {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDestinations() {
      try {
        setLoading(true);
        setError("");

        const data = await getDestinations();
        setDestinations(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load destinations.");
      } finally {
        setLoading(false);
      }
    }

    loadDestinations();
  }, []);

  const filteredDestinations = destinations.filter((destination) => {
    const name = destination.name || destination.title || "";
    const state = destination.state || "";

    const matchesSearch =
      name.toLowerCase().includes(search.toLowerCase()) ||
      state.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      (destination.category || "").toLowerCase() ===
        category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="explore-page">
      <section className="explore-header">
        <p className="eyebrow">DISCOVER YOUR NEXT JOURNEY</p>

        <h1>Explore Destinations</h1>

        <p>
          Discover beautiful places, hidden gems, and unforgettable
          experiences with Travique.
        </p>
      </section>

      <section className="explore-controls">
        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Beach">Beach</option>
          <option value="Hill Station">Hill Station</option>
          <option value="Adventure">Adventure</option>
          <option value="Cultural">Cultural</option>
        </select>
      </section>

      {loading && <p className="status-message">Loading destinations...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <section className="destination-grid">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))
          ) : (
            <p className="status-message">
              No destinations found. Try another search.
            </p>
          )}
        </section>
      )}
    </main>
  );
}

export default Explore;