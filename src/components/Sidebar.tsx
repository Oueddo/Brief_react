import React from "react"; 
import { useState } from "react";
import {
  Home,
  LayoutGrid,
  Users,
  BarChart2,
  Settings,
  LogOut,
  Info,
} from "lucide-react";

const menuItems = [
  { label: "Tableau de bord", icon: <Home className="w-5 h-5" /> },
  { label: "Projets", icon: <LayoutGrid className="w-5 h-5" /> },
  { label: "Utilisateurs", icon: <Users className="w-5 h-5" /> },
  { label: "Rapports", icon: <BarChart2 className="w-5 h-5" /> },
  { label: "Paramètres", icon: <Settings className="w-5 h-5" /> },
  { label: "Déconnexion", icon: <LogOut className="w-5 h-5" /> },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-6 flex flex-col justify-between">
      {/* Profil utilisateur */}
      <div>
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
            OK
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Okim Kriga</h4>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center w-full px-4 py-2 text-sm rounded-lg transition ${
                activeIndex === index
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Widget d’info */}
      <div className="mt-8 bg-blue-50 p-4 rounded-lg text-center">
        <Info className="w-6 h-6 mx-auto text-blue-500 mb-2" />
        <p className="text-sm text-gray-700 mb-2">
          Besoin d’aide ? Consultez notre guide.
        </p>
        <button className="text-sm text-blue-600 font-medium hover:underline">
          Ouvrir le centre d’aide
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

