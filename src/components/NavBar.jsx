import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // or swap with your own SVG icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-purple-600">
          ✨ Lumenar
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          {navItems.map(({ name, path }) => (
            <Link key={name} to={path} className="hover:text-purple-600 transition">
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
          <nav className="flex flex-col space-y-2 text-gray-700 dark:text-gray-200 font-medium">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-600 transition"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
