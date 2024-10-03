// Services.jsx
import React, { useState } from "react";
import "./Services.scss";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Function to handle service selection
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // Reset to show the list of services
  const handleBack = () => {
    setSelectedService(null);
  };

  // Content for each service
  const serviceDetails = {
    MSAI: (
      <div>
        <h1>MASTER OF SCIENCE IN ARTIFICIAL INTELLIGENCE IN USA</h1>
        <p style={{ color: "#fff", fontSize: "1rem", lineHeight: "1.5" }}>
          Machine Learning (ML): Students work on algorithms that allow
          computers to learn from data, covering supervised and unsupervised
          learning techniques.
        </p>
        <ul>
          <li>Machine Learning Algorithms</li>
          <li>Neural Networks</li>
          <li>Natural Language Processing (NLP)</li>
        </ul>
        <h2>Advanced Topics Include :</h2>
        <ul>
          <li>
            <strong>Deep Learning:</strong> Using neural networks for complex
            tasks, such as image recognition (CNNs) and sequential data analysis
            (RNNs).
          </li>
          <li>
            <strong>Computer Vision:</strong> This field covers image
            recognition and object detection, important in autonomous vehicles
            and surveillance systems.
          </li>
          <li>
            <strong>Robotics:</strong> AI in robotics enhances automation,
            enabling robots to perform tasks autonomously.
          </li>
        </ul>
        <button onClick={handleBack}>Back to Services</button>
      </div>
    ),
    jobOpportunities: (
      <div>
        <h1>Job Opportunities After MS in AI</h1>
        <p style={{ color: "#fff", fontSize: "1rem", lineHeight: "1.5" }}>
          After completing a Master's in Artificial Intelligence (MS in AI),
          graduates have numerous job opportunities across a wide range of
          industries.
        </p>
        <h3>Here are some key career paths:</h3>
        <ul>
          <li>Machine Learning Engineer</li>
          <li>Data Scientist</li>
          <li>AI Research Scientist</li>
          <li>Computer Vision Engineer</li>
          <li>NLP Engineer</li>
          <li>Robotics Engineer</li>
          <li>AI Product Manager</li>
          <li>AI Consultant</li>
          <li>Automation Engineer</li>
          <li>Autonomous Vehicle Engineer</li>
        </ul>
        <button onClick={handleBack}>Back to Services</button>
      </div>
    ),
    seo: (
      <div>
        <h1>Salary Expectations</h1>
        <p style={{ color: "#fff", fontSize: "1rem", lineHeight: "1.5" }}>
          Salaries in AI roles vary by location and expertise. For example,
          Machine Learning Engineers in the U.S. earn around $110,000 to
          $150,000 annually, while AI Research Scientists can earn upwards of
          $200,000 depending on experience and employer.
        </p>
        <button onClick={handleBack}>Back to Services</button>
      </div>
    ),
    digitalMarketing: (
      <div>
        <h1>Industries Hiring AI Professionals</h1>
        <p style={{ color: "#fff", fontSize: "1rem", lineHeight: "1.5" }}>
          AI professionals are in high demand across multiple industries. Some
          of the top industries hiring AI professionals include:
        </p>
        <ul>
          <li>Healthcare and Medical Research</li>
          <li>Autonomous Vehicle Manufacturing</li>
          <li>Finance and Banking</li>
          <li>Retail and E-commerce</li>
          <li>Robotics and Automation</li>
          <li>Telecommunications</li>
        </ul>
        <button onClick={handleBack}>Back to Services</button>
      </div>
    ),
  };

  return (
    <section className="services cta-button" id="services">
      <div className="container">
        {selectedService ? (
          // Render selected service content
          <div className="service-details">
            {serviceDetails[selectedService]}
          </div>
        ) : (
          // Render service cards if no service is selected
          <>
            <h2>Our Services</h2>
            <div className="services-grid">
              <div
                className="service-card"
                onClick={() => handleServiceClick("MSAI")}
              >
                <h3>Master of Science in Artificial Intelligence in USA</h3>
                <p>
                  Explore a comprehensive program that covers the foundational
                  and advanced AI topics. Prepare for a career in AI with
                  hands-on projects and cutting-edge research opportunities.
                </p>
              </div>
              <div
                className="service-card"
                onClick={() => handleServiceClick("jobOpportunities")}
              >
                <h3>Job Opportunities After MS in AI</h3>
                <p>
                  Discover a wide range of job roles after completing an MS in
                  AI, including AI Researcher, Data Scientist, and Machine
                  Learning Engineer, with career growth potential.
                </p>
              </div>
              <div
                className="service-card"
                onClick={() => handleServiceClick("seo")}
              >
                <h3>Salary Expectations</h3>
                <p>
                  Learn about the salary expectations for AI professionals,
                  including roles like Machine Learning Engineer, AI Research
                  Scientist, and more.
                </p>
              </div>
              <div
                className="service-card"
                onClick={() => handleServiceClick("digitalMarketing")}
              >
                <h3>Industries Hiring AI Professionals</h3>
                <p>
                  Explore the top industries where AI professionals are in high
                  demand, such as healthcare, finance, autonomous vehicles, and
                  more.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
