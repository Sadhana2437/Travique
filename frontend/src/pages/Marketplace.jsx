function Marketplace() {
  return (
    <main className="page-container">
      <div className="section-heading">
        <span>LOCAL EXPERIENCES</span>
        <h1>Discover local experiences.</h1>
        <p>Connect with the people and services that make a journey memorable.</p>
      </div>

      <div className="feature-grid">
        {["Local Guides", "Homestays", "Transport", "Local Food"].map((item) => (
          <div className="feature-card" key={item}>
            <h3>{item}</h3>
            <p>Explore local offerings and experiences.</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Marketplace;