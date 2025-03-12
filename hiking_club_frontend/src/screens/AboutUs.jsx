  import React, { useEffect } from "react";
  import "../styles/AboutUs.css";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import profileimg1 from "../assets/images/Kaveesha_MHC.jpg";

  const committeeMembers = {
    executive: [...Array(9).keys()].map(i => ({ name: `Member ${i+1}`, role: "Executive" })),
    advisors: [...Array(2).keys()].map(i => ({ name: `Advisor ${i+1}`, role: "Advisor" })),
    editorial: [...Array(4).keys()].map(i => ({ name: `Editor ${i+1}`, role: "Editor" })),
    administration: [...Array(5).keys()].map(i => ({ name: `Admin ${i+1}`, role: "Admin" })),
    finance: [...Array(6).keys()].map(i => ({ name: `Finance ${i+1}`, role: "Finance" })),
    media: [...Array(7).keys()].map(i => ({ name: `Media ${i+1}`, role: "Media" })),
    health: [...Array(6).keys()].map(i => ({ name: `Health ${i+1}`, role: "Health & Safety" })),
    research: [...Array(7).keys()].map(i => ({ name: `R&D ${i+1}`, role: "Research & Development" })),
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
              <img src={profileimg1} alt={member.name} className="member-photo" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <div className="committee-row">
          {members.slice(row1Count).map((member, index) => (
            <div key={index} className="committee-member" data-aos="fade-up">
              <img src={profileimg1} alt={member.name} className="member-photo" />
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
        {renderCommittee("Editorial Panel", committeeMembers.editorial, 4)}
        {renderCommittee("Administration Committee", committeeMembers.administration, 1)}
        {renderCommittee("Finance Committee", committeeMembers.finance, 1)}
        {renderCommittee("Media Committee", committeeMembers.media, 1)}
        {renderCommittee("Health & Safety Committee", committeeMembers.health, 1)}
        {renderCommittee("Research & Development Committee", committeeMembers.research, 1)}
      </div>
    );
  };

  export default AboutUs;
