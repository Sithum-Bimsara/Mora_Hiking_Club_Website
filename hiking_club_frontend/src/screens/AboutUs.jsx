import React, { useEffect } from "react";
import "../styles/AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images (replace with actual member images)
import exec1 from "../assets/images/1.png";
import exec2 from "../assets/images/2.png";
import exec3 from "../assets/images/3.png";
import exec4 from "../assets/images/4.png";
import exec5 from "../assets/images/5.png";
import exec6 from "../assets/images/6.png";
import exec7 from "../assets/images/7.png";
import exec8 from "../assets/images/8.png";
import exec9 from "../assets/images/9.png";

import advisor1 from "../assets/images/10.png";
import advisor2 from "../assets/images/11.png";

import admin1 from "../assets/images/5.png";
import admin2 from "../assets/images/12.png";
import admin3 from "../assets/images/13.png";
import admin4 from "../assets/images/14.png";
import admin5 from "../assets/images/15.png";

import finance1 from "../assets/images/6.png";
import finance2 from "../assets/images/16.png";
import finance3 from "../assets/images/17.png";
import finance4 from "../assets/images/18.png";
import finance5 from "../assets/images/19.png";
import finance6 from "../assets/images/20.png";

import media1 from "../assets/images/7.png";
import media2 from "../assets/images/21.png";
import media3 from "../assets/images/22.png";
import media4 from "../assets/images/23.png";
import media5 from "../assets/images/24.png";
import media6 from "../assets/images/25.png";
import media7 from "../assets/images/26.png";

import health1 from "../assets/images/9.png";
import health2 from "../assets/images/33.png";
import health3 from "../assets/images/34.png";
import health4 from "../assets/images/35.png";
import health5 from "../assets/images/36.png";
import health6 from "../assets/images/37.png";

import research1 from "../assets/images/8.png";
import research2 from "../assets/images/32.png";
import research3 from "../assets/images/27.png";
import research4 from "../assets/images/28.png";
import research5 from "../assets/images/29.png";
import research6 from "../assets/images/30.png";
import research7 from "../assets/images/31.png";

import editor1 from "../assets/images/2.png";
import editor2 from "../assets/images/38.png";
import editor3 from "../assets/images/39.png";
import editor4 from "../assets/images/40.png";
import editor5 from "../assets/images/41.png";

// Committee Members Data
const committeeMembers = {
  executive: [
    { name: "Nisal Rajapksha", role: "President", photo: exec1 },
    { name: "Umaya Gunarathne", role: "Secretary", photo: exec2 },
    { name: "Senior Lecturer ", role: "Executive", photo: exec3 },
    { name: "Member 4", role: "Executive", photo: exec4 },
    { name: "Member 5", role: "Executive", photo: exec5 },
    { name: "Member 6", role: "Executive", photo: exec6 },
    { name: "Member 7", role: "Executive", photo: exec7 },
    { name: "Member 8", role: "Executive", photo: exec8 },
    { name: "Member 9", role: "Executive", photo: exec9 }
  ],
  advisors: [
    { name: "Advisor 1", role: "Advisor", photo: advisor1 },
    { name: "Advisor 2", role: "Advisor", photo: advisor2 }
  ],
  
  administration: [
    { name: "Admin 1", role: "Admin", photo: admin1 },
    { name: "Admin 2", role: "Admin", photo: admin2 },
    { name: "Admin 3", role: "Admin", photo: admin3 },
    { name: "Admin 4", role: "Admin", photo: admin4 },
    { name: "Admin 5", role: "Admin", photo: admin5 }
  ],
  finance: [
    { name: "Finance 1", role: "Finance", photo: finance1 },
    { name: "Finance 2", role: "Finance", photo: finance2 },
    { name: "Finance 3", role: "Finance", photo: finance3 },
    { name: "Finance 4", role: "Finance", photo: finance4 },
    { name: "Finance 5", role: "Finance", photo: finance5 },
    { name: "Finance 5", role: "Finance", photo: finance5 },
    { name: "Finance 6", role: "Finance", photo: finance6 }
  ],
  media: [
    { name: "Media 1", role: "Media", photo: media1 },
    { name: "Media 2", role: "Media", photo: media2 },
    { name: "Media 3", role: "Media", photo: media3 },
    { name: "Media 4", role: "Media", photo: media4 },
    { name: "Media 5", role: "Media", photo: media5 },
    { name: "Media 6", role: "Media", photo: media6 },
    { name: "Media 7", role: "Media", photo: media7 }
  ],
  health: [
    { name: "Health 1", role: "Health & Safety", photo: health1 },
    { name: "Health 2", role: "Health & Safety", photo: health2 },
    { name: "Health 3", role: "Health & Safety", photo: health3 },
    { name: "Health 4", role: "Health & Safety", photo: health4 },
    { name: "Health 5", role: "Health & Safety", photo: health5 },
    { name: "Health 6", role: "Health & Safety", photo: health6 }
  ],
  research: [
    { name: "Research 1", role: "Research & Development", photo: research1 },
    { name: "Research 2", role: "Research & Development", photo: research2 },
    { name: "Research 3", role: "Research & Development", photo: research3 },
    { name: "Research 4", role: "Research & Development", photo: research4 },
    { name: "Research 5", role: "Research & Development", photo: research5 },
    { name: "Research 6", role: "Research & Development", photo: research6 },
    { name: "Research 7", role: "Research & Development", photo: research7 }
  ],

  editorial: [
    { name: "Editor 1", role: "Editor", photo: editor1 },
    { name: "Editor 2", role: "Editor", photo: editor2 },
    { name: "Editor 3", role: "Editor", photo: editor3 },
    { name: "Editor 4", role: "Editor", photo: editor4 },
    { name: "Editor 5", role: "Editor", photo: editor5 }
  ]
};

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderCommittee = (title, members, row1Count) => (
    <div className="committee-section" data-aos="fade-up">
      <h2>{title}</h2>
      <div className="committee-row">
        {members.slice(0, row1Count).map((member, index) => (
          <div key={index} className="committee-member" data-aos="fade-up">
            <img src={member.photo} alt={member.name} className="member-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <div className="committee-row">
        {members.slice(row1Count).map((member, index) => (
          <div key={index} className="committee-member" data-aos="fade-up">
            <img src={member.photo} alt={member.name} className="member-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="about-us">
      <h1 data-aos="fade-down">About Mora Hiking Club</h1>
      <p className="aboutp" data-aos="fade-up">
      Founded with a passion for exploring the beauty of the great outdoors, Mora Hiking Club is a community of enthusiastic hikers, adventurers, and nature lovers who are committed to discovering the hidden gems of Sri Lanka. We always inspire individuals to connect with nature, push their limits, and embrace the spirit of adventure while fostering teamwork, sustainability, and personal growth.

  

In 2016, what started as a small group of hiking enthusiasts at the University of Moratuwa has grown into a vibrant community of like-minded individuals who share a love for the outdoors. Over the years, we’ve trekked through forests, scaled mountains, and explored historic sites, all while enjoying the breathtaking landscapes that our world has to offer.

  

Through our carefully curated hikes, we aim to create unforgettable experiences, where members can challenge themselves physically, expand their horizons, and forge lifelong friendships. Each hike is an opportunity to bond with others, learn about nature, and develop skills that extend beyond the trail.

  

We host regular hiking events, expeditions, and flagship events like CYKEL, STRIDIAN, and RAPPEL RUSH that encourage a sense towards nature.

  

Whether you are an experienced hiker or looking to take your first step into the wild, Mora Hiking Club welcomes you. Our community is here to support you, challenge you, and ensure you have the best possible adventure. Join us as we explore the most stunning trails, connect with nature, and create memories that will last a lifetime.

  

Embrace the trail, discover your potential, and let’s hike together!
      </p>

      {renderCommittee("Executive Committee", committeeMembers.executive, 4)}
      {renderCommittee("Advisors", committeeMembers.advisors, 2)}
      
      {renderCommittee("Administration Committee", committeeMembers.administration, 1)}
      {renderCommittee("Finance Committee", committeeMembers.finance, 1)}
      {renderCommittee("Media Committee", committeeMembers.media, 1)}
      {renderCommittee("Health & Safety Committee", committeeMembers.health, 1)}
      {renderCommittee("Research & Development Committee", committeeMembers.research, 1)}
      {renderCommittee("Editorial Panel", committeeMembers.editorial, 1)}
    </div>
  );
};

export default AboutUs;