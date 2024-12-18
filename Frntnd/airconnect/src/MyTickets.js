// import React, { useEffect, useState } from "react";
// import "./mytickets.css";
// export default function MyTickets() {
//   const [bookingDetails, setBookingDetails] = useState(null);

//   useEffect(() => {
//     const storedDetails = localStorage.getItem("bookingDetails");
//     if (storedDetails) {
//       setBookingDetails(JSON.parse(storedDetails));
//     }
//   }, []);

//   return (
//     <> 
//     <center><h1>My Tickets</h1></center>
//       <div className="my-tickets-container">
//         {bookingDetails ? (
//           <div className="ticket-details">
//             <p>
//               <strong>Departure:</strong> {bookingDetails.departure}
//             </p>
//             <p>
//               <strong>Arrival:</strong> {bookingDetails.arrival}
//             </p>
//             <p>
//               <strong>Class:</strong> {bookingDetails.classType}
//             </p>
//             <p>
//               <strong>Number of Tickets:</strong> {bookingDetails.ticketCount}
//             </p>
//             <p>
//               <strong>Total Amount:</strong> ${bookingDetails.totalAmount}
//             </p>
//             <p>
//               <strong>Date:</strong> {bookingDetails.selectedDate}
//             </p>
//           </div>
//         ) : (
//           <p>No booking details found.</p>
//         )}
//       </div>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import "./mytickets.css";

export default function MyTickets() {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    // Retrieve the booking details from localStorage
    const storedDetails = localStorage.getItem("bookingDetails");
    if (storedDetails) {
      setBookingDetails(JSON.parse(storedDetails));
    }
  }, []);

  return (
    <> 
      <center><h1>My Tickets</h1></center>
      <div className="my-tickets-container">
        {bookingDetails ? (
          <div className="ticket-details">
            <p><strong>Departure:</strong> {bookingDetails.departure}</p>
            <p><strong>Arrival:</strong> {bookingDetails.arrival}</p>
            <p><strong>Class:</strong> {bookingDetails.classType}</p>
            <p><strong>Number of Tickets:</strong> {bookingDetails.ticketCount}</p>
            <p><strong>Total Amount:</strong> ${bookingDetails.totalAmount}</p>
            <p><strong>Date:</strong> {bookingDetails.selectedDate}</p>
          </div>
        ) : (
          <p>No booking details found.</p>
        )}
      </div>
    </>
  );
}
