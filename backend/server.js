const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lucashxc:m%2BaP8T%266Z%2BAfSEV@cluster0.izukkb5.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,  // Make sure to hash this before storing
  name: String,
  profilePicture: String,
  interests: [String],
  socialMediaLinks: Map,
  preferences: Map,
  // ... other fields
});

const User = mongoose.model('User', userSchema);

// Define Event schema
const eventSchema = new mongoose.Schema({
  eventName: String,
  description: String,
  date: Date,
  time: String,
  venue: String,
  address: String,
  imageBanner: String,
  ticketPrice: Number,
  ticketLink: String,
  // ... other fields
});

const Event = mongoose.model('Event', eventSchema);

// Define Article schema
const articleSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  author: String,
  publishDate: Date,
  images: [String],
  // ... other fields
});

const Article = mongoose.model('Article', articleSchema);

// Define MonthlyMeeting schema
const monthlyMeetingSchema = new mongoose.Schema({
  topic: String,
  schedule: Date,
  venue: String,
  // ... other fields
});

const MonthlyMeeting = mongoose.model('MonthlyMeeting', monthlyMeetingSchema);

// ... other schemas for User-Event Interaction, User-Article Interaction, etc.

// Now, you can use the User, Event, Article, etc., models to query and modify your database.


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// Mock Database
const meetingRSVPs = {
  totalAttendees: 0
};

// Endpoint to RSVP
app.post('/rsvp', (req, res) => {
  if (meetingRSVPs.totalAttendees >= 200) {
    return res.status(400).json({ message: 'Limit of 200 attendees reached' });
  }

  meetingRSVPs.totalAttendees += 1;
  res.json({ totalAttendees: meetingRSVPs.totalAttendees });
});

// Endpoint to Fetch Total Attendees
app.get('/attendeesCount', (req, res) => {
  res.json({ totalAttendees: meetingRSVPs.totalAttendees });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
