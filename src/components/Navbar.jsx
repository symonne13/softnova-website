import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
  <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-xl">
    S
  </div>

  <div>
    <h1 className="text-xl font-bold">SoftNova</h1>
    <p className="text-xs text-gray-400">
      Technologies
    </p>
  </div>
</div>
          {/* Navigation */}
          <div className="flex gap-8">

            <Link
              to="/"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/services"
              className="hover:text-cyan-400 transition duration-300"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
            >
              Login
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;