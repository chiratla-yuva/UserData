// Importing Dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes - Initialization
const authRoutes = require('./routes/authRoutes');
// Middleware - Initialization
const errorMiddleware = require('./middlewares/errorMiddleware');
// Load Environment Variables
dotenv.config();

// Middleware - Core Express Configurations
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// MongoDB - Database Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {console.log('MongoDB Connected');})
.catch(err => {console.error(err);});

// Routes - API Endpoints
app.use('/api/auth',authRoutes);

// Middleware - Error Handling
app.use(errorMiddleware);
// Server Initialization - Start the Express Server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`server running on PORT ${PORT}`);});