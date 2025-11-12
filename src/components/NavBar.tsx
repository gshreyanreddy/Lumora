import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/lumora title logo.png" 
            alt="Lumora Logo"
            className="h-10 w-auto"
          />
          <span className="font-semibold text-xl text-blue-600 tracking-wide">
            Lumora
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link to="/features" className="hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="hover:text-blue-600 transition-colors">
            Pricing
          </Link>
        </div>

        {/* Book a Demo Button */}
        <Link
          to="/book-demo"
          className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium shadow-sm hover:bg-blue-700 transition-colors"
        >
          Book a Demo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
