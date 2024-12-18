import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phno, setPhno] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signup', {
        username,
        email,
        phno,
        password,
      });

      setMessage(response.data.message); // Show success message
      if (response.status === 201) {
        navigate('/login'); // Redirect to login after signup
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error occurred.'); // Show error message
    }
  };

  return (
    <div className='bdy'>
    <div className="signup-container">
      <div className="signup-form">
        <h1>Create an Account</h1>
        <p>Join us today and experience effortless ticket booking at your fingertips!</p>
        <br/>
        <form onSubmit={handleSubmit}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Enter your gmail"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Phone Number</span>
          <input
            type="text"
            name="phno"
            placeholder="+91 "
            value={phno}
            required
            onChange={(e) => setPhno(e.target.value)}
          />
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="At least 8 characters"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
          <br/>
          <button type="submit">Sign Up</button>
        </form>
        <br/>
        <p>
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default Signup;
