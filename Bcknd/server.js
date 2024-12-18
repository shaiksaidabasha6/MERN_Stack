// 1const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const PORT = process.env.PORT || 3001;
// //const MONGODB_URI = 'mongodb://localhost:127.0.0.1.27017/Airconnect_Project'; // Replace with your MongoDB URI
// const MONGODB_URI = 'mongodb://127.0.0.1:27017/Airconnect_Project';


// const app = express();
// app.use(express.json()); // Parse JSON requests
// app.use(cors()); // Enable Cross-Origin Resource Sharing

// // Connect to MongoDB
// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected successfully!');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error.message);
//     process.exit(1); // Exit process with failure
//   }
// };

// // Call the connectDB function
// connectDB();

// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     phno: String,
//     password: String,
//   });
  
//   // Create a User model
//   const User = mongoose.model('Customers', userSchema);

//   const bookingSchema = new mongoose.Schema({
//     userEmail: { type: String, required: true }, // Changed from email to userEmail
//     departure: { type: String, required: true },
//     arrival: { type: String, required: true },
//     classType: { type: String, required: true },
//     ticketCount: { type: Number, required: true },
//     totalAmount: { type: Number, required: true },
//     selectedDate: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now },
//   });
  
  
//   const Booking = mongoose.model('Booked', bookingSchema);
  
//   // POST Route: To save booking details
//   app.post('/bookings', async (req, res) => {
//     console.log(req.body);
//     try {
//       const { userEmail,departure, arrival, classType, ticketCount, totalAmount, selectedDate } = req.body;
  
//       // Validate input
//       if (!userEmail || !departure || !arrival || !classType || !ticketCount || !totalAmount || !selectedDate) {
//         return res.status(400).json({ message: 'All fields are required.' });
//       }
  
//       // Create a new booking
//       const newBooking = new Booking({
//         userEmail,
//         departure,
//         arrival,
//         classType,
//         ticketCount,
//         totalAmount,
//         selectedDate,
//       });
  
//       // Save to database
//       await newBooking.save();
  
//       res.status(201).json({ message: 'Booking saved successfully!', booking: newBooking });
//     } catch (error) {
//       console.error('Error saving booking:', error.message);
//       res.status(500).json({ message: 'Server error. Please try again later.' });
//     }
//   });
  
//   // GET Route: To fetch all bookings
//   app.get('/bookings', async (req, res) => {
//     try {
//       const bookings = await Booking.find();
//       res.status(200).json(bookings);
//     } catch (error) {
//       console.error('Error fetching bookings:', error.message);
//       res.status(500).json({ message: 'Server error. Please try again later.' });
//     }
//   });

// app.get('/', (req, res) => {
//   res.send('Backend is running!');
// });


// app.post('/signup', async (req, res) => {
//     console.log(req.body);
//     // res.send(req.body);

//     const { username, email, phno, password } = req.body;

//   try {
//     // Check for missing fields
//     if (!username || !email || !phno || !password) {
//       return res.status(400).json({ message: 'All fields are required.' });
//     }

//     // Create a new user
//     const newUser = new User({
//       username,
//       email,
//       phno,
//       password,
//     });

//     // Save user to the database
//     await newUser.save();

//     return res.status(201).json({ message: 'User registered successfully!' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error. Please try again later.' });
//   }

//     // res.status(201).json({ message: 'User registered successfully!' });

// });


// app.post("/login",async (req,res)=>{

//     const { email, password } = req.body;
//     console.log(email);
//     try {
//         // Check for missing fields
//         if (!email || !password) {
//           return res.status(400).json({ message: 'Email and Password are required.' });
//         }
    
//         // Find user by email
//         const user = await User.findOne({ email });
//         if (!user) {
//           return res.status(401).json({ message: 'Invalid email or password.' });
//         }
//         const isMatch = password === user.password;
    
//         if (!isMatch) {
//           return res.status(401).json({ message: 'Invalid email or password.' });
//         }
    
//         res.status(200).json({ message: 'Login successful!', user: { email: user.email, username: user.username } });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error. Please try again later.' });
//       }
    

// })

// app.listen(PORT,(error)=>{
//     if(!error)
//     {
//         console.log("Server is runingg");
//     }
//     else
//         console.log("Server Connection failed");
// 1})
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const MONGODB_URI = 'mongodb://127.0.0.1:27017/Airconnect_Project'; // Updated MongoDB URI

const app = express();
app.use(express.json());

app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};
connectDB();

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phno: { type: String, required: true },
  password: { type: String, required: true },
});

// User Model
const User = mongoose.model('User', userSchema);

// Signup Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and Password are required." });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Validate password (use bcrypt for hashing in production)
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Successful login
    res.status(200).json({
      message: "Login successful!",
      user: { email: user.email, username: user.username },
    });
  } catch (error) {
    console.error("Error in /login:", error.message);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

app.post('/signup', async (req, res) => {
  const { username, email, phno, password } = req.body;

  try {
    // Check for missing fields
    if (!username || !email || !phno || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Save user to the database
    const newUser = new User({ username, email, phno, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});
const bookingSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  classType: { type: String, required: true },
  ticketCount: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  selectedDate: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.model('Booking', bookingSchema);

// POST Route to handle booking submission
app.post('/bookings', async (req, res) => {
  console.log('Received booking request:', req.body); // Log the booking details for debugging

  const { userEmail, departure, arrival, classType, ticketCount, totalAmount, selectedDate } = req.body;

  // Validate that all fields are provided
  if (!userEmail || !departure || !arrival || !classType || !ticketCount || !totalAmount || !selectedDate) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Create a new booking document
    const newBooking = new Booking({
      userEmail,
      departure,
      arrival,
      classType,
      ticketCount,
      totalAmount,
      selectedDate,
    });

    // Save the new booking to the database
    await newBooking.save();

    // Send a success response with the created booking data
    res.status(201).json({ message: 'Booking saved successfully!', booking: newBooking });
  } catch (error) {
    // Handle errors and send a failure response
    console.error('Error saving booking:', error.message);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Listen to the server
app.listen(PORT, (error) => {
  if (!error) console.log(`Server is running on http://localhost:${PORT}`);
  else console.log('Server Connection failed');
});
