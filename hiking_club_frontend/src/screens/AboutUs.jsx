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

import editor1 from "../assets/images/4.png";
import editor2 from "../assets/images/38.png";
import editor3 from "../assets/images/39.png";
import editor4 from "../assets/images/40.png";
import editor5 from "../assets/images/41.png";

// Committee Members Data
const committeeMembers = {
  executive: [
    { name: "Nisal Rajapksha", role: "President", photo: exec1 },
    { name: "Umaya Gunarathne", role: "Secretary", photo: exec2 },
    { name: "Senior Lecturer Dr. Suranga Jayasena ", role: "Senior Treasurer", photo: exec3 },
    { name: "Dulmi Jayarathna", role: "Assistant Secretary", photo: exec4 },
    { name: "Dokula Perera", role: "Vice President - Administration", photo: exec5 },
    { name: "Duvindu Sahan", role: "Vice President - Finance", photo: exec6 },
    { name: "Kaveesha Kapuruge", role: "Vice President - Media", photo: exec7 },
    { name: "Lakshara Alwis", role: "Vice President - Research & Development", photo: exec8 },
    { name: "Thishala Thathsarani", role: "Vice President - Health & Safety", photo: exec9 }
  ],
  advisors: [
    { name: "Harshana Wijesekara", role: "", photo: advisor1 },
    { name: "Tharindi Hennkende", role: "", photo: advisor2 }
  ],
  
  administration: [
    { name: "Dokula Perera", role: "Vice President", photo: admin1 },
    { name: "Nipun malinga", role: "Committee Member", photo: admin2 },
    { name: "Banula Gunathilaka", role: "Committee Member", photo: admin3 },
    { name: "Dulani Rashodya", role: "Committee Member", photo: admin4 },
    { name: "Vihanga Athapaththu", role: "Committee Member", photo: admin5 }
  ],
  finance: [
    { name: "Duvindu Sahan", role: "Vice President", photo: finance1 },
    { name: "Himash Ruwanga", role: "Committee Member", photo: finance2 },
    { name: "Dananjaya Bandara", role: "Committee Member", photo: finance3 },
    { name: "Mishel Kulathunga", role: "Committee Member", photo: finance4 },
    { name: "Rashini Dias", role: "Committee Member", photo: finance5 },
    { name: "Nimna Aberathna", role: "Committee Membere", photo: finance6 }
  ],
  media: [
    { name: "Kaveesha Kapuruge", role: "Vice President", photo: media1 },
    { name: "Suweka sansiluni", role: "Committee Member", photo: media2 },
    { name: "Gagani Dewolage", role: "Committee Member", photo: media3 },
    { name: "Hasarangi withanawasam", role: "Committee Member", photo: media4 },
    { name: "Yasanjala Ravinatha", role: "Committee Member", photo: media5 },
    { name: "Sasinindu Kalhara", role: "Committee Member", photo: media6 },
    { name: "Dawood mohamed asriff", role: "Committee Member", photo: media7 }
  ],
  health: [
    { name: "Thishala Thathsarani", role: "Vice President", photo: health1 },
    { name: "Dulaj sathsara", role: "Committee Member", photo: health2 },
    { name: "Sathish chanaka", role: "Committee Member", photo: health3 },
    { name: "Dilini kodithuwakku", role: "Committee Member", photo: health4 },
    { name: "Dinusha Dahanayake", role: "Committee Member", photo: health5 },
    { name: "Dinuka Malitha", role: "Committee Member", photo: health6 }
  ],
  research: [
    { name: "Lakshara Alwis", role: "Vice President", photo: research1 },
    { name: "Hasith sathsara", role: "Committee Member", photo: research2 },
    { name: "Mirasa kethaka", role: "Committee Member", photo: research3 },
    { name: "Madhuragavan Raveendran", role: "Committee Member", photo: research4 },
    { name: "Keshani Mahanama", role: "Committee Member", photo: research5 },
    { name: "Induwara Ilukkumbura", role: "Committee Member", photo: research6 },
    { name: "Kavindu Lakshan", role: "Committee Member", photo: research7 }
  ],

  editorial: [
    { name: "Dulmi Jayarathne", role: "Assistant Secretary", photo: editor1 },
    { name: "Theoda Hettiarachchi ", role: "Senior Editor", photo: editor2 },
    { name: "Imesh Yasindu", role: "Junior Editor", photo: editor3 },
    { name: "Kavisha Parindi", role: "Junior Editor", photo: editor4 },
    { name: "Helani Rajapaksha", role: "Junior Editor", photo: editor5 }
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