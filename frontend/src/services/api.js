const API_BASE_URL = "http://127.0.0.1:8000";

export async function getDestinations() {
  const response = await fetch(`${API_BASE_URL}/destinations`);

  if (!response.ok) {
    throw new Error("Failed to fetch destinations");
  }

  return response.json();
}