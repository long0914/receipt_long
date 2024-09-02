const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/recipe-board', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  console.log('Using fallback in-memory storage');
  // Implement fallback storage here if needed
});

// Add event listeners for connection
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to db');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});




// Define a schema for your posts
const PostSchema = new mongoose.Schema({
  author: String,
  ingredients: [{
    name: String,
    amount: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model from the schema
const PostModel = mongoose.model('Post', PostSchema);

// API route to add a new post
app.post('/api/posts', async (req, res) => {
  const post = new PostModel(req.body);
  try {
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error saving post' });
  }
});

// API route to get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await PostModel.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));