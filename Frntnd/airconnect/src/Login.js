// import React, { useState } from "react";
// import "./Login.css";
// import axios from 'axios'; 
// import { useNavigate,NavLink } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/login', {
//         email,
//         password,
//       });
//       // response.data.email
//       sessionStorage.setItem("isLoggedIn", true);
//       sessionStorage.setItem("email", response.data.user.email);
//       sessionStorage.setItem("username", response.data.user.username);
//       console.log(response);
//       navigate("/home",{ state: { name:response.data.user.username} });
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Error occurred.');
//     }
//   };

//   return (
//     <>
    
//           <NavLink to='/'>register</NavLink>
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="login-button">
//           Login
//         </button>
//       </form>
      
//       <h1>
//         {message}
//         </h1>
//     </div>
//     </>
//   );
// };

// export default Login;
import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login credentials:", { email, password }); // Debugging
  
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
  
      console.log("Login response:", response.data); 
  
      sessionStorage.setItem("isLoggedIn", true);
      sessionStorage.setItem("email", response.data.user.email);
      sessionStorage.setItem("username", response.data.user.username);
  
      navigate("/home", { state: { name: response.data.user.username } });
    } catch (error) {
      console.error("Login error:", error); // Debugging
      setMessage(error.response?.data?.message || "Error occurred during login.");
    }
  };
  
  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br/>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <NavLink to="/">Register here</NavLink>
        </p>
        {message && <p className="error-message">{message}</p>} {/* Error message display */}
      </div>
      
    </>
  );
};

export default Login;
