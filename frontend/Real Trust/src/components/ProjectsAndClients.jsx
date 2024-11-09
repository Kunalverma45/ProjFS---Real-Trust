import React from "react";
import Ellipse23 from "/images/Ellipse 23.svg"; // Replace with the correct path to Ellipse 23
import Ellipse24 from "/images/Ellipse 24.svg"; // Replace with the correct path to Ellipse 24

const projects = [
  { title: "Consultation", duration: "3 weeks", img: "/images/project1.svg" },
  { title: "Design", duration: "4 months", img: "/images/project2.svg" },
  { title: "Marketing & Design", duration: "2 months", img: "/images/project3.svg" },
  { title: "Consultation & Marketing", duration: "1 month", img: "/images/project4.svg" },
  { title: "Consultation", duration: "6 weeks", img: "/images/project5.svg" },
];

const clients = [
  { name: "Harriet Smith", feedback: "“I was completely impressed with their professionalism and customer service.", img: "/images/client1 (1).svg" },
  { name: "Shilpa Kayak", feedback: "The product quality is consistently outstanding, exceeding my expectations every time.", img: "/images/client2.svg" },
  { name: "John Lupas", feedback: "“I had an amazing experience with this company! The customer service was top-notch,", img: "/images/client3.svg" },
  { name: "Marty Freeman", feedback: "I highly recommend them to anyone looking for quality products and excellent service.", img: "/images/client4.svg" },
  { name: "Lucy", feedback: "The product quality is consistently outstanding, exceeding my expectations every time.", img: "/images/client5.svg" },
];

const ProjectsAndClients = () => {
  return (
    <div className="projects-clients-container">
      {/* Background SVGs */}
      {/* <img src={Ellipse23} alt="Ellipse 23" className="background-ellipse ellipse-23" /> */}
      {/* <img src={Ellipse24} alt="Ellipse 24" className="background-ellipse ellipse-24" /> */}

      {/* Our Projects Section */}
      <div className="our-projects">
        <h2>Our Projects</h2>
        <p>We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.</p>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.img} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.duration}</p>
              <button className="see-more-button">See More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Happy Clients Section */}
      <div className="happy-clients">
        <h2>Happy Clients</h2>
        <div className="client-testimonials">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <img src={client.img} alt={client.name} className="client-image" />
              <p>{client.feedback}</p>
              <h4>{client.name}</h4>
            </div>
          ))}
        </div>
      </div>


      
    </div>
  );
};

export default ProjectsAndClients;
