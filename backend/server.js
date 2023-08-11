const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contentful = require('contentful');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.mongodb+srv://lucashxc:m%2BaP8T%266Z%2BAfSEV@cluster0.izukkb5.mongodb.net/, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Contentful Client
const contentfulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

// Routes from Contentful
app.get('/api/contentful/articles', async (req, res) => {
    try {
        const response = await contentfulClient.getEntries({ content_type: 'article' });
        res.json(response.items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
});

app.get('/api/contentful/meetings', async (req, res) => {
    try {
        const response = await contentfulClient.getEntries({ content_type: 'meeting' });
        res.json(response.items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch meetings' });
    }
});

app.get('/api/contentful/events', async (req, res) => {
    try {
        const response = await contentfulClient.getEntries({ content_type: 'event' });
        res.json(response.items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

// Other routes
const userRoutes = require('./routes/userRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const profileRoutes = require('./routes/profileRoutes');

app.use('/api/users', userRoutes);
app.use('/api/meetings', meetingRoutes);
app.use('/api/profile', profileRoutes);

// Mock RSVP system
const meetingRSVPs = {
    totalAttendees: 0
};

app.post('/rsvp', (req, res) => {
    if (meetingRSVPs.totalAttendees >= 200) {
        return res.status(400).json({ message: 'Limit of 200 attendees reached' });
    }

    meetingRSVPs.totalAttendees += 1;
    res.json({ totalAttendees: meetingRSVPs.totalAttendees });
});

app.get('/attendeesCount', (req, res) => {
    res.json({ totalAttendees: meetingRSVPs.totalAttendees });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// User schema and model
const userSchema = new mongoose.Schema({
    email: String,
    password: String, // Make sure to hash this before storing
    name: String,
    profilePicture: String,
    interests: [String],
    socialMediaLinks: Map,
    preferences: Map,
    // ... other fields
});

const User = mongoose.model('User', userSchema);

// Event schema and model
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
