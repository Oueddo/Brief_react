import React from "react";
import bus from '../assets/bus1.jpg';
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Description du cote gauche du Site*/}
        <div>
          {/*  */}
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-4">
            NOUVEAU
          </span>

          {/* Titre du site*/}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Vous aidez à <span className="text-blue-600"> Voyager, Suivre vos Transfert, Courrier et Bagage</span> <br />
            est notre <span className="text-gray-800">Responsabilité.</span>
          </h1>

          {/* Description  du titre*/}
          <p className="text-gray-600 mb-8">
            Une solution rapide, moderne, fiable et sécurisée pour vos voyage et transaction avec notre, AgenceVoyage.
          </p>

          {/* Bouton Commencer */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2">
              Commencer <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 flex items-center gap-2">
              Voir la démo <PlayCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Coté droite */}
        <div className="relative">
          <img
            src={bus}
            alt="Illustration"
            className="rounded-xl shadow-lg w-full"
          />
          {/* Élément décoratif */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
