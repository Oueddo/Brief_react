import React from "react";
import {MapPin,
        Banknote,
        Mail,
        Package, } from "lucide-react";

const features = [
  {
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    title: "Réserver votre voyage!",
    description: "Réservez vos billets de bus en ligne, consultez les itinéraires, horaires et tarifs instantanément.",
    bgColor:"bg-fuchsia-300",
  },
  {
    icon: <Banknote className="w-6 h-6 text-blue-600" />,
    title: "Transfert d'argent",
    description: "Envoyez ou recevez de l’argent entre nos agences de manière rapide,suivi en temps réel et sécurisée..",
    bgColor: "bg-green-300",
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    title: "Suivre vos courrier",
    description: "Suivez l’acheminement de vos lettres et colis en temps réel grâce à un système de suivi efficace..",
    bgColor:"bg-cyan-500",
  },
  {
    icon: <Package className="w-6 h-6 text-blue-600" />,
    title: "Suivre vos bagages",
    description: "Consultez l’état, la position et l’arrivée de vos bagages ou colis transportés entre agences.",
    bgColor: "bg-blue-200"
  },
];

const stats = [
  { label: "	Clients ayant effectué une réservation en ligne avec succès", value: "1250+" },
  { label: "Opérations de transfert d’argent entre agences", value: "Ultra rapide ⚡ avec 3800+" },
  { label: "Courriers enregistrés et suivis via la plateforme", value: "1963+" },
  { label: "Bagages enregistrés et livrés grâce au système de suivi", value: "8979+" },
];

const Features = () => {

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Titre section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Fonctionnalités principales</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Un ensemble de fonctionnalités pensées pour vous faire gagner du temps et de l'efficacité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-md hover:-translate-y-1 transition"
            >
              <div
                className={`mb-3 p-3 rounded-full w-fit ${item.bgColor} `}>{item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
