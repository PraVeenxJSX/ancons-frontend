import React from "react";
import img from "../../public/image.png";
import './Map.scss'; // Import the SCSS file

const Map = () => {
  return (
    <div className="map-container">
      <h1>ancons international officially represents usa universities</h1>
      <img src={img} alt="ancons map" />
      <p>
        ANCONS International represents universities in the USA, focusing on
        facilitating the admission process for international students who wish
        to study in American institutions. ANCONS provides assistance with
        application procedures, guiding students through visa requirements, and
        offering support throughout the entire process of studying in the USA.
      </p>
    </div>
  );
};

export default Map;
