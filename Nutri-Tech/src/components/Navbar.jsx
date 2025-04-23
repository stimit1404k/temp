import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3 md:px-8 flex items-center justify-between">
      {/* Logo + Brand */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
          SN
        </div>
        <h1 className="text-xl font-semibold text-green-700">Smart Nutrition</h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">
        <Link to="/" className="hover:text-green-600 transition">
          Home
        </Link>
        <Link to="/report" className="hover:text-green-600 transition">
          Report
        </Link>
        <Link to="/about" className="hover:text-green-600 transition">
          About
        </Link>
        <Link
          to="/signin"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Sign In
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md px-4 py-4 flex flex-col gap-4 text-gray-700 font-medium md:hidden">
          <Link to="/" className="hover:text-green-600 transition" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/report" className="hover:text-green-600 transition" onClick={toggleMenu}>
            Report
          </Link>
          <Link to="/about" className="hover:text-green-600 transition" onClick={toggleMenu}>
            About
          </Link>
          <Link
            to="/signin"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            onClick={toggleMenu}
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
