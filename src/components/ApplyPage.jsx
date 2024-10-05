import React, { useState } from 'react';
import './ApplyPage.scss';
import ets from "../../public/ETS.png";
import gre from "../../public/gre.webp";

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    qualification: '',
    semester: '',
    testPlans: '',
    resume: null,
  });

  const [showHours, setShowHours] = useState(false); // State to toggle opening hours

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => formDataToSend.append(key, formData[key]));
  
    try {
      const response = await fetch('https://backend-ancons-nodejs-1.onrender.com/api/users/register', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        alert('Registration successful');
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Toggle function for opening hours
  const toggleHours = () => {
    setShowHours(!showHours);
  };

  return (
    <div className="apply-page">
      <div className="info-section">
        <h1>Master of Science in Artificial Intelligence in USA</h1>
        <p>
          Master of Science in Artificial Intelligence covers foundational and advanced AI topics such as Machine Learning (ML), Neural Networks, Natural Language Processing (NLP), and more.
        </p>
        <ul>
          <li>Machine Learning (ML): Algorithms that allow computers to learn from data.</li>
          <li>Neural Networks: Architecture and functioning of neural networks.</li>
          <li>Natural Language Processing (NLP): Techniques like sentiment analysis and machine translation.</li>
          <li>Deep Learning: Neural networks for complex tasks like image recognition.</li>
          <li>Computer Vision: Image recognition and object detection.</li>
          <li>Robotics: AI in robotics enhances automation.</li>
        </ul>
        <p>Job opportunities after MS in AI include Machine Learning Engineer, Data Scientist, AI Research Scientist, and more, across industries like tech, finance, and healthcare.</p>
      </div>

      <div className="ets-section">
        <h2>ETS Authorized Testing Center for TOEFL & GRE Exams</h2>
        <h3>New TOEFL iBT</h3>
        <img src={ets} alt="ETS Logo" className="ets-logo" />
        <p>Features of the New TOEFL iBT, which is now 2 hours long:</p>
        <ul>
          <li>Test Length: 2 hours long.</li>
          <li>Test Structure: Comprises four sections – Reading, Listening, Speaking, and Writing.</li>
          <li>Reading Section: Shortened to 2 reading passages with 10 questions each.</li>
          <li>Listening Section: Shorter lectures and conversations with fewer questions.</li>
          <li>Speaking Section: Contains 4 tasks instead of 6.</li>
          <li>Writing Section: Remains with 2 tasks.</li>
          <li>Score Validity: Scores are valid for 2 years.</li>
        </ul>

        <h3>New GRE</h3>
        <img src={gre} alt="GRE TOEFL Logo" className="gre-toefl-logo" />
        <p>Key features of the New GRE:</p>
        <ul>
          <li>Test Length: 2 hours (reduced from the previous 3 hours 45 minutes).</li>
          <li>Test Structure: Analytical Writing, Verbal Reasoning, and Quantitative Reasoning.</li>
          <li>Verbal Reasoning: 2 sections, 29 minutes per section.</li>
          <li>Quantitative Reasoning: 2 sections, 47 minutes per section.</li>
          <li>Score Validity: Scores are valid for 5 years.</li>
        </ul>
        <p>Request for Rs.2000/ Discount Codes via WhatsApp to book your test.</p>
      </div>

      <div className="form-section">
        <h2>Register for Free Admission Processing</h2>
        <form onSubmit={handleSubmit} className="application-form">
          <label>
            Full Name*
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </label>
          <label>
            Phone*
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </label>
          <label>
            Email*
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </label>
          <label>
            Qualification*
            <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} required />
          </label>
          <label>
            Are you planning for Jan, May, or Aug '25 semester admission?*
            <select name="semester" value={formData.semester} onChange={handleInputChange} required>
              <option value="">Select</option>
              <option value="Jan">Jan</option>
              <option value="May">May</option>
              <option value="Aug">Aug</option>
            </select>
          </label>
          <label>
            Are you planning to write TOEFL or GRE or BOTH @ ANCONS TEST CENTER?*
            <select name="testPlans" value={formData.testPlans} onChange={handleInputChange} required>
              <option value="">Select</option>
              <option value="TOEFL">TOEFL</option>
              <option value="GRE">GRE</option>
              <option value="Both">Both</option>
            </select>
          </label>
          <label>
            Attach Resume*
            <input type="file" name="resume" onChange={handleFileChange} required />
          </label>
          <button type="submit">Submit Preliminary Application</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
