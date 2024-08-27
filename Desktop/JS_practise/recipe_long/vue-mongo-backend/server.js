const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/vue-mongo')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for your data
const DataSchema = new mongoose.Schema({
  id: Number,
  status: String,
  year: Number,
  resource_url: String,
  uri: String,
  artists: Array,
  artists_sort: String,
  labels: Array,
  companies: Array,
  formats: Array,
  data_quality: String,
  community: Object,
  format_quantity: Number,
  date_added: String,
  date_changed: String,
  num_for_sale: Number,
  lowest_price: Number,
  master_id: Number,
  master_url: String,
  title: String,
  country: String,
  released: String,
  notes: String,
  released_formatted: String,
  identifiers: Array,
  videos: Array,
});

// Create a model from the schema
const DataModel = mongoose.model('Data', DataSchema);

// API route to add data
app.post('/addData', async (req, res) => {
  const data = new DataModel(req.body);
  try {
    await data.save();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
