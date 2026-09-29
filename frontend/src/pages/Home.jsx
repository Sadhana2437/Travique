import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900",
    description: "Tropical escapes and cultural experiences",
  },
  {
    name: "Manali",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900",
    description: "Mountains, adventures and peaceful stays",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900",
    description: "Tradition, architecture and timeless beauty",
  },
];

export default function Home() {
  return (
    <main>

      {/* Hero Section */}

      <section className="relative min-h-[620px] flex items-center">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(10,35,27,0.80), rgba(10,35,27,0.15)), url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=2000')",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 w-full py-24">

          <span className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md">
            <Sparkles size={16} />
            Your journey, reimagined with AI
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-3xl mt-7">
            Travel beyond
            <br />
            the ordinary.
          </h1>

          <p className="text-white/85 text-lg mt-6 max-w-xl leading-relaxed">
            Discover extraordinary destinations, create personalized
            itineraries and experience places like a local.
          </p>

          <Link
            to="/planner"
            className="inline-flex items-center gap-3 bg-white text-emerald-950 px-7 py-4 rounded-full font-semibold mt-9 hover:bg-emerald-50 transition"
          >
            Start your journey
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* Search Section */}

      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">

        <div className="bg-white rounded-2xl shadow-xl p-5 md:p-7 grid md:grid-cols-4 gap-5">

          <div>
            <label className="text-xs text-gray-500">
              Destination
            </label>

            <div className="flex items-center gap-2 mt-2">
              <MapPin size={18} className="text-emerald-700" />

              <input
                placeholder="Where to?"
                className="outline-none w-full text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500">
              Duration
            </label>

            <select className="w-full mt-2 outline-none text-sm bg-white">
              <option>3–5 days</option>
              <option>1 week</option>
              <option>2 weeks</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-500">
              Travel style
            </label>

            <select className="w-full mt-2 outline-none text-sm bg-white">
              <option>Adventure</option>
              <option>Family</option>
              <option>Solo</option>
              <option>Luxury</option>
              <option>Culture</option>
            </select>
          </div>

          <Link
            to="/planner"
            className="bg-emerald-800 text-white rounded-xl flex items-center justify-center gap-2 py-4 font-semibold"
          >
            <Sparkles size={18} />
            Plan with AI
          </Link>

        </div>
      </section>

      {/* Destinations */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="flex justify-between items-end mb-10">

          <div>
            <p className="text-emerald-700 font-semibold text-sm">
              FIND YOUR NEXT ESCAPE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-emerald-950">
              Places worth discovering
            </h2>
          </div>

          <Link
            to="/explore"
            className="hidden sm:flex items-center gap-2 text-emerald-800 font-semibold"
          >
            Explore all
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-7">

          {destinations.map((place) => (
            <article
              key={place.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition"
            >

              <div className="h-72 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">

                <p className="text-sm text-emerald-700">
                  {place.country}
                </p>

                <h3 className="text-xl font-bold mt-1">
                  {place.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {place.description}
                </p>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* AI Banner */}

      <section className="bg-emerald-950 text-white py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <Sparkles className="mx-auto mb-5 text-emerald-300" size={32} />

          <h2 className="text-3xl md:text-5xl font-bold">
            Your next adventure,
            <br />
            designed around you.
          </h2>

          <p className="text-white/70 mt-5 max-w-xl mx-auto">
            Tell Travique what you love, how much you want to spend
            and how long you have. Let AI help shape your journey.
          </p>

          <Link
            to="/planner"
            className="inline-flex items-center gap-2 bg-white text-emerald-950 px-7 py-4 rounded-full mt-8 font-semibold"
          >
            Create my itinerary
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}