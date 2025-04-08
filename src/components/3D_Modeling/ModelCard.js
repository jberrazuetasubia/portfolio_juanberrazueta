import React, { useState, useEffect } from 'react';

const ModelCard = ({ title, description, iframeUrl, software, images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="cardContainer">
      <div className="card1">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          src={iframeUrl}
          title={title}
        ></iframe>
      </div>

      <div className="card2">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="software-used">
          <p><strong>Software Used:</strong></p>
          <div className="tags">
            {software.map((tool, i) => (
              <span key={i} className="tag">{tool}</span>
            ))}
          </div>
        </div>

        <div className="carousel-section">
          <div className="carousel-wrapper">
            {images.map((src, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === current ? 'active' : ''}`}
              >
                <img src={src} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
