import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

function DestinationCard({ destination }) {
  return (
    <Link
      to={`/destinations/${destination.id}`}
      className="destination-card-link"
    >
      <article className="destination-card">
        <img
          src={destination.image}
          alt={destination.name}
        />

        <div className="destination-info">
          <span className="destination-category">
            {destination.category}
          </span>

          <h3>{destination.name || destination.title}</h3>

          <p>
            <MapPin size={15} />
            {destination.location || destination.state}
          </p>

          <p>{destination.description}</p>

          <div className="destination-meta">
            <span>₹{destination.budget} / person</span>
            <span>{destination.duration}</span>
          </div>

          <span>Explore Destination →</span>
        </div>
      </article>
    </Link>
  );
}

export default DestinationCard;