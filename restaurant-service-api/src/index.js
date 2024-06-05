const express = require('express');
const connectDB = require('./config/db');
const restaurantRoutes = require('./routes/restaurantRoutes');
const dotenv = require('dotenv');

dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI);


const app = express();
connectDB();

app.use(express.json());

app.use('/api', restaurantRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
