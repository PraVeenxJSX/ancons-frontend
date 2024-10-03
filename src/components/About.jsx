import React, { useEffect, useState } from 'react';
import './About.scss';
import "../App.css";
import FloridaTechImage from '../../public/florida-tech.webp'; // Update with the correct image path
import acadamic from '../../public/acadamic.webp';
import bridgeport from '../../public/bridgeport.webp';
import fairleigh from '../../public/fairleigh.webp';
import findlay from '../../public/findlay.webp';
import michigan from '../../public/michigan.webp';
import newhaven from '../../public/newhaven.webp';
import Nova from '../../public/nova.webp';
import texas from '../../public/texas.webp';
import William from '../../public/William.webp';
import wichita from '../../public/wichita.webp';


const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    {
      image: FloridaTechImage,
      title: 'Florida Institute of Technology',
      description:
        'Academic Programs: Aerospace Engineering, Biochemistry, Biomedical Engineering, Biotechnology, Cell & Molecular Biology, Chemical Engineering, Chemistry, Civil Engineering, Computer Engineering, Computer Information Systems, Computer Science, Conservation Technology, Cybersecurity, Electrical Engineering, Engineering Management, Environmental Science, Information Technology, Management Information Systems, Marine Biology, Mechanical Engineering, Ocean Engineering, Software Engineering, Systems Engineering.',
    },
    {
      image: acadamic,
      title: 'Florida International University',
      description:
        'Academic Programs: MBA in Business Analytics, MBA Healthcare, MBA Cybersecurity, Master of Accounting, Master of International Business, MS in Finance, MS Health Informatics & Analytics, MS in HRM, MS in Information Systems, MS in International Real Estate, MS in Logistics & Supply Chain Management, MS in Marketing.',
    },
    {
      image: fairleigh,
      title: 'Fairleigh Dickinson University',
      description:
        'Academic Programs: Masters in: Administrative Science, Animation, Biology, Business & Accounting, Chemistry, Computer Science, Criminology and Criminal Justice, Cybersecurity, Engineering and Technology, Film, Health Sciences, Hospitality and Tourism, Nursing, Occupational Therapy, Pharmacy, Physician Assistant, Sports Management.',
    },
    {
      image: bridgeport,
      title: 'University of Bridgeport',
      description:
        'Academic Programs: Masters in: Acupuncture, Analytics and Systems, Artificial Intelligence, Biology, Biomedical Engineering, Business Administration, Chiropractic, Computer Science & Engineering, Criminal Justice, Dental Hygiene, Education Leadership, Electrical Engineering, Finance, Health Sciences, Medical Engineering, Nursing MSN, Nutrition, Physician Assistant, Public Health, Technology Management.',
    },
    {
      image: newhaven,
      title: 'University of New Haven',
      description:
        'Academic Programs: MS Cellular & Molecular Biology, Chemistry, Environmental Science, Industrial Psychology, Information Science, Marine Policy and Management, Accounting, Business Analytics, Financial Analytics, Human Resources, Information Science, MBA, Sports Management, Healthcare Administration, Health Sciences, Medical Laboratory Science, Public Health, Biomedical Engineering, Chemistry, Civil Engineering, Computer Science, Construction Management, Cybersecurity & Networks, Data Science, Electrical Engineering, Environmental Engineering, Industrial Engineering, Information Science, Mechanical Engineering.',
    },
    {
      image: William,
      title: 'William Paterson University',
      description:
        'Academic Programs: MS Athletic Training, Biotechnology, Clinical and Counseling Psychology, Doctor of Nursing Practice (DNP), Materials Chemistry, MBA, Nursing Administration (MSN), Nursing - Adult Gerontology (MSN), Nursing - Family Nurse Practitioner (MSN), MEd School Counseling, MEd Special Education, MFA.',
    },
    {
      image: Nova,
      title: 'Nova Southeastern University',
      description:
        'Academic Programs: MS Anesthesia, Biological Sciences, Biomedical Sciences, Clinical Vision Research, Computer Science, Counseling, Criminal Justice, Cyber Defense, Cybersecurity Management, Data Analytics and Artificial Intelligence, Dental Medicine, Digital Marketing, Environmental Sciences, Finance, Forensic Psychology, Integrated Medical Sciences, Health Informatics, Health Science, Information Systems, Information Technology, Marine Science, Medical Education, Medicinal Chemistry, Nursing (MSN), Nutrition, Pharmaceutical Affairs, Pharmaceutical Sciences, Physician Assistant, Public Administration, Public Health, Sports Science, Technology Management.',
    },
    {
      image: wichita,
      title: 'Wichita State University',
      description:
        'Academic Programs: Masters in Aerospace Engineering, Biomedical Engineering, Computer Science, Computing, Data Science, Electrical and Computer Engineering, Engineering Management, Industrial Engineering, Materials Engineering, Mechanical Engineering.',
    },
    {
      image: michigan,
      title: 'University of Findlay',
      description:
        'Academic Programs: Applied Security & Analytics, Business Administration, Education, Environmental, Safety & Health, Health Informatics Occupational Therapy, Professional Communication, Physician Assistant, Radiologic Sciences, Rhetoric & Writing and TESOL.',
    },
    {
      image: findlay,
      title: ' Missouri State University',
      description:
        'Academic Programs: MS Applied Computer Science, MS Applied Health & Sports Science, MS Biology, MS Data Analytics, MS Information Systems, MBA (Accounting, Agriculture Economics, Business Analytics, Finance, GIS, Healthcare Management, and Marketing).',
    },
    {
      image: texas,
      title: 'Texas A&M University Kingsville',
      description:
        'Academic Programs: Chemical Engineering, M.Eng. Civil Engineering, M.Eng. Electrical Engineering, M.Eng. Environmental Engineering, M.Eng. Mechanical Engineering, M.Eng. Natural Gas Engineering, M.Eng. M.S. Computer Science, M.S. Electrical Engineering, M.S. Environmental Engineering, M.S. Environmental Systems Management, M.S. Industrial Engineering, M.S. Industrial Management, M.S. Kinesiology, M.S. Mechanical Engineering, M.S. Mechatronics Engineering, M.S. Natural Gas Engineering, M.S. Petrophysics.',
    },
    // Add more cards here if needed
  ];

  // Automatic card slider logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 4000); // Changes card every 4 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [cardData.length]);

  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Us</h2>
        <h3>FREE ADMISSION PROCESSING & VISA COUNSELING Jan '25</h3>
       
        
        <div className="card-container">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`info-card ${currentIndex === index ? 'active' : ''}`}
            >
              <img src={card.image} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
