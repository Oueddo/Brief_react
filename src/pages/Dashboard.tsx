import React from "react";
import SidebarLayout from "../layouts/SidebarLayout.tsx";

const Dashboard = () => {
  return (
    <SidebarLayout>
      <div className="space-y-8">
        {/* Grille des widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">Widget {index + 1}</h3>
              <p className="text-gray-500 text-sm">Contenu simulé</p>
            </div>
          ))}
        </div>

        {/* Section graphique */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Statistiques</h3>
          <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
            Graphique (placeholder)
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Dashboard;
