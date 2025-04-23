import React from 'react';
import Slider from 'react-slick';
import Typewriter from 'typewriter-effect';
import './WebDevelopment.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: "ART in Augmented Reality",
    description: "Thesis from Universidad San Francisco de Quito...",
    url: "https://art-in-augmented-reality.web.app/",
    qrCodeSrc: "/assets/qrcodes/artQR.png",
    youtubeUrl: "https://www.youtube.com/embed/joIjXn2vBqs?si=Ys6nGvSv3uo0Y8B5",
    images: [
      "/assets/images/webDevelopment/art/frame1.jpg",
      "/assets/images/webDevelopment/art/frame2.jpg",
      "/assets/images/webDevelopment/art/frame3.jpg",
      "/assets/images/webDevelopment/art/frame4.jpg",
      "/assets/images/webDevelopment/art/frame5.jpg"
    ]
  },
  {
    title: "Fanshawe College Virtual Exhibits",
    description: "In this project, I created a virtual exhibit for Fanshawe College where people can visualize important objects from the college's history in Augmented Reality.",
    url: "https://www.fanshawelibrary.com/virtual-exhibits/",
    qrCodeSrc: "/assets/qrcodes/virtualExhibits.png",
    images: [
      "/assets/images/webDevelopment/virtualExhibits/frame1.png",
      "/assets/images/webDevelopment/virtualExhibits/frame2.png",
      "/assets/images/webDevelopment/virtualExhibits/frame3.png"
    ]
  },
  {
    title: "Blog Platform",
    description: "A blogging platform with a custom CMS...",
    url: "https://panita-food.vercel.app/",
    qrCodeSrc: "/assets/qrcodes/blog-platform.png",
    images: [
      "/assets/images/blog1.png",
      "/assets/images/blog2.png",
      "/assets/images/blog3.png"
    ]
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true
};

const WebDevelopment = () => {
  return (
    <div className="web-development">
      <div className="intro-section">
        <h1>Web Development</h1>
        <p>
          I specialize in creating modern, responsive, and user-friendly websites.
        </p>
        <Typewriter
          options={{
            strings: ['Frontend Development', 'Backend Development', 'Full-Stack Solutions'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="skills-section">
        <h2>My Skills</h2>
        <ul className="skills-list">
          <li>HTML, CSS, JavaScript</li>
          <li>WordPress</li>
          <li>React, Angular, Vue.js</li>
          <li>Node.js, Express</li>
          <li>RESTful APIs, GraphQL</li>
          <li>MongoDB, MySQL</li>
          <li>Git, GitHub</li>
          <li>WordPress</li>
          <li>AR Implementation</li>
          
        </ul>
      </div>

      <div className="projects-section">
        <h2>Highlighted Projects</h2>
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-button"
            >
              Visit Website
            </a>
            <div className="content-container">
              <div className="project-media">
                {project.youtubeUrl && (
                  <iframe
                    className="youtube"
                    src={project.youtubeUrl}
                    title={`${project.title} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}

                {project.images?.length > 0 && (
                  <Slider {...sliderSettings} className="slick-carousel">
                    {project.images.map((src, i) => (
                      <div key={i}>
                        <img src={src} alt={`${project.title} Screenshot ${i + 1}`} className="carousel-image" />
                      </div>
                    ))}
                  </Slider>
                )}
              </div>

              <div className="qr-code-section">
                <img
                  src={project.qrCodeSrc}
                  alt={`${project.title} QR Code`}
                  className="qr-code"
                />
                <h3>Scan QR Code</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopment;
