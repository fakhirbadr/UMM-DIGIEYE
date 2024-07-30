import React from "react";
import { useLocation } from "react-router-dom";

const CurrentLocation = () => {
  // Utilisation du hook useLocation pour obtenir l'objet location
  const location = useLocation();

  // Diviser le chemin en segments
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  return (
    <div className="px-6 py-6 font-bold text-lg">
      {" "}
      {/* Ajuster la taille du texte ici */}
      {pathSegments.map((segment, index) => (
        <strong key={index} className="block text-xl underline">
          {" "}
          {/* Ajuster la taille du texte ici */}
          {segment}
          <br />
        </strong>
      ))}
    </div>
  );
};

export default CurrentLocation;
