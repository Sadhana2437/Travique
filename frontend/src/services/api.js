const API_URL = "http://127.0.0.1:8000";

export async function getDestinations() {
  const response = await fetch(`${API_URL}/destinations`);

  if (!response.ok) {
    throw new Error("Unable to fetch destinations");
  }

  return response.json();
}