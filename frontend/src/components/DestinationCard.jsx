import { MapPin } from "lucide-react";

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img
        src={destination.image}
        alt={destination.name}
      />

      <div className="destination-info">
        <span className="destination-category">
          {destination.category}
        </span>

        <h3>{destination.name}</h3>

        <p>
          <MapPin size={15} />
          {destination.location}
        </p>

        <p>{destination.description}</p>

        <div className="destination-meta">
          <span>₹{destination.budget} / person</span>
          <span>{destination.duration}</span>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;