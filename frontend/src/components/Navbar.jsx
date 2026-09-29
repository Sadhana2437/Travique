import { Link } from "react-router-dom";
import { Compass, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <div className="bg-emerald-800 text-white p-2 rounded-xl">
            <Compass size={22} />
          </div>

          <span className="text-2xl font-bold tracking-tight text-emerald-950">
            Travique
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-emerald-700">
            Home
          </Link>

          <Link to="/explore" className="hover:text-emerald-700">
            Explore
          </Link>

          <Link to="/planner" className="hover:text-emerald-700">
            AI Planner
          </Link>

          <Link to="/marketplace" className="hover:text-emerald-700">
            Experiences
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden sm:block text-sm font-semibold text-emerald-900"
          >
            Log in
          </Link>

          <Link
            to="/planner"
            className="bg-emerald-800 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-emerald-900 transition"
          >
            Plan a trip
          </Link>

          <button className="md:hidden">
            <Menu />
          </button>
        </div>

      </div>
    </nav>
  );
}