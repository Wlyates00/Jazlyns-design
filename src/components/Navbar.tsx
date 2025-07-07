import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icon library
import { Link } from "react-router-dom";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className="bg-white shadow-md px-4 py-3">
         <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
               <div className="flex flex-row items-center">
                  <img src="/public/Logo.jpg" alt="logo" className="max-w-24" />
                  <div className="text-xl font-semibold font-georgian mt-2">
                     Jazlyn's Design LLC
                  </div>
               </div>
            </Link>

            {/* Hamburger button */}
            <button
               onClick={() => setIsOpen(!isOpen)}
               className="md:hidden text-gray-700 focus:outline-none"
            >
               {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Nav links */}
            <div
               className={`flex-col md:flex-row md:flex items-center ${
                  isOpen ? "flex" : "hidden"
               } md:static absolute top-24 left-0 w-full bg-white md:w-auto md:bg-transparen font-playfair text-xl`}
            >
               <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:text-gray-400"
               >
                  Home
               </Link>
               <Link
                  to="/showcase"
                  className="block px-4 py-2 text-gray-700 hover:text-gray-400"
               >
                  Showcase
               </Link>
               <Link
                  to="/resources"
                  className="block px-4 py-2 text-gray-700 hover:text-gray-400"
               >
                  Resources
               </Link>
               <Link
                  to="/about"
                  className="block px-4 py-2 text-gray-700 hover:text-gray-400"
               >
                  About
               </Link>
               <Link
                  to="/contact"
                  className="block px-4 py-2 text-gray-700 hover:text-gray-400"
               >
                  Contact
               </Link>
            </div>
         </div>
      </nav>
   );
}
