const API_BASE_URL = "http://127.0.0.1:8000";

export async function getDestinations() {
  const response = await fetch(`${API_BASE_URL}/destinations`);

  if (!response.ok) {
    throw new Error("Failed to fetch destinations");
  }

  return response.json();
}

export async function getDestinationById(id) {
  const response = await fetch(
    `${API_BASE_URL}/destinations/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch destination");
  }

  return response.json();
}

export async function generateTrip(tripData) {
  const response = await fetch(`${API_BASE_URL}/plan-trip`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tripData),
  });

  if (!response.ok) {
    throw new Error("Failed to generate trip");
  }

  return response.json();
}