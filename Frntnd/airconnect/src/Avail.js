// import React from "react";
// import Card from "./Card";
// import "./Head.css";

// export default function Avail() {
//   return (
//     <>
//       <div className="avail-container">

//         <Card image="https://png.pngtree.com/thumb_back/fw800/background/20231001/pngtree-d-rendered-image-booking-airline-tickets-online-with-calendar-for-tourism-image_13549511.png" sd="Gannavaram - Delhi" />
//         <Card image="https://blog-content.ixigo.com/wp-content/uploads/2023/03/How-to-book-flight-tickets-online.jpeg" sd="Gannavaram - Mumbai"/>
   
//         <Card image="https://www.flamingotravels.co.in/blog/wp-content/uploads/2022/01/Main_image3.jpg" sd="Gannavaram - Pune"/>
//         <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTHqg8cSCvs-11dgvqPRxF18f_xSzk7mgkg&s" sd="Gannavaram - Bengaluru"/>
        
//       </div>
//     </>
//   );
// }
import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import "./Head.css"; 

export default function Avail() {
  const navigate = useNavigate(); 

  const handleBookNowClick = () => {
    
    navigate("/book");
  };
  return (
    <div className="avail-container">
      <header className="avail-header">
        <h1>Flight Availability</h1>
        <p>Find the best flights for your journey with just a few clicks</p>
      </header>

      <section className="avail-content">
        <div className="avail-card-container">
          {/* Flight 1 */}
          <div className="card">
            <img 
              src="https://png.pngtree.com/thumb_back/fw800/background/20231001/pngtree-d-rendered-image-booking-airline-tickets-online-with-calendar-for-tourism-image_13549511.png" 
              alt="Gannavaram - Delhi" 
            />
            <div className="card-body">
              <h3>Gannavaram - Delhi</h3>
              <p className="card-details">Departure Time: 10:00 AM</p>
              <p className="card-details">Arrival Time: 12:30 PM</p>
              <p className="card-details">Available Price: ₹15,000</p>
              <button className="book-btn" onClick={handleBookNowClick}>Book Now</button>
            </div>
          </div>

          <div className="card">
            <img 
              src="https://blog-content.ixigo.com/wp-content/uploads/2023/03/How-to-book-flight-tickets-online.jpeg" 
              alt="Gannavaram - Mumbai" 
            />
            <div className="card-body">
              <h3>Gannavaram - Mumbai</h3>
              <p className="card-details">Departure Time: 11:00 AM</p>
              <p className="card-details">Arrival Time: 1:00 PM</p>
              <p className="card-details">Available Price: ₹12,500</p>
              <button className="book-btn" onClick={handleBookNowClick}>Book Now</button>
            </div>
          </div>

          <div className="card">
            <img 
              src="https://www.flamingotravels.co.in/blog/wp-content/uploads/2022/01/Main_image3.jpg" 
              alt="Gannavaram - Pune" 
            />
            <div className="card-body">
              <h3>Gannavaram - Pune</h3>
              <p className="card-details">Departure Time: 9:30 AM</p>
              <p className="card-details">Arrival Time: 11:00 AM</p>
              <p className="card-details">Available Price: ₹10,000</p>
              <button className="book-btn" onClick={handleBookNowClick}>Book Now</button>
            </div>
          </div>
          <div className="card">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTHqg8cSCvs-11dgvqPRxF18f_xSzk7mgkg&s" 
              alt="Gannavaram - Kochi" 
            />
            <div className="card-body">
              <h3>Gannavaram - Kochi</h3>
              <p className="card-details">Departure Time: 8:00 AM</p>
              <p className="card-details">Arrival Time: 9:30 AM</p>
              <p className="card-details">Available Price: ₹13,000</p>
              <button className="book-btn" onClick={handleBookNowClick}>Book Now</button>
            </div>
          </div>


          {/* <div className="card">
            <img 
              url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVw7FFKyO_TpRq6tKiPB1Q2Lsy0s5gaxI8Q&s" 
              alt="Gannavaram - Chennai" 
            />
            <div className="card-body">
              <h3>Gannavaram - Chennai</h3>
              <p className="card-details">Departure Time: 7:30 AM</p>
              <p className="card-details">Arrival Time: 9:00 AM</p>
              <p className="card-details">Available Price: ₹14,500</p>
              <button className="book-btn">Book Now</button>
            </div>
          </div> */}

          {/* New Flight 6 */}
          {/* <div className="card">
            <img 
              src="https://cdn.pixabay.com/photo/2022/03/02/20/43/plane-7042949_960_720.jpg" 
              alt="Gannavaram - Hyderabad" 
            />
            <div className="card-body">
              <h3>Gannavaram - Hyderabad</h3>
              <p className="card-details">Departure Time: 5:45 AM</p>
              <p className="card-details">Arrival Time: 7:15 AM</p>
              <p className="card-details">Available Price: ₹16,000</p>
              <button className="book-btn">Book Now</button>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
