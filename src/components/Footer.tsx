import React from "react";
import {
    Facebook,
    Twitter,
    Instagram,
    Mail,
    MapPin,
    Phone,
  } from "lucide-react";
  
  
  const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-8">
          {/* Colonne 1 : Logo + description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-3">AgenceVoyage</h3>
            <p className="text-gray-400 mb-4">
              Une solution de voyage sans se déplacer.
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            </div>
          </div>
  
          {/* Colonne 2 : Liens rapides */}
          <div>
            <h4 className="font-semibold mb-3">Liens rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Voyage</a></li>
              <li><a href="#" className="hover:text-white">Transfert</a></li>
              <li><a href="#" className="hover:text-white">Courrier</a></li>
              <li><a href="#" className="hover:text-white">Bagage</a></li>
            </ul>
          </div>
  
          {/* Colonne 3 : Services */}
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Service de voyage</a></li>
              <li><a href="#" className="hover:text-white">Service de Transfert</a></li>
              <li><a href="#" className="hover:text-white">Service de Courrier</a></li>
              <li><a href="#" className="hover:text-white">Service de Bagage</a></li>
            </ul>
          </div>
  
          {/* Colonne 4 : Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Moundou, Tchad
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +235 65 26 60 75
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                agencevoyage@gmail.com
              </li>
            </ul>
          </div>
        </div>
  
        {/* Bas de page */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AgenceVoyage. Tous droits réservés.
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white">Mentions légales</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white">Politique de confidentialité</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  