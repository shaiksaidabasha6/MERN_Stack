// import React from "react";
// /*import "./Head.css";*/
// import "./new.css";
// import { useNavigate, useLocation, NavLink } from 'react-router-dom';

// export default function Head() {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const { name } = location.state || {}; 
//   const isLoggedIn = sessionStorage.getItem("isLoggedIn");
//   const userEmail = sessionStorage.getItem("email");
//   const username = sessionStorage.getItem("username");

//   const handleLogout = () => {
//     // Clear session storage on logout
//     sessionStorage.clear();
//     navigate("/login");
//   };

//   if (!isLoggedIn) {
//     navigate("/"); }

//   return (
//     <>
//       <h1 style={{ marginTop:"15px",textAlign: "center", color: "#000", fontFamily: 'Arial, sans-serif', fontSize: '36px' }}>
//         Heyy {username}..!
//       </h1>
//       <div className="home-container">
//         <div className="content-container">
//           <h2 className="welcome-message">Welcome to Basha's AirConnects!</h2>
//           <p className="intro-text">
//             Basha's AirConnects is not just another airline – it's your trusted partner in creating seamless and enjoyable air travel experiences. Whether you're traveling for business or pleasure, our services are designed to provide unparalleled comfort, safety, and reliability.
//           </p>
          

//           <h3 className="contact-us-heading">Get In Touch</h3>
//           <p className="contact-info">
//             For any inquiries, support, or suggestions, please feel free to reach out to us at:
//             <br />
//             <strong>Email:</strong> <a href="mailto:support@airconnects.com">support@bashaairconnects.com</a>
//           </p>

//           <button onClick={handleLogout} className="Logbtn">Logout</button>
//         </div>
//       </div>

//       <div className="footer">
//         <p>&copy; 2024 Basha's AirConnects. All rights reserved.</p>
//       </div>
//     </>
//   );
// }
import React from "react";
/*import "./Head.css";/*/
import "./new.css";
import { useNavigate, useLocation, NavLink } from 'react-router-dom';

export default function Head() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { name } = location.state || {}; 
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const userEmail = sessionStorage.getItem("email");
  const username = sessionStorage.getItem("username");

  const handleLogout = () => {
    // Clear session storage on logout
    sessionStorage.clear();
    navigate("/login");
  };

  if (!isLoggedIn) {
    navigate("/"); }

  return (
    <>
      <h1 style={{ marginTop:"15px",textAlign: "center", color: "#000", fontFamily: 'Arial, sans-serif', fontSize: '36px' }}>
        Heyy {username}..!
      </h1>
      <div className="home-container">
        <div className="content-container">
          <h2 className="welcome-message">Welcome to Basha's AirConnects!</h2>
          <p className="intro-text">
            Basha's AirConnects is not just another airline – it's your trusted partner in creating seamless and enjoyable air travel experiences. Whether you're traveling for business or pleasure, our services are designed to provide unparalleled comfort, safety, and reliability.
          </p>
 

          <h3 className="contact-us-heading">Get In Touch</h3>
          <p className="contact-info">
            For any inquiries, support, or suggestions, please feel free to reach out to us at:
            <br />
            <strong>Email:</strong> <a href="mailto:support@airconnects.com">support@bashaairconnects.com</a>
          </p>

          <button onClick={handleLogout} className="Logbtn">Logout</button>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 Basha's AirConnects. All rights reserved.</p>
      </div>
    </>
  );
}