import React from "react";
import "./3DModeling.scss";
import ModelCard from "./ModelCard";

const cards = [
  {
    title: "Security Robot",
    description:
      "An autonomous surveillance bot modelled for urban environments.",
    iframeUrl:
      "https://www.meshmorph.com/iframe/embed/8f40b33d-f241-4364-b6dc-ae6db93ab034",
    software: ["Maya", "Photoshop"],
    videoUrl: "https://www.youtube.com/embed/_kK2bP3pUJE?si=VG7L4YSI_aFUU57M",
  },
  {
    title: "AntiVenom Rigged Character",
    description:
      "This project is a rigged character modelled for animation and game development.",
    iframeUrl:
      "https://www.meshmorph.com/iframe/embed/203f679f-6212-4d29-8e83-637a75b4ce40",
    software: ["ZBrush", "Maya"],
    images: [
      "/assets/images/screenshots/venomRig1.png",
      "/assets/images/screenshots/venomRig2.png",
    ],
  },
];

const Modeling = () => {
  return (
    <div className="modeling">
      <div className="intro-section">
        <h1>3D Modeling</h1>
        <p>
          As part of my jorney in the Interactive Media World, I have created some 3D models and 3D scannings for companies and personal projects. Here are some of the most relevant ones.
        </p>
      </div>

      {cards.map((card, i) => (
        <ModelCard key={i} {...card} />
      ))}

      <h1>3D Scanning</h1>

    
    </div>
  );
};

export default Modeling;
