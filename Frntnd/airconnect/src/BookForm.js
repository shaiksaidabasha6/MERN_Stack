// import React, { useState } from "react";
import "./style.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

export default function BookForm() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const userEmail = sessionStorage.getItem("email");

  const [classType, setClassType] = useState("Economy");
  const [ticketCount, setTicketCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleClassChange = (event) => {
    setClassType(event.target.value);
    calculateTotalAmount(ticketCount, event.target.value);
  };

  const handleTicketChange = (event) => {
    const count = event.target.value;
    setTicketCount(count);
    calculateTotalAmount(count, classType);
  };

  const handleDepartureChange = (event) => {
    setDeparture(event.target.value);
  };

  const handleArrivalChange = (event) => {
    setArrival(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const calculateTotalAmount = (count, classType) => {
    const prices = {
      Economy: 100,
      "Premium Economy": 200,
      Business: 300,
      "First class": 500,
    };
    setTotalAmount(count * prices[classType]);
  };

  const handleBookNowClick = async () => {
    const bookingDetails = {
      userEmail,
      departure,
      arrival,
      classType,
      ticketCount,
      totalAmount,
      selectedDate,
    };

    console.log('Booking details:', bookingDetails);  // Log the booking details to check if the data is correct

    try {
      const response = await axios.post('http://localhost:3001/bookings', bookingDetails);
      console.log(response.data.message);  // Success message

      // Save booking details to localStorage
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

      setIsModalOpen(true);

      setTimeout(() => {
        navigate("/my-tickets");  // Navigate to "My Tickets" page after booking
      }, 2000);
    } catch (error) {
      console.error('Error booking flight:', error.response?.data?.message || 'Server error.');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Flight Booking</h2>

      <div className="form-group">
        <label htmlFor="departure" className="form-label">
          Departure Location
        </label>
        <input
          type="text"
          className="form-control"
          id="departure"
          placeholder="Enter Departure Location"
          value={departure}
          onChange={handleDepartureChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="arrival" className="form-label">
          Arrival Location
        </label>
        <input
          type="text"
          className="form-control"
          id="arrival"
          placeholder="Enter Arrival Location"
          value={arrival}
          onChange={handleArrivalChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="class" className="form-label">
          Choose a Class
        </label>
        <select
          name="class"
          id="class"
          className="form-control"
          value={classType}
          onChange={handleClassChange}
        >
          <option value="Economy">Economy</option>
          <option value="Premium Economy">Premium Economy</option>
          <option value="Business">Business</option>
          <option value="First class">First class</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="tickets" className="form-label">
          Number of Tickets
        </label>
        <input
          type="number"
          className="form-control"
          id="tickets"
          min="1"
          value={ticketCount}
          onChange={handleTicketChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="date" className="form-label">
          Select Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      <div className="total-amount">
        <h3>Total Amount: ${totalAmount}</h3>
      </div>

      <button className="btn" onClick={handleBookNowClick}>
        Book Now
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Booking Successful!</h3>
            <p><strong>Departure:</strong> {departure}</p>
            <p><strong>Arrival:</strong> {arrival}</p>
            <p><strong>Class:</strong> {classType}</p>
            <p><strong>Number of Tickets:</strong> {ticketCount}</p>
            <p><strong>Total Amount:</strong> ${totalAmount}</p>
            <p><strong>Date:</strong> {selectedDate}</p>
            <button className="btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
