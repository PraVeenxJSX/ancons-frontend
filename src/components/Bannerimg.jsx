import React from 'react';
import bannerImage from '../../public/ancon.webp'; // Import the image
import "./Bannerimg.scss"; // Import the SCSS file for styling

const BannerImage = () => {
  return (
    <div className="banner-image-container">
      <img src={bannerImage} className="banner-image" alt="banner" />
    </div>
  );
};

export default BannerImage;
