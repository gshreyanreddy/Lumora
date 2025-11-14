import { useState } from 'react';

// Define the type for a navigation item
interface NavItem {
  name: string;
  href: string;
}

const Navbar = () => {
  // Explicitly type the state for the mobile menu
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Define the array of navigation items with the NavItem type
  const navItems: NavItem[] = [
    { name: 'About Us', href: 'about-us' },
    { name: 'Features', href: 'features' },
    { name: 'Compliance', href: '#compliance' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="shrink-0">
            <a href="/" className="flex items-center">
              {/* Placeholder for the logo image */}
              <img
                className="h-12 w-auto"
                src="/lumora title logo.png"
                alt="Lumora AI Logo"
              />
            </a>
          </div>

          {/* Desktop Navigation Links and CTA */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Nav Links */}
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium transition duration-150 ease-in-out"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu (Hamburger or Close) */}
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            {/* Mobile CTA Button */}
            <a
              href="#demo"
              className="block w-full text-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 mt-2"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-2">
//           <img
//             src="/lumora title logo.png" 
//             alt="Lumora Logo"
//             className="h-12 w-auto"
//           />
          
//         </Link>

//         {/* Nav Links */}
//         <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
//           <Link to="/about" className=" hover:text-blue-600  transition-colors">
//             About
//           </Link>
//           <Link to="/features" className="hover:text-blue-600 transition-colors">
//             Features
//           </Link>
//           <Link to="/pricing" className="hover:text-blue-600 transition-colors">
//             Pricing
//           </Link>
//         </div>

//         {/* Book a Demo Button */}
//         <Link
//           to="/book-demo"
//           className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium shadow-sm hover:bg-blue-700 transition-colors"
//         >
//           Book a Demo
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
