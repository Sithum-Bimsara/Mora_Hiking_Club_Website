// import React from 'react';
// import '../styles/AboutUs.css';

// const executiveCommittee = [
//   {
//     name: "John Doe",
//     photo: "../styles/logo.png",
//     designation: "President",
//   },
//   {
//     name: "Jane Smith",
//     photo: "../styles/logo.png",
//     designation: "Vice President",
//   },
//   {
//     name: "Alice Johnson",
//     photo: "../styles/logo.png",
//     designation: "Secretary",
//   },
//   {
//     name: "Bob Brown",
//     photo: "../styles/logo.png",
//     designation: "Treasurer",
//   },
//   {
//     name: "Charlie Davis",
//     photo: "../styles/logo.png",
//     designation: "Event Coordinator",
//   },
//   {
//     name: "Diana Evans",
//     photo: "../styles/logo.png",
//     designation: "Public Relations Officer",
//   },
//   {
//     name: "Ethan Green",
//     photo: "../styles/logo.png",
//     designation: "Logistics Manager",
//   },
//   {
//     name: "Fiona Harris",
//     photo: "../styles/logo.png",
//     designation: "Membership Coordinator",
//   },
// ];

// const AboutUs = () => {
//   return (
//     <div className="about-us">
//       <h1>About Mora Hiking Club</h1>
//       <p>
//         Welcome to the Mora Hiking Club – where adventure meets nature, and every trail is a new story waiting to be written.
//         Founded with a passion for exploring the beauty of the great outdoors, Mora Hiking Club is a community of enthusiastic hikers,
//         adventurers, and nature lovers who are committed to discovering the hidden gems of Sri Lanka.
//       </p>

//       <h2>Executive Committee</h2>
//       <div className="committee-grid">
//         {executiveCommittee.map((member, index) => (
//           <div className="committee-card" key={index}>
//           <div className="committee-image">
//             <img
//               src={member.photo}
//               alt={member.name}
//               onError={(e) => {
//                 e.target.src = "../styles/logo.png";
//               }}
//             />
//           </div>
//           <div className="committee-details">
//             <h3 className="member-name">{member.name}</h3>
//             <p className="member-designation">{member.designation}</p>
//           </div>
//         </div>
        
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import "../styles/AboutUs.css";
import hikingImage from "../assets/images/hiker.jpg";
import profileimg1 from "../assets/images/Kaveesha_MHC.jpg";
 

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Mora Hiking Club</h1>
      <p className="aboutp">
Founded with a passion for exploring the beauty of the great outdoors, Mora Hiking Club is a community of enthusiastic hikers, adventurers, and nature lovers who are committed to discovering the hidden gems of Sri Lanka. We always inspire individuals to connect with nature, push their limits, and embrace the spirit of adventure while fostering teamwork, sustainability, and personal growth.

In 2016, what started as a small group of hiking enthusiasts at the University of Moratuwa has grown into a vibrant community of like-minded individuals who share a love for the outdoors. Over the years, we’ve trekked through forests, scaled mountains, and explored historic sites, all while enjoying the breathtaking landscapes that our world has to offer.

Through our carefully curated hikes, we aim to create unforgettable experiences, where members can challenge themselves physically, expand their horizons, and forge lifelong friendships. Each hike is an opportunity to bond with others, learn about nature, and develop skills that extend beyond the trail.

We host regular hiking events, expeditions, and flagship events like CYKEL, STRIDIAN, and RAPPEL RUSH that encourage a sense towards nature.

Whether you are an experienced hiker or looking to take your first step into the wild, Mora Hiking Club welcomes you. Our community is here to support you, challenge you, and ensure you have the best possible adventure. Join us as we explore the most stunning trails, connect with nature, and create memories that will last a lifetime.

Embrace the trail, discover your potential, and let’s hike together!
      </p>

      <h1>Executive Committee 2025 </h1>
      {/* First row - 3 members centered */}
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 2" className="member-photo" />
          <h2>Nijayee Umaya</h2>
          <p>Secretary</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Dulmi Jayarathne</h2>
          <p>Assistant Secretary</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
      </div>

      {/* Second row - 5 members */}
      <div className="committee-grid">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 4" className="member-photo" />
          <h2>Dokula Perera</h2>
          <p>Vice President - Admin</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 5" className="member-photo" />
          <h2>Duvindu Sahan</h2>
          <p>Vice President - Finance</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 6" className="member-photo" />
          <h2>Kaveesha Kapuruge</h2>
          <p>Vice President - Media</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 7" className="member-photo" />
          <h2>Lakshara Alwis</h2>
          <p>Vice President - R & D</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 8" className="member-photo" />
          <h2>Thishala Thathsarani</h2>
          <p>Vice President - Health & Safety</p>
        </div>
      </div>
    <hr />
      <h2>Advisors</h2>
      {/* First row - 3 members centered */}
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 2" className="member-photo" />
          <h2>Nijayee Umaya</h2>
          <p>Secretary</p>
        </div>
      
         
      </div>
<hr></hr>
      <h2>Editorial Panel</h2>
      {/* First row - 3 members centered */}
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 2" className="member-photo" />
          <h2>Nijayee Umaya</h2>
          <p>Secretary</p>
        </div>  
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Dulmi Jayarathne</h2>
          <p>Assistant Secretary</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
      </div>
    <hr/>
    <h2>Adminstration Committee </h2>
      {/* First row - 3 members centered */}
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
      </div>
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 2" className="member-photo" />
          <h2>Nijayee Umaya</h2>
          <p>Secretary</p>
        </div>  
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Dulmi Jayarathne</h2>
          <p>Assistant Secretary</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
      </div>
      <hr/>
      <h2>Finance Committee </h2>
      {/* First row - 3 members centered */}
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
      </div>
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 2" className="member-photo" />
          <h2>Nijayee Umaya</h2>
          <p>Secretary</p>
        </div>  
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Dulmi Jayarathne</h2>
          <p>Assistant Secretary</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
      </div> 
      <hr/>
      <h2>Media Committee </h2>
      {/* First row - 3 members centered */}
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
      </div>
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 2" className="member-photo" />
          <h2>Nijayee Umaya</h2>
          <p>Secretary</p>
        </div>  
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Dulmi Jayarathne</h2>
          <p>Assistant Secretary</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
      </div>  

      <hr/>
      <h2>Health and Safety Committee </h2>
      {/* First row - 3 members centered */}
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
      </div>
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 2" className="member-photo" />
          <h2>Nijayee Umaya</h2>
          <p>Secretary</p>
        </div>  
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Dulmi Jayarathne</h2>
          <p>Assistant Secretary</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
        
      </div> 
      <hr/>
      <h2>Research and Development Committee </h2>
      {/* First row - 3 members centered */}
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
      </div>
      <div className="committee-row">
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 1" className="member-photo" />
          <h2>Nisal Rajapaksha</h2>
          <p>President</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 2" className="member-photo" />
          <h2>Nijayee Umaya</h2>
          <p>Secretary</p>
        </div>  
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Dulmi Jayarathne</h2>
          <p>Assistant Secretary</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
        <div className="committee-member">
          <img src={profileimg1} alt="Committee Member 3" className="member-photo" />
          <h2>Senior Lecturer Mr. Suranga Jayasena</h2>
          <p>Senior Treasurer</p>
        </div>
      </div>  
    </div>
  );
};

export default AboutUs;
