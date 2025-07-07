import React from "react";
import { Menu, Search, User,LucideUser,LucideSearch,LucideMenu, X } from "lucide-react";
import { Facebook } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <LucideUser className="w-8 h-8 text-blue-600" />
          <span className="font-bold text-xl">AgenceVoyage</span>
        </div>

        {/* Nav desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home">Voyage</a>
          <a href="#features">Transfert</a>
          <a href="#pricing">Courrier</a>
          <a href="#contact">Bagage</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button aria-label="Recherche" className="hidden md:block">
            <LucideSearch />
          </button>
          <button aria-label="Profil" className="hidden md:block">
            <LucideUser />
          </button>
          <button className="md:hidden" aria-label="Menu">
            <LucideMenu />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <nav className="md:hidden bg-gray-50">
        <a href="#home" className="block px-4 py-2">Voyage</a>
        <a href="#features" className="block px-4 py-2">Transfert</a>
        <a href="#pricing" className="block px-4 py-2">Courrier</a>
        <a href="#contact" className="block px-4 py-2">Bagage</a>
      </nav>
    </header>

  );
};

export default Header;
