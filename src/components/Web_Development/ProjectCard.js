import React, { useState } from 'react';

const ProjectCard = ({ title, description, url, youtubeUrl, images, qrCodeSrc }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="project-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="visit-button"
      >
        Visit Website
      </a>
      <div className="content-container">
        <div className="project-media">
          {/* YouTube Video */}
          {youtubeUrl && (
            <iframe
              className="youtube"
              src={youtubeUrl}
              title={`${title} Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {/* Image Carousel with Arrows */}
          {images && images.length > 0 && (
            <div className="carousel-wrapper with-arrows">
              <div className="arrow left" onClick={handlePrev}>
                &#10094;
              </div>
              <img
                src={images[current]}
                alt={`${title} Screenshot ${current + 1}`}
              />
              <div className="arrow right" onClick={handleNext}>
                &#10095;
              </div>
            </div>
          )}
        </div>

        <div className="qr-code-section">
          <img
            src={qrCodeSrc}
            alt={`${title} QR Code`}
            className="qr-code"
          />
          <h3>Scan QR Code</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
